/* Lingua Atlas — Google 로그인 + Firestore 동기화 (firebase-config.js 에 값이 있을 때만 동작) */
(function () {
  'use strict';
  const LL = window.LL, cfg = window.FIREBASE_CONFIG;
  const sync = (LL.sync = { available: !!cfg, user: null, status: '' });
  if (!cfg) return;
  const V = '10.12.2', base = 'https://www.gstatic.com/firebasejs/' + V + '/';
  const load = (f) => new Promise((ok, no) => { const s = document.createElement('script'); s.src = base + f; s.onload = ok; s.onerror = no; document.head.appendChild(s); });
  let db = null, timer = null, busy = false;
  const doc = () => db.collection('users').doc(sync.user.uid);
  const say = (m) => { sync.status = m; if (location.hash.startsWith('#/settings') && LL.rerender) LL.rerender(); };

  async function push() {
    if (!sync.user || busy) return;
    try { await doc().set({ state: JSON.stringify(LL.S), at: LL.S.at }); say('동기화됨 · ' + new Date().toLocaleTimeString()); }
    catch (e) { say('동기화 실패: ' + (e.code || e.message)); }
  }
  async function pull() {
    busy = true;
    try {
      const snap = await doc().get();
      const remote = snap.exists ? snap.data() : null;
      if (remote && remote.at > (LL.S.at || 0)) {
        const s = JSON.parse(remote.state);
        if (s && s.v === 1) { LL.replaceState(s); if (LL.rerender) LL.rerender(); }
        say('다른 기기의 최신 기록을 불러왔습니다.');
      } else { busy = false; await push(); }
    } catch (e) { say('불러오기 실패: ' + (e.code || e.message)); }
    busy = false;
  }
  LL.onSave = () => { if (!sync.user) return; clearTimeout(timer); timer = setTimeout(push, 4000); };
  document.addEventListener('visibilitychange', () => { if (document.visibilityState === 'hidden' && sync.user) { clearTimeout(timer); push(); } });

  const ready = load('firebase-app-compat.js').then(() => Promise.all([load('firebase-auth-compat.js'), load('firebase-firestore-compat.js')])).then(() => {
    firebase.initializeApp(cfg);
    db = firebase.firestore();
    firebase.auth().onAuthStateChanged((u) => { sync.user = u; if (u) pull(); else say(''); if (LL.rerender && location.hash.startsWith('#/settings')) LL.rerender(); });
  }).catch(() => say('Firebase를 불러오지 못했습니다. 네트워크를 확인하세요.'));

  sync.signIn = () => ready.then(() => {
    const p = new firebase.auth.GoogleAuthProvider();
    return firebase.auth().signInWithPopup(p).catch((e) => {
      if (e.code === 'auth/popup-blocked' || e.code === 'auth/operation-not-supported-in-this-environment') return firebase.auth().signInWithRedirect(p);
      say('로그인 실패: ' + (e.code || e.message));
    });
  });
  sync.signOut = () => ready.then(() => push()).then(() => firebase.auth().signOut());
})();
