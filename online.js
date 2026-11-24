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

    // Live top-N: calls cb(rows) now and every time the board changes. Returns an unsubscribe function.
    watchTop(board, n, cb) {
      return D.onValue(D.query(r('lb/' + board), D.orderByChild('score'), D.limitToLast(n)), s => {
        const out = []; s.forEach(c => { out.push(c.val()); }); cb(out.sort((a, b) => b.score - a.score));
      }, () => cb(null));
    },

    // ---------- campus (global) chat ----------
    gchatWatch(cb) {
      return D.onChildAdded(D.query(r('gchat'), D.orderByChild('ts'), D.limitToLast(60)), s => cb({ key: s.key, ...s.val() }));
    },
    gchatSend: msg => D.push(r('gchat'), clean({ ...msg, uid: user.uid, ts: D.serverTimestamp() })),
    async gchatPrune() { // delete up to 25 messages older than a day, to keep the free database small
      const cut = Date.now() + offset - 86400000;
      const s = await D.get(D.query(r('gchat'), D.orderByChild('ts'), D.endAt(cut), D.limitToFirst(25)));
      const keys = []; s.forEach(c => { keys.push(c.key); });
      await Promise.all(keys.map(k => D.remove(r('gchat/' + k)).catch(() => {})));
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
    // Returns {err} on failure, or {spec:true} when joining as a spectator (lobby seats full mid-match).
    async joinRoom(code, slot) {
      const m = await D.get(r(`rooms/${code}/meta`));
      if (!m.exists()) return { err: 'No lobby with that code.' };
      const meta = m.val(), max = (meta.cfg && meta.cfg.max) || 8;
      const sl = await D.get(r(`rooms/${code}/slots`));
      const n = sl.exists() ? Object.keys(sl.val()).length : 0;
      D.onDisconnect(r(`rooms/${code}/inputs/${user.uid}`)).remove();
      if (n < max) {
        await D.set(r(`rooms/${code}/slots/${user.uid}`), clean({ ...slot, ready: false, order: Date.now() }));
        D.onDisconnect(r(`rooms/${code}/slots/${user.uid}`)).remove();
        return { spec: false };
      }
      if (meta.status !== 'playing') return { err: 'That lobby is full.' };
      await D.set(r(`rooms/${code}/specs/${user.uid}`), clean({ n: slot.n, s: slot.s, c: slot.c, ts: Date.now() }));
      D.onDisconnect(r(`rooms/${code}/specs/${user.uid}`)).remove();
      return { spec: true };
    },
    async takeSeat(code, slot) {
      await D.set(r(`rooms/${code}/slots/${user.uid}`), clean({ ...slot, ready: false, order: Date.now() }));
      D.onDisconnect(r(`rooms/${code}/slots/${user.uid}`)).remove();
      await D.remove(r(`rooms/${code}/specs/${user.uid}`));
    },
    async leaveRoom(code, isHost) {
      if (isHost) { await D.remove(r(`pub/${code}`)).catch(() => {}); await D.remove(r(`rooms/${code}`)); }
      else { await D.remove(r(`rooms/${code}/slots/${user.uid}`)); await D.remove(r(`rooms/${code}/specs/${user.uid}`)).catch(() => {}); }
      D.onDisconnect(r(`rooms/${code}`)).cancel();
      D.onDisconnect(r(`pub/${code}`)).cancel();
    },
    patchSlot: (code, id, patch) => D.update(r(`rooms/${code}/slots/${id}`), clean(patch)),

    // ---------- public lobby list ----------
    async setPub(code, entry) {
      if (!entry) { await D.remove(r(`pub/${code}`)); D.onDisconnect(r(`pub/${code}`)).cancel(); return; }
      await D.set(r(`pub/${code}`), clean({ ...entry, host: user.uid, ts: D.serverTimestamp() }));
      D.onDisconnect(r(`pub/${code}`)).remove();
    },
    watchPub(cb) {
      return D.onValue(D.query(r('pub'), D.orderByChild('ts'), D.limitToLast(40)), s => {
        const out = []; s.forEach(c => { out.push({ code: c.key, ...c.val() }); }); cb(out.reverse());
      }, () => cb([]));
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
      offs.push(D.onValue(r(`rooms/${code}/specs`), s => h.specs && h.specs(s.val() || {})));
      offs.push(D.onChildAdded(D.query(r(`rooms/${code}/chat`), D.limitToLast(60)), s => h.chat && h.chat(s.val())));
      if (h.state) offs.push(D.onValue(r(`rooms/${code}/state`), s => h.state(s.val())));
      if (h.inputs) offs.push(D.onValue(r(`rooms/${code}/inputs`), s => h.inputs(s.val() || {})));
      return () => offs.forEach(f => f());
    },
  };
  return api;
}
