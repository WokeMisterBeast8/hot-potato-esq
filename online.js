// Hot Potato, Esq. — online layer (Firebase Realtime Database + anonymous sign-in).
// Loaded only when config.js provides a Firebase config. Everything here is optional:
// the game runs offline without it.
const V = '10.12.2';
const base = `https://www.gstatic.com/firebasejs/${V}/`;

export async function connect(config) {
  const { initializeApp } = await import(base + 'firebase-app.js');
  const { getAuth, signInAnonymously, onAuthStateChanged } = await import(base + 'firebase-auth.js');
  const D = await import(base + 'firebase-database.js');
  const app = initializeApp(config);
  const auth = getAuth(app);
  const db = D.getDatabase(app);
  const user = await new Promise((res, rej) => {
    const stop = onAuthStateChanged(auth, u => { if (u) { stop(); res(u); } });
    signInAnonymously(auth).catch(rej);
  });
  let offset = 0;
  D.onValue(D.ref(db, '.info/serverTimeOffset'), s => { offset = s.val() || 0; });
  const r = p => D.ref(db, p);
  const clean = o => JSON.parse(JSON.stringify(o)); // strips undefined

  const api = {
    uid: user.uid,
    now: () => Date.now() + offset,

    // ---------- leaderboards ----------
    async submit(board, e) {
      await D.push(r('lb/' + board), clean({ ...e, uid: user.uid, ts: D.serverTimestamp() }));
    },
    async top(board, n = 10) {
      const s = await D.get(D.query(r('lb/' + board), D.orderByChild('score'), D.limitToLast(n)));
      const out = []; s.forEach(c => { out.push(c.val()); });
      return out.sort((a, b) => b.score - a.score);
    },

    // ---------- rooms ----------
    async createRoom(code, slot) {
      const ex = await D.get(r(`rooms/${code}/meta`));
      if (ex.exists()) return false;
      await D.set(r(`rooms/${code}/meta`), { host: user.uid, status: 'lobby', created: D.serverTimestamp() });
      await D.set(r(`rooms/${code}/slots/${user.uid}`), clean({ ...slot, order: Date.now() }));
      D.onDisconnect(r(`rooms/${code}`)).remove();
      return true;
    },
    async joinRoom(code, slot) {
      const m = await D.get(r(`rooms/${code}/meta`));
      if (!m.exists()) return 'No lobby with that code.';
      if (m.val().status !== 'lobby') return 'That match already started.';
      const sl = await D.get(r(`rooms/${code}/slots`));
      if (sl.exists() && Object.keys(sl.val()).length >= 8) return 'That lobby is full.';
      await D.set(r(`rooms/${code}/slots/${user.uid}`), clean({ ...slot, order: Date.now() }));
      D.onDisconnect(r(`rooms/${code}/slots/${user.uid}`)).remove();
      D.onDisconnect(r(`rooms/${code}/inputs/${user.uid}`)).remove();
      return null;
    },
    async leaveRoom(code, isHost) {
      if (isHost) { await D.remove(r(`rooms/${code}`)); }
      else { await D.remove(r(`rooms/${code}/slots/${user.uid}`)); }
      D.onDisconnect(r(`rooms/${code}`)).cancel();
    },
    setSlot: (code, id, slot) => D.set(r(`rooms/${code}/slots/${id}`), slot ? clean(slot) : null),
    setMeta: (code, patch) => D.update(r(`rooms/${code}/meta`), patch),
    chat: (code, msg) => D.push(r(`rooms/${code}/chat`), clean({ ...msg, ts: D.serverTimestamp() })),
    publish: (code, state) => D.set(r(`rooms/${code}/state`), clean(state)),
    input: (code, v) => D.set(r(`rooms/${code}/inputs/${user.uid}`), v),
    watch(code, h) {
      const offs = [];
      offs.push(D.onValue(r(`rooms/${code}/meta`), s => h.meta && h.meta(s.val())));
      offs.push(D.onValue(r(`rooms/${code}/slots`), s => h.slots && h.slots(s.val() || {})));
      offs.push(D.onChildAdded(D.query(r(`rooms/${code}/chat`), D.limitToLast(60)), s => h.chat && h.chat(s.val())));
      if (h.state) offs.push(D.onValue(r(`rooms/${code}/state`), s => h.state(s.val())));
      if (h.inputs) offs.push(D.onValue(r(`rooms/${code}/inputs`), s => h.inputs(s.val() || {})));
      return () => offs.forEach(f => f());
    },
  };
  return api;
}
