# Hot Potato, Esq. — putting it online for free

You'll use two free services:

- **GitHub Pages** hosts the game's files, so anyone with the link can play.
- **Firebase** (free Spark plan) runs online lobbies, chat and the global leaderboards.

Plan on about 30 minutes. You don't need to write any code. You'll copy one block of settings into one file.

---

## What's in this folder

| File | What it is |
|---|---|
| `index.html`, `style.css`, `game.js`, `data.json` | The game itself |
| `online.js` | The online code (lobbies, chat, leaderboards) |
| `config.js` | **The one file you edit.** It holds your Firebase settings. |
| `database.rules.json` | Security rules you paste into Firebase |
| `SETUP.md` | This guide |

Until you fill in `config.js`, the game runs offline: story mode, bot matches and local leaderboards all work.

---

## Part 1 — Set up Firebase (about 15 minutes)

1. Go to **console.firebase.google.com** and sign in with a Google account.
2. Click **Create a project**. Name it something like `hot-potato-esq`. You can turn off Google Analytics, since the game doesn't use it. Finish creating the project.
3. **Turn on anonymous sign-in.** This gives each player a private ID without asking for an email.
   - In the left menu, open **Build → Authentication**, then click **Get started**.
   - Open the **Sign-in method** tab, choose **Anonymous**, switch it **on**, and save.
4. **Create the database.**
   - Open **Build → Realtime Database**, then click **Create Database**. Be sure to pick *Realtime Database*, not Firestore.
   - Pick a location (the United States is fine), then choose **Start in locked mode**.
5. **Paste in the security rules.**
   - In Realtime Database, open the **Rules** tab.
   - Delete everything there, paste the entire contents of `database.rules.json`, and click **Publish**.
   - These rules let only signed-in players write, stop people from editing each other's scores, and cap scores at a believable maximum.
6. **Get your settings.**
   - Click the gear icon next to **Project Overview**, then **Project settings**.
   - Under **Your apps**, click the web icon `</>`. Name the app `hot-potato`, leave "Firebase Hosting" unchecked, and register it.
   - Firebase shows a block of code containing `const firebaseConfig = { ... }`. Copy only the part from `{` to `}`.
   - Check that the block includes a `databaseURL` line. If it doesn't, reopen these settings after you've created the database and copy the block again.
7. **Put the settings into the game.** Open `config.js` in any text editor (Notepad, TextEdit, or VS Code) and replace:
   ```js
   window.HP_FIREBASE = null;
   ```
   with your block, like this:
   ```js
   window.HP_FIREBASE = {
     apiKey: "AIza...",
     authDomain: "hot-potato-esq.firebaseapp.com",
     databaseURL: "https://hot-potato-esq-default-rtdb.firebaseio.com",
     projectId: "hot-potato-esq",
     storageBucket: "hot-potato-esq.appspot.com",
     messagingSenderId: "...",
     appId: "..."
   };
   ```
   Save the file.

> **Is it safe to put these settings in a public file?** Yes. Firebase web settings are meant to be public. What protects your data is the security rules from step 5, not keeping these values secret.

---

## Part 2 — Put the game on GitHub Pages (about 10 minutes)

1. Make a free account at **github.com** if you don't have one.
2. Click **+** (top right) → **New repository**.
   - Name it `hot-potato-esq`.
   - Set it to **Public**. GitHub Pages is free only for public repositories, so anyone could read the game's files, but there's nothing secret in them.
   - Click **Create repository**.
3. On the new repository's page, click **uploading an existing file**. Drag in all the game files: `index.html`, `style.css`, `game.js`, `online.js`, `config.js` (the one you edited), `data.json`, `database.rules.json` and `SETUP.md`. Click **Commit changes**.
4. Open the repository's **Settings → Pages**. Under **Build and deployment**, set **Source** to **Deploy from a branch**, choose the **main** branch and the **/ (root)** folder, and click **Save**.
5. Wait a minute or two, then refresh the page. GitHub shows your link, which looks like:
   **`https://YOUR-USERNAME.github.io/hot-potato-esq/`**
6. Back in Firebase, open **Authentication → Settings → Authorized domains**, click **Add domain**, and add `YOUR-USERNAME.github.io`.

---

## Part 3 — Test it (5 minutes)

1. Open your link. The title screen should say **● ONLINE** next to your name.
   - If it says **online unavailable**, open **VS MODE** in the game to see the error message. It's usually a typo in `config.js`, or anonymous sign-in isn't turned on.
2. Open **VS MODE → CREATE ONLINE LOBBY**. You'll get a code like `SPUD-AB12`.
3. On your phone, or in a private browser window, open the same link, make a profile, then go to **VS MODE**, type the code and click **JOIN**.
4. Chat, add a bot or two, and start the match.
5. When the match ends, check **LEADERBOARDS → VS LEADERBOARD**. It should say **GLOBAL · online**. Then finish a Civil Procedure story floor and check the Story Leaderboard.

---

## How online play works (and its limits)

- **The host runs the match.** The person who created the lobby keeps the official timer and score, and everyone else's screen follows along. If the host closes the tab, the match ends for everyone. Ask whoever has the steadiest connection to host.
- **Civil Procedure only, for now.** Online VS matches and the online story leaderboards cover Civil Procedure. Torts and Contracts story scores stay on each player's own device.
- **Bot-only matches** count toward your personal VS board, not the global one. Only online lobbies post to the global VS Leaderboard.
- **Cheating:** the rules block the obvious tricks, like impossible scores or editing other people's entries, but a determined programmer could still fake a score. That's normal for a free setup without a dedicated server.
- **Free-plan limits:** Firebase's free plan allows up to 100 people connected at the same moment. If you ever go over, new connections are refused until people leave. You will **never** be charged on the free plan.

---

## Updating the game later

- **New or fixed questions:** replace `data.json` in your repository (**Add file → Upload files**, then commit). The site updates in a minute or two.
- **Clearing old lobbies:** they delete themselves when the host leaves. If any get stuck, delete the `rooms` entry in **Realtime Database → Data**.
- **Wiping the leaderboards:** delete the `lb` entry in **Realtime Database → Data**.
