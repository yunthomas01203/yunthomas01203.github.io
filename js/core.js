/* Lingua Atlas — core: 콘텐츠 등록, 상태 저장, 간격 반복(SRS), 문제 생성 */
(function () {
  'use strict';
  const LL = (window.LL = { courses: {}, order: ['en', 'ja', 'zh', 'es', 'ru'] });
  const KEY = 'lingua.state.v1';

  /* ---------- 콘텐츠 등록 ---------- */
  const lines = (s) => (s || '').split('\n').map((x) => x.trim()).filter(Boolean);
  LL.course = (c) => { LL.courses[c.id] = Object.assign({ lessons: [], byId: {} }, c); };
  LL.add = (lang, arr) => {
    const c = LL.courses[lang];
    const R = !!c.hasReading;
    arr.forEach((l) => {
      l.items = lines(l.items).map((x) => {
        const p = x.split('|');
        return R ? { t: p[0], r: p[1] || '', k: p[2] || '', ex: p[3] || '', exk: p[4] || '' }
                 : { t: p[0], r: '', k: p[1] || '', ex: p[2] || '', exk: p[3] || '' };
      });
      l.ex = lines(l.ex).map((x) => {
        const p = x.split('|');
        return R ? { t: p[0], r: p[1] || '', k: p[2] || '', n: p[3] || '' }
                 : { t: p[0], r: '', k: p[1] || '', n: p[2] || '' };
      });
      l.quiz = lines(l.quiz).map((x) => {
        const [m, why] = x.split('>>');
        const p = m.split('|').map((s) => s.trim());
        return { q: p[0], a: p[1], w: p.slice(2), why: (why || '').trim() };
      });
      c.lessons.push(l);
      c.byId[l.id] = l;
    });
  };
  /* 단원(u)과 순서(o) 지정: LL.meta('ja', { 과id: ['단원 이름', 순서] }) */
  LL.meta = (lang, map) => { const c = LL.courses[lang]; Object.keys(map).forEach((id) => { const l = c.byId[id]; if (l) { l.u = map[id][0]; l.o = map[id][1]; } }); };
  LL.finalize = () => {
    Object.values(LL.courses).forEach((c) => {
      c.lessons.forEach((l, i) => { if (l.o == null) l.o = 5000 + i; if (!l.u) l.u = LL.TYPES[l.t]; });
      c.lessons.sort((a, b) => a.lv - b.lv || a.o - b.o);
    });
  };
  LL.TYPES = {
    script: '문자·발음', vocab: '어휘', grammar: '문법', phrase: '실생활 표현',
    confuse: '헷갈리는 표현', read: '읽기·듣기', idiom: '관용구·속담',
  };
  LL.KINDS = {
    mean: ['뜻 고르기', '어휘'], word: ['단어 고르기', '어휘'], hear: ['듣고 뜻 고르기', '듣기'],
    dict: ['받아쓰기', '듣기'], trans: ['문장 해석', '읽기'], order: ['문장 배열', '문법'],
    quiz: ['문법·어법 문제', '문법'], compose: ['작문', '쓰기'], speak: ['따라 말하기', '말하기'],
  };

  /* ---------- 상태 ---------- */
  const def = () => ({
    v: 1, lang: null, at: 0, L: {},
    set: { goal: 30, rate: 1, ruby: true, pin: true, theme: 'auto', fs: 100, voice: {},
           kinds: ['mean', 'word', 'hear', 'trans', 'order', 'quiz', 'compose'], count: 15 },
  });
  LL.load = () => {
    try {
      const s = JSON.parse(localStorage.getItem(KEY));
      if (s && s.v === 1) { s.set = Object.assign(def().set, s.set); return s; }
    } catch (e) {}
    return def();
  };
  LL.S = LL.load();
  LL.ls = (lang) => {
    lang = lang || LL.S.lang;
    const d = { done: {}, srs: {}, wrong: {}, marks: {}, notes: {}, custom: [], log: {}, lv: 1 };
    return (LL.S.L[lang] = Object.assign(d, LL.S.L[lang]));
  };
  LL.save = (silent) => {
    LL.S.at = Date.now();
    try { localStorage.setItem(KEY, JSON.stringify(LL.S)); } catch (e) {}
    if (!silent && LL.onSave) LL.onSave();
  };
  LL.replaceState = (s) => { LL.S = s; s.set = Object.assign(def().set, s.set); try { localStorage.setItem(KEY, JSON.stringify(s)); } catch (e) {} };
  LL.resetAll = () => { LL.S = def(); LL.save(); };

  /* ---------- 날짜·기록 ---------- */
  LL.dkey = (d) => { d = d || new Date(); return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0'); };
  LL.day = () => Math.floor((Date.now() - new Date().getTimezoneOffset() * 6e4) / 864e5);
  LL.logAnswer = (skill, ok) => {
    const log = LL.ls().log, k = LL.dkey();
    const e = (log[k] = log[k] || { n: 0, ok: 0, s: 0, by: {} });
    e.n++; if (ok) e.ok++;
    const b = (e.by[skill] = e.by[skill] || [0, 0]);
    b[0]++; if (ok) b[1]++;
  };
  LL.logTime = (sec) => { const log = LL.ls().log, k = LL.dkey(); const e = (log[k] = log[k] || { n: 0, ok: 0, s: 0, by: {} }); e.s += Math.round(sec); };
  LL.streak = () => {
    const log = LL.ls().log; let n = 0; const d = new Date();
    if (!(log[LL.dkey(d)] || {}).n) d.setDate(d.getDate() - 1);
    while ((log[LL.dkey(d)] || {}).n) { n++; d.setDate(d.getDate() - 1); }
    return n;
  };

  /* ---------- 텍스트 ---------- */
  LL.plain = (t, lang) => { t = String(t).replace(/́/g, ''); if (lang === 'ja') t = t.replace(/\[[^\]]*\]/g, ''); return t; };
  LL.kana = (t) => String(t).replace(/[一-龯々〆ヶ]+\[([^\]]+)\]/g, '$1');
  LL.norm = (t) => String(t).normalize('NFC').toLowerCase().replace(/́/g, '').replace(/[\s\p{P}\p{S}]/gu, '');
  LL.fold = (t) => LL.norm(t).normalize('NFD').replace(/\p{M}/gu, '');
  LL.lev = (a, b) => {
    const m = a.length, n = b.length; if (!m || !n) return Math.max(m, n);
    let prev = Array.from({ length: n + 1 }, (_, i) => i);
    for (let i = 1; i <= m; i++) {
      const cur = [i];
      for (let j = 1; j <= n; j++) cur[j] = Math.min(prev[j] + 1, cur[j - 1] + 1, prev[j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1));
      prev = cur;
    }
    return prev[n];
  };
  LL.sim = (a, b) => { a = LL.norm(a); b = LL.norm(b); const L = Math.max(a.length, b.length); return L ? 1 - LL.lev(a, b) / L : 1; };
  /* 답안 비교: 2=정답, 1=악센트만 다름(정답 처리+안내), 0=오답 */
  LL.check = (input, target, lang) => {
    const a = LL.norm(input);
    if (a === LL.norm(LL.plain(target, lang))) return 2;
    if (lang === 'ja' && a === LL.norm(LL.kana(target))) return 2;
    if ((lang === 'es' || lang === 'ru') && LL.fold(input).replace(/ё/g, 'е') === LL.fold(LL.plain(target, lang)).replace(/ё/g, 'е')) return 1;
    return 0;
  };
  LL.tokens = (t, lang) => {
    t = LL.plain(t, lang);
    if (lang === 'zh' || lang === 'ja') {
      if (window.Intl && Intl.Segmenter) {
        const all = [...new Intl.Segmenter(lang, { granularity: 'word' }).segment(t)];
        if (lang !== 'ja') return all.filter((s) => s.isWordLike).map((s) => s.segment);
        /* 일본어: 히라가나만으로 된 조각(조사·어미)은 앞 조각에 붙여 문절 단위로 만든다 */
        const out = []; let brk = true;
        all.forEach((s) => {
          if (!s.isWordLike) { brk = true; return; }
          if (!brk && /^[\u3040-\u309f]+$/.test(s.segment)) out[out.length - 1] += s.segment; else out.push(s.segment);
          brk = false;
        });
        return out;
      }
      return [...t.replace(/[\s\p{P}]/gu, '')];
    }
    return t.split(/\s+/).filter(Boolean);
  };
  LL.shuffle = (a) => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };

  /* ---------- 음성 ---------- */
  LL.hasTTS = () => 'speechSynthesis' in window;
  LL.voices = (lang) => {
    if (!LL.hasTTS()) return [];
    const p = LL.courses[lang].tts.slice(0, 2).toLowerCase();
    return speechSynthesis.getVoices().filter((v) => v.lang.toLowerCase().startsWith(p));
  };
  LL.say = (text, lang, rate, onend) => {
    if (!LL.hasTTS()) { onend && onend(); return; }
    lang = lang || LL.S.lang;
    speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(LL.plain(text, lang));
    u.lang = LL.courses[lang].tts;
    const vs = LL.voices(lang), want = LL.S.set.voice[lang];
    const v = vs.find((x) => x.name === want) || vs.find((x) => x.lang.replace('_', '-') === u.lang) || vs[0];
    if (v) u.voice = v;
    u.rate = (rate || 1) * (LL.S.set.rate || 1);
    if (onend) u.onend = u.onerror = onend;
    speechSynthesis.speak(u);
  };

  /* ---------- 항목 조회 ---------- */
  LL.get = (lang, ref) => {
    const i = ref.lastIndexOf(':'), lid = ref.slice(0, i), ty = ref[i + 1], n = +ref.slice(i + 2);
    if (lid === 'u') {
      const c = LL.ls(lang).custom[n];
      return c && { l: { id: 'u', title: '내 단어장', lv: 0, t: 'vocab' }, ty: 'i', t: c.f, r: '', k: c.b };
    }
    const l = LL.courses[lang].byId[lid];
    if (!l) return null;
    if (ty === 'i') { const it = l.items[n]; return it && { l, ty, t: it.t, r: it.r, k: it.k, ex: it.ex, exk: it.exk }; }
    if (ty === 'x') { const it = l.items[n]; return it && it.ex && it.exk ? { l, ty, t: it.ex, r: '', k: it.exk } : null; }
    if (ty === 'e') { const e = l.ex[n]; return e && e.k ? { l, ty, t: e.t, r: e.r, k: e.k, n: e.n } : null; }
    if (ty === 'q') { const q = l.quiz[n]; return q && { l, ty, q }; }
    return null;
  };
  LL.refs = (lang, lesson) => {
    const out = { i: [], s: [], q: [] };
    lesson.items.forEach((it, n) => { if (it.k) out.i.push(lesson.id + ':i' + n); if (it.ex && it.exk) out.s.push(lesson.id + ':x' + n); });
    lesson.ex.forEach((e, n) => { if (e.k) out.s.push(lesson.id + ':e' + n); });
    lesson.quiz.forEach((q, n) => out.q.push(lesson.id + ':q' + n));
    return out;
  };

  /* ---------- 간격 반복 ---------- */
  LL.card = (ref) => LL.ls().srs[ref];
  LL.addCard = (ref, dueNow) => { const s = LL.ls().srs; if (!s[ref]) s[ref] = { d: LL.day(), i: 0, e: 2.5, r: 0, l: 0 }; else if (dueNow) s[ref].d = LL.day(); return s[ref]; };
  LL.nextIv = (c, q) => {
    if (q === 0) return 0;
    if (q === 1) return Math.max(1, Math.round(c.i * 1.2));
    if (q === 2) return c.r === 0 ? 1 : c.r === 1 ? 3 : Math.max(c.i + 1, Math.round(c.i * c.e));
    return c.r === 0 ? 4 : Math.max(c.i + 2, Math.round(c.i * c.e * 1.3));
  };
  LL.grade = (ref, q) => {
    const c = LL.addCard(ref);
    c.i = LL.nextIv(c, q);
    if (q === 0) { c.l++; c.r = 0; c.e = Math.max(1.3, c.e - 0.2); }
    else { c.r++; if (q === 1) c.e = Math.max(1.3, c.e - 0.15); if (q === 3) c.e += 0.15; }
    c.d = LL.day() + c.i;
    return c;
  };
  LL.due = (lang) => {
    const s = LL.ls(lang).srs, t = LL.day();
    return Object.keys(s).filter((k) => s[k].d <= t && LL.get(lang || LL.S.lang, k)).sort((a, b) => s[a].d - s[b].d);
  };

  /* ---------- 문제 생성 ---------- */
  const pick3 = (lang, it, field) => {
    const seen = new Set([LL.norm(it[field])]), out = [];
    const c = LL.courses[lang];
    const same = it.l.items ? it.l.items : [];
    const others = c.lessons.filter((l) => l !== it.l && l.t === it.l.t && Math.abs(l.lv - it.l.lv) <= 1).flatMap((l) => l.items);
    for (const pool of [LL.shuffle(same), LL.shuffle(others), LL.shuffle(c.lessons.flatMap((l) => l.items))]) {
      for (const o of pool) {
        const v = o[field]; if (!v) continue;
        const k = LL.norm(v); if (seen.has(k)) continue;
        seen.add(k); out.push(v); if (out.length === 3) return out;
      }
    }
    return out;
  };
  const pickSent = (lang, it) => {
    const seen = new Set([it.k]), out = [];
    const c = LL.courses[lang];
    const pool = LL.shuffle(c.lessons.filter((l) => Math.abs(l.lv - it.l.lv) <= 1).flatMap((l) => l.ex.map((e) => e.k).concat(l.items.map((i) => i.exk))));
    for (const k of pool) { if (!k || seen.has(k)) continue; seen.add(k); out.push(k); if (out.length === 3) break; }
    return out;
  };
  LL.build = (lang, ref, kind) => {
    const it = LL.get(lang, ref);
    if (!it) return null;
    const base = { ref, kind, lang, skill: LL.KINDS[kind][1], lesson: it.l.id, title: it.l.title };
    if (kind === 'quiz') {
      if (it.ty !== 'q') return null;
      return Object.assign(base, { q: it.q.q, answer: it.q.a, choices: LL.shuffle([it.q.a].concat(it.q.w)), why: it.q.why, tl: true });
    }
    if (kind === 'mean' || kind === 'hear') {
      if (it.ty !== 'i') return null;
      const w = pick3(lang, it, 'k'); if (w.length < 2) return null;
      return Object.assign(base, { q: it.t, r: it.r, audio: it.t, hideQ: kind === 'hear', answer: it.k, choices: LL.shuffle([it.k].concat(w)), qtl: true, why: it.ex ? it.ex + ' — ' + it.exk : '' });
    }
    if (kind === 'word') {
      if (it.ty !== 'i') return null;
      const w = pick3(lang, it, 't'); if (w.length < 2) return null;
      return Object.assign(base, { q: it.k, answer: it.t, choices: LL.shuffle([it.t].concat(w)), tl: true, audioAfter: it.t, why: it.r });
    }
    if (it.ty === 'i' || it.ty === 'q') return null;
    if (kind === 'trans') {
      const w = pickSent(lang, it); if (w.length < 2) return null;
      return Object.assign(base, { q: it.t, r: it.r, audio: it.t, answer: it.k, choices: LL.shuffle([it.k].concat(w)), qtl: true, noAuto: true });
    }
    if (kind === 'order') {
      const tk = LL.tokens(it.t, lang);
      if (tk.length < 3 || tk.length > 14) return null;
      return Object.assign(base, { q: it.k, target: it.t, r: it.r, tokens: tk, audioAfter: it.t });
    }
    if (kind === 'dict') return Object.assign(base, { audio: it.t, target: it.t, r: it.r, k: it.k });
    if (kind === 'compose') return Object.assign(base, { q: it.k, target: it.t, r: it.r, audioAfter: it.t });
    if (kind === 'speak') return Object.assign(base, { target: it.t, r: it.r, k: it.k, audio: it.t });
    return null;
  };
  LL.gen = (lang, lessons, kinds, n) => {
    const per = {};
    kinds.forEach((k) => (per[k] = []));
    lessons.forEach((l) => {
      const r = LL.refs(lang, l);
      kinds.forEach((k) => {
        const src = k === 'quiz' ? r.q : k === 'mean' || k === 'word' || k === 'hear' ? r.i : r.s;
        src.forEach((ref) => per[k].push(ref));
      });
    });
    kinds.forEach((k) => (per[k] = LL.shuffle(per[k])));
    const out = [], used = {};
    let guard = 0;
    while (out.length < n && guard++ < n * 30) {
      const live = kinds.filter((k) => per[k].length);
      if (!live.length) break;
      for (const k of LL.shuffle(live)) {
        if (out.length >= n) break;
        const ref = per[k].pop();
        if (!ref) continue;
        if ((used[ref] || 0) >= 2) continue;
        const ex = LL.build(lang, ref, k);
        if (ex) { out.push(ex); used[ref] = (used[ref] || 0) + 1; }
      }
    }
    return LL.shuffle(out);
  };
  LL.next = (lang) => {
    const c = LL.courses[lang], st = LL.ls(lang);
    return c.lessons.find((l) => !st.done[l.id] && l.lv >= (st.lv || 1)) || c.lessons.find((l) => !st.done[l.id]);
  };
})();
