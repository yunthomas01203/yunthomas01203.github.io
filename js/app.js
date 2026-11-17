/* Lingua Atlas — 화면 */
(function () {
  'use strict';
  const LL = window.LL;
  LL.finalize();
  const $ = (s, r) => (r || document).querySelector(s);
  const app = $('#app');
  const esc = (s) => String(s == null ? '' : s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const S = () => LL.S;
  const C = () => LL.courses[S().lang];
  const SPK = '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M3 10v4h4l5 4V6L7 10H3zm13.5 2a4.5 4.5 0 0 0-2.5-4v8a4.5 4.5 0 0 0 2.5-4zM14 3.2v2.1a7 7 0 0 1 0 13.4v2.1a9 9 0 0 0 0-17.6z"/></svg>';
  const SR = window.SpeechRecognition || window.webkitSpeechRecognition;

  function ruby(h, lang) {
    if (lang !== 'ja') return h;
    return S().set.ruby ? h.replace(/([一-龯々〆ヶ]+)\[([^\]]+)\]/g, '<ruby>$1<rt>$2</rt></ruby>') : h.replace(/\[[^\]]*\]/g, '');
  }
  function T(t, lang) { lang = lang || S().lang; return `<span class="tl" lang="${LL.courses[lang].tts}">${ruby(esc(t), lang)}</span>`; }
  const spk = (t, slow) => (LL.hasTTS() ? `<button class="spk" data-a="say" data-t="${esc(t)}"${slow ? ' data-slow="1"' : ''} aria-label="듣기">${SPK}</button>` : '');
  const rd = (r) => (r && S().set.pin ? `<div class="rd">${esc(r)}</div>` : '');
  function md(s, lang) {
    const out = []; let ul = false, tb = false;
    const inl = (x) => ruby(esc(x), lang).replace(/\*\*(.+?)\*\*/g, '<b>$1</b>').replace(/~~(.+?)~~/g, '<s>$1</s>');
    const close = () => { if (ul) { out.push('</ul>'); ul = false; } if (tb) { out.push('</table>'); tb = false; } };
    (s || '').split('\n').forEach((raw) => {
      const l = raw.trim();
      if (!l) { close(); return; }
      if (l[0] === '|') {
        const cells = l.split('|').slice(1, -1).map((c) => inl(c.trim()));
        if (ul) close();
        if (!tb) { out.push('<table><tr>' + cells.map((c) => `<th>${c}</th>`).join('') + '</tr>'); tb = true; }
        else out.push('<tr>' + cells.map((c) => `<td>${c}</td>`).join('') + '</tr>');
      } else if (l.startsWith('- ')) { if (tb) close(); if (!ul) { out.push('<ul>'); ul = true; } out.push(`<li>${inl(l.slice(2))}</li>`); }
      else if (l.startsWith('## ')) { close(); out.push(`<h3>${inl(l.slice(3))}</h3>`); }
      else { close(); out.push(`<p>${inl(l)}</p>`); }
    });
    close();
    return out.join('');
  }
  function toast(m) { const t = document.createElement('div'); t.className = 'toast'; t.textContent = m; document.body.appendChild(t); setTimeout(() => t.remove(), 2200); }
  function applyLook() {
    const s = S().set;
    const dark = s.theme === 'dark' || (s.theme === 'auto' && matchMedia('(prefers-color-scheme: dark)').matches);
    document.documentElement.dataset.theme = dark ? 'dark' : 'light';
    document.documentElement.style.setProperty('--fs', s.fs + '%');
  }
  const go = (h) => { if (location.hash === '#/' + h) route(); else location.hash = '#/' + h; };
  const lvName = (lv) => (C().levels[lv - 1] || '');

  /* ---------- 틀 ---------- */
  function frame(tab, html, title) {
    const c = S().lang ? C() : null;
    app.innerHTML = `<div class="shell">
      <header class="top"><div class="brand">Lingua Atlas${c ? `<small>${esc(c.name)} ${esc(c.native)}</small>` : ''}</div>
      ${c ? '<a class="ib" href="#/settings" aria-label="설정">설정</a>' : ''}</header>
      ${title ? `<h1 style="margin-bottom:12px">${title}</h1>` : ''}${html}</div>
      ${c ? `<nav class="tabs">${[['', '홈'], ['course', '과정'], ['review', '복습'], ['notes', '노트'], ['stats', '기록']]
        .map(([h, n]) => `<a href="#/${h}" class="${tab === h ? 'on' : ''}">${n}</a>`).join('')}</nav>` : ''}`;
    window.scrollTo(0, 0);
  }

  /* ---------- 언어 선택 ---------- */
  function vPick() {
    frame('', `<p class="mute">학습할 언어를 고르세요. 언어마다 과정과 기록이 따로 관리되며, 언제든 바꿀 수 있습니다.</p>
      <div class="grid3">${LL.order.filter((k) => LL.courses[k]).map((k) => {
        const c = LL.courses[k]; const st = S().L[k]; const dn = st ? Object.keys(st.done || {}).length : 0;
        return `<button class="card lang-card" data-a="lang" data-l="${k}"><b>${esc(c.native)}</b>${esc(c.name)}
          <div class="small mute">${c.lessons.length}개 과 · ${dn ? dn + '개 완료' : '시작 전'}</div></button>`;
      }).join('')}</div>`, '언어 선택');
  }

  /* ---------- 홈 ---------- */
  function vHome() {
    if (!S().lang) return vPick();
    const c = C(), st = LL.ls(), log = st.log[LL.dkey()] || { n: 0, ok: 0 };
    const due = LL.due().length, nx = LL.next(S().lang), goal = S().set.goal;
    const doneN = c.lessons.filter((l) => st.done[l.id]).length;
    const types = Object.keys(LL.TYPES).map((t) => [t, c.lessons.filter((l) => l.t === t)]).filter((x) => x[1].length);
    frame('', `
      <div class="card"><div class="row"><div class="grow"><div class="small mute">오늘 푼 문제</div><div class="big">${log.n}<span class="small mute"> / 목표 ${goal}</span></div></div>
        <div class="center"><div class="small mute">연속 학습</div><b>${LL.streak()}일</b></div></div>
        <div class="bar" style="margin-top:8px"><i style="width:${Math.min(100, (log.n / goal) * 100)}%"></i></div></div>
      <div class="grid2">
        <a class="card" href="#/review" style="color:inherit"><div class="small mute">복습 대기</div><div class="big">${due}<span class="small mute"> 장</span></div></a>
        <a class="card" href="#/course" style="color:inherit"><div class="small mute">전체 진도</div><div class="big">${doneN}<span class="small mute"> / ${c.lessons.length} 과</span></div></a>
      </div>
      ${nx ? `<div class="card"><div class="small mute">이어서 학습 · ${esc(lvName(nx.lv))}</div>
        <div class="row" style="margin-top:4px"><div class="grow"><span class="badge">${LL.TYPES[nx.t]}</span> <b>${esc(nx.title)}</b><div class="small mute">${esc(nx.sub || '')}</div></div>
        <a class="btn" href="#/lesson/${nx.id}">열기</a></div></div>` : ''}
      <div class="grid2" style="margin-bottom:12px">
        <a class="btn plain" href="#/build">맞춤 학습 구성</a><button class="btn plain" data-a="placement">레벨 진단</button>
      </div>
      <div class="card"><h2>영역별로 들어가기</h2>
        ${types.map(([t, ls]) => { const d = ls.filter((l) => st.done[l.id]).length;
          return `<a class="lesson" href="#/course/${t}"><div class="grow"><span class="ttl">${LL.TYPES[t]}</span></div><span class="small mute">${d} / ${ls.length}</span></a>`; }).join('')}
      </div>
      <p class="small mute center">현재 시작 단계: ${esc(lvName(st.lv || 1))} · 순서는 권장일 뿐, 어느 과든 자유롭게 열 수 있습니다.</p>`);
  }

  /* ---------- 과정 ---------- */
  let F = { lv: 0, t: '', q: '' };
  function vCourse(arg) {
    if (arg) { F.t = LL.TYPES[arg] ? arg : ''; history.replaceState(null, '', '#/course'); }
    const c = C(), st = LL.ls();
    const q = F.q.trim().toLowerCase();
    const ls = c.lessons.filter((l) => (!F.lv || l.lv === F.lv) && (!F.t || l.t === F.t) && (!q || (l.title + ' ' + (l.sub || '')).toLowerCase().includes(q)));
    let hits = [];
    if (q.length >= 1) {
      c.lessons.forEach((l) => {
        l.items.forEach((it) => { if ((LL.plain(it.t, c.id) + ' ' + it.k + ' ' + it.r).toLowerCase().includes(q)) hits.push([l, it.t, it.k]); });
        l.ex.forEach((e) => { if ((LL.plain(e.t, c.id) + ' ' + e.k).toLowerCase().includes(q)) hits.push([l, e.t, e.k]); });
      });
      hits = hits.slice(0, 40);
    }
    const group = {};
    ls.forEach((l) => (group[l.lv] = group[l.lv] || []).push(l));
    frame('course', `
      <input type="search" id="q" placeholder="과 제목·단어·예문 검색" value="${esc(F.q)}">
      <div class="chips" style="margin-top:10px">${['전체'].concat(c.levels).map((n, i) => `<span class="chip ${F.lv === i ? 'on' : ''}" data-a="flv" data-v="${i}">${esc(n)}</span>`).join('')}</div>
      <div class="chips"><span class="chip ${!F.t ? 'on' : ''}" data-a="ft" data-v="">모든 영역</span>${Object.keys(LL.TYPES).filter((t) => c.lessons.some((l) => l.t === t)).map((t) => `<span class="chip ${F.t === t ? 'on' : ''}" data-a="ft" data-v="${t}">${LL.TYPES[t]}</span>`).join('')}</div>
      ${Object.keys(group).map((lv) => { const all = group[lv], d = all.filter((l) => st.done[l.id]).length;
        return `<div class="card"><div class="row"><h2 class="grow">${esc(lvName(+lv))}</h2><span class="small mute">${d}/${all.length}</span></div>
        <div class="bar" style="margin:6px 0 4px"><i style="width:${(d / all.length) * 100}%"></i></div>
        ${unitBlocks(all)}</div>`; }).join('') || (hits.length ? '' : '<p class="mute center">조건에 맞는 과가 없습니다.</p>')}
      ${hits.length ? `<div class="card"><h2>단어·예문 검색 결과</h2>${hits.map(([l, t, k]) => `<a class="lesson" href="#/lesson/${l.id}"><div class="grow">${T(t)}<div class="small mute">${esc(k)} · ${esc(l.title)}</div></div></a>`).join('')}</div>` : ''}`, '과정');
    const qi = $('#q');
    qi.oninput = () => { F.q = qi.value; clearTimeout(qi._t); qi._t = setTimeout(() => { vCourse(); const n = $('#q'); n.focus(); n.setSelectionRange(n.value.length, n.value.length); }, 350); };
  }
  function unitBlocks(all) {
    const st = LL.ls(), us = [], by = {};
    all.forEach((l) => { if (!by[l.u]) { by[l.u] = []; us.push(l.u); } by[l.u].push(l); });
    return us.map((u) => `<div class="unit"><span>${esc(u)}</span><small>${by[u].filter((l) => st.done[l.id]).length}/${by[u].length}</small></div>${by[u].map(lessonRow).join('')}`).join('');
  }
  function lessonRow(l) {
    const d = LL.ls().done[l.id], m = LL.ls().marks[l.id];
    return `<a class="lesson" href="#/lesson/${l.id}"><div class="grow"><span class="badge">${LL.TYPES[l.t]}</span> <span class="ttl">${esc(l.title)}</span>${m ? ' ★' : ''}
      <div class="small mute">${esc(l.sub || '')}</div></div>${d ? `<span class="done">완료 ${d.best}%</span>` : ''}</a>`;
  }

  /* ---------- 과 보기 ---------- */
  function vLesson(id) {
    const c = C(), l = c.byId[id];
    if (!l) return go('course');
    const st = LL.ls(), ix = c.lessons.indexOf(l), pv = c.lessons[ix - 1], nx = c.lessons[ix + 1];
    const r = LL.refs(c.id, l), inSrs = r.i.concat(r.s).filter((x) => st.srs[x]).length, total = r.i.length + r.s.length;
    const canWrite = l.items.length && (l.t === 'script' || c.id === 'zh' || c.id === 'ja' || (c.id === 'ru' && l.lv === 1));
    const isGrid = l.t === 'script' && l.items.every((it) => [...LL.plain(it.t, c.id)].length <= 3);
    const itemsHtml = !l.items.length ? '' : isGrid
      ? `<div class="card"><h2>표 — 눌러서 듣기</h2><div class="chargrid">${l.items.map((it) => `<button data-a="say" data-t="${esc(it.t)}"><b>${T(it.t)}</b>${(it.r || it.k).length <= 7 ? `<small>${esc(it.r || it.k)}</small>` : ''}</button>`).join('')}</div>
         ${l.items.some((it) => it.ex || (it.r || it.k).length > 7) ? l.items.map((it) => `<div class="item"><div class="row">${spk(it.t)}<div class="grow"><span class="term">${T(it.t)}</span> <span class="rd">${esc(it.r)}</span><div class="ko">${esc(it.k)}</div></div></div>
          ${it.ex ? `<div class="exl"><div class="row">${spk(it.ex)}<div class="grow">${T(it.ex)}<div class="ko mute small">${esc(it.exk)}</div></div></div></div>` : ''}</div>`).join('') : ''}</div>`
      : `<div class="card"><h2>${l.t === 'idiom' ? '표현' : '어휘'} ${l.items.length}개</h2>${l.items.map((it) => `<div class="item"><div class="row">${spk(it.t)}<div class="grow"><span class="term">${T(it.t)}</span>${rd(it.r)}<div class="ko">${esc(it.k)}</div></div></div>
          ${it.ex ? `<div class="exl"><div class="row">${spk(it.ex)}<div class="grow">${T(it.ex)}<div class="ko mute small">${esc(it.exk)}</div></div></div></div>` : ''}</div>`).join('')}</div>`;
    const exHtml = !l.ex.length ? '' : `<div class="card"><div class="row"><h2 class="grow">${l.t === 'read' ? '본문' : l.t === 'phrase' ? '표현' : '예문'}</h2>
        ${LL.hasTTS() ? '<button class="btn sm ghost" data-a="sayall">전체 듣기</button>' : ''}</div>
        ${l.ex.map((e) => `<div class="sent"><div class="row">${spk(e.t)}<div class="grow">${T(e.t)}${rd(e.r)}<div class="ko mute">${esc(e.k)}</div>${e.n ? `<div class="note">${esc(e.n)}</div>` : ''}</div></div></div>`).join('')}</div>`;
    frame('course', `
      <div class="row wrap" style="margin-bottom:6px"><a href="#/course" class="small">‹ 과정</a><span class="badge">${LL.TYPES[l.t]}</span><span class="badge lv">${esc(lvName(l.lv))}</span><span class="small mute">${esc(l.u)}</span>
        ${st.done[l.id] ? `<span class="badge">완료 ${st.done[l.id].best}%</span>` : ''}</div>
      <div class="row" style="margin-bottom:12px"><h1 class="grow">${esc(l.title)}</h1><button class="ib" data-a="mark" data-id="${l.id}">${st.marks[l.id] ? '★ 북마크됨' : '☆ 북마크'}</button></div>
      ${l.body ? `<div class="card body">${md(l.body, c.id)}</div>` : ''}
      <div class="row" style="margin:0 0 10px"><span class="chip" data-a="hideko">뜻 가리고 스스로 떠올리기</span>
        ${c.id === 'ja' ? `<span class="chip ${S().set.ruby ? 'on' : ''}" data-a="ruby">후리가나</span>` : ''}${c.id === 'zh' ? `<span class="chip ${S().set.pin ? 'on' : ''}" data-a="pin">병음</span>` : ''}</div>
      <div id="lz">${l.t === 'read' ? exHtml + itemsHtml : itemsHtml + exHtml}</div>
      ${l.quiz.length ? `<p class="small mute">확인 문제 ${l.quiz.length}개가 연습에 포함됩니다.</p>` : ''}
      <div class="grid2" style="margin-bottom:10px"><button class="btn" data-a="start" data-id="${l.id}">연습 시작</button><a class="btn ghost" href="#/build/${l.id}">연습 방식 선택</a></div>
      <div class="grid2" style="margin-bottom:12px">${canWrite ? `<a class="btn plain" href="#/write/${l.id}">손으로 쓰기</a>` : ''}
        ${total ? `<button class="btn plain" data-a="addsrs" data-id="${l.id}">${inSrs >= total ? '복습 카드 등록됨' : '복습 카드에 추가'}</button>` : ''}</div>
      <div class="card"><h2>내 메모</h2><textarea id="memo" placeholder="이 과에서 기억할 점을 적어 두세요.">${esc(st.notes[l.id] || '')}</textarea></div>
      <div class="row">${pv ? `<a class="btn plain sm" href="#/lesson/${pv.id}">‹ 이전</a>` : ''}<span class="grow"></span>${nx ? `<a class="btn plain sm" href="#/lesson/${nx.id}">다음 ›</a>` : ''}</div>`);
    const memo = $('#memo');
    memo.onchange = () => { if (memo.value.trim()) st.notes[l.id] = memo.value; else delete st.notes[l.id]; LL.save(); };
  }

  /* ---------- 맞춤 학습 구성 ---------- */
  let B = null;
  function vBuild(id) {
    const c = C(), st = LL.ls();
    if (!B || B.lang !== c.id || (id || '') !== B.id) B = { lang: c.id, id: id || '', lv: [], t: [], scope: 'all' };
    const set = S().set, one = id && c.byId[id];
    const kinds = Object.keys(LL.KINDS).filter((k) => (k !== 'hear' && k !== 'dict') || LL.hasTTS());
    const pool = one ? [one] : buildPool();
    frame('', `
      ${one ? `<p>대상: <b>${esc(one.title)}</b></p>` : `
      <div class="card"><h2>범위</h2><div class="small mute">단계 (선택 안 하면 전체)</div>
        <div class="chips">${c.levels.map((n, i) => `<span class="chip ${B.lv.includes(i + 1) ? 'on' : ''}" data-a="blv" data-v="${i + 1}">${esc(n)}</span>`).join('')}</div>
        <div class="small mute">영역 (선택 안 하면 전체)</div>
        <div class="chips">${Object.keys(LL.TYPES).filter((t) => c.lessons.some((l) => l.t === t)).map((t) => `<span class="chip ${B.t.includes(t) ? 'on' : ''}" data-a="bt" data-v="${t}">${LL.TYPES[t]}</span>`).join('')}</div>
        <div class="small mute">대상</div>
        <div class="chips">${[['all', '전체'], ['done', '학습한 과만'], ['new', '아직 안 한 과만'], ['mark', '북마크한 과만']].map(([v, n]) => `<span class="chip ${B.scope === v ? 'on' : ''}" data-a="bscope" data-v="${v}">${n}</span>`).join('')}</div>
        <div class="small mute">해당하는 과: ${pool.length}개</div></div>`}
      <div class="card"><h2>연습 방식</h2><div class="chips">${kinds.map((k) => `<span class="chip ${set.kinds.includes(k) ? 'on' : ''}" data-a="bkind" data-v="${k}">${LL.KINDS[k][0]}</span>`).join('')}</div>
        <div class="small mute">따라 말하기는 마이크 권한이 필요하며, 음성 인식은 Chrome·Safari에서 동작합니다.</div></div>
      <div class="card"><h2>문제 수</h2><div class="chips">${[10, 15, 20, 30, 50].map((n) => `<span class="chip ${set.count === n ? 'on' : ''}" data-a="bcount" data-v="${n}">${n}</span>`).join('')}</div></div>
      <button class="btn block" data-a="bstart" ${pool.length && set.kinds.length ? '' : 'disabled'}>시작</button>`, '맞춤 학습 구성');
  }
  function buildPool() {
    const c = C(), st = LL.ls();
    return c.lessons.filter((l) => (!B.lv.length || B.lv.includes(l.lv)) && (!B.t.length || B.t.includes(l.t)) &&
      (B.scope === 'all' || (B.scope === 'done' && st.done[l.id]) || (B.scope === 'new' && !st.done[l.id]) || (B.scope === 'mark' && st.marks[l.id])));
  }

  /* ---------- 연습 ---------- */
  let P = null;
  function startSession(list, opt) {
    if (!list.length) { toast('이 조건으로 만들 수 있는 문제가 없습니다.'); return; }
    P = Object.assign({ list, i: 0, ok: 0, start: Date.now(), wrongs: [], done: false }, opt || {});
    go('practice');
  }
  function vPractice() {
    if (!P) return go('');
    if (P.i >= P.list.length) return vResult();
    const ex = P.list[P.i]; P.cur = { answered: false, picked: [] };
    const head = `<div class="row" style="margin-bottom:10px"><div class="grow"><div class="bar"><i style="width:${(P.i / P.list.length) * 100}%"></i></div></div>
      <span class="small mute">${P.i + 1} / ${P.list.length}</span><button class="ib small" data-a="quit">종료</button></div>
      <div class="small mute">${LL.KINDS[ex.kind][0]} · ${esc(ex.title)}</div>`;
    let b = '';
    const k = ex.kind;
    if (ex.choices) {
      const prompt = ex.hideQ ? `<div class="row" style="margin:14px 0">${spk(ex.audio)}<button class="btn plain sm" data-a="say" data-t="${esc(ex.audio)}" data-slow="1">느리게</button><span class="mute">듣고 알맞은 뜻을 고르세요.</span></div>`
        : ex.qtl ? `<div class="row"><div class="prompt grow">${T(ex.q)}${k === 'mean' ? rd(ex.r) : ''}</div>${ex.audio ? spk(ex.audio) : ''}</div>`
        : `<div class="prompt">${k === 'quiz' ? ruby(esc(ex.q), ex.lang) : esc(ex.q)}</div>`;
      b = `${prompt}<div class="choices">${ex.choices.map((ch, i) => `<button class="choice" data-a="pick" data-i="${i}">${ex.tl ? T(ch) : esc(ch)}</button>`).join('')}</div>`;
    } else if (k === 'order') {
      P.cur.pool = LL.shuffle(ex.tokens.map((t, i) => ({ t, i })));
      b = `<div class="prompt">${esc(ex.q)}</div><div class="small mute">아래 조각을 순서대로 눌러 문장을 만드세요.</div>
        <div class="tokens" id="ans"></div><div class="tokens" id="pool" style="border-style:solid">${P.cur.pool.map((o, n) => `<button class="tok" data-a="tok" data-n="${n}">${T(o.t)}</button>`).join('')}</div>
        <div class="row"><button class="btn plain sm" data-a="tokclear">지우기</button><span class="grow"></span><button class="btn" data-a="ordercheck">확인</button></div>`;
    } else if (k === 'dict' || k === 'compose') {
      b = (k === 'dict' ? `<div class="row" style="margin:14px 0">${spk(ex.audio)}<button class="btn plain sm" data-a="say" data-t="${esc(ex.audio)}" data-slow="1">느리게</button><span class="mute">들은 문장을 그대로 적으세요.</span></div>`
        : `<div class="prompt">${esc(ex.q)}</div><div class="small mute">${esc(C().name)}로 옮겨 쓰세요.</div>`) +
        `<textarea id="inp" lang="${C().tts}" autocapitalize="off" autocomplete="off" autocorrect="off" spellcheck="false" style="margin-top:10px"></textarea>
        <div class="row" style="margin-top:8px"><button class="btn plain sm" data-a="skip">모르겠음</button><span class="grow"></span><button class="btn" data-a="typecheck">확인</button></div>`;
    } else if (k === 'speak') {
      b = `<div class="row"><div class="prompt grow">${T(ex.target)}${rd(ex.r)}</div>${spk(ex.audio)}</div><div class="mute">${esc(ex.k)}</div>
        <p class="small mute">먼저 듣고, 같은 속도와 억양으로 따라 말해 보세요.</p>
        <div class="row wrap">${SR ? '<button class="btn" data-a="sr">발음 인식 시작</button>' : ''}<button class="btn plain" data-a="rec">녹음해서 비교</button></div>
        <div id="srout"></div><div class="row" style="margin-top:12px"><button class="btn plain grow" data-a="self" data-v="0">아직 어색함</button><button class="btn ghost grow" data-a="self" data-v="1">자연스럽게 됨</button></div>`;
    }
    frame('', `${head}<div class="card pq" style="margin-top:8px">${b}<div id="fb"></div></div>`);
    if (ex.audio && !ex.noAuto && k !== 'speak') setTimeout(() => LL.say(ex.audio), 250);
    const inp = $('#inp'); if (inp) inp.focus();
  }
  function settle(ok, html, cls) {
    const ex = P.list[P.i], st = LL.ls();
    if (P.cur.answered) return;
    P.cur.answered = true;
    LL.logAnswer(ex.skill, ok);
    const wk = ex.ref + '|' + ex.kind;
    if (ok) {
      P.ok++;
      if (st.wrong[wk]) { st.wrong[wk].c--; if (st.wrong[wk].c <= 0) delete st.wrong[wk]; }
      const cd = st.srs[ex.ref]; if (cd && cd.d <= LL.day()) LL.grade(ex.ref, 2);
    } else {
      P.wrongs.push(ex);
      st.wrong[wk] = { c: ((st.wrong[wk] || {}).c || 0) + 1, at: Date.now() };
      if (ex.kind !== 'quiz') { LL.addCard(ex.ref); LL.grade(ex.ref, 0); }
    }
    if (P.placement) (P.plv[ex.lv] = P.plv[ex.lv] || [0, 0])[ok ? 0 : 1]++;
    LL.save();
    $('#fb').innerHTML = `<div class="fb ${cls || (ok ? 'ok' : 'no')}"><b>${ok ? '정답' : '오답'}</b>${html || ''}</div>
      <div class="row" style="margin-top:12px"><a class="small" href="#/lesson/${ex.lesson}" data-a="peek">이 과 보기</a><span class="grow"></span><button class="btn" data-a="next" id="nextb">다음</button></div>`;
    app.querySelectorAll('.pq .btn:not(#nextb), .pq .choice, .pq .tok, .pq textarea').forEach((e) => (e.disabled = true));
    if (ex.audioAfter) LL.say(ex.audioAfter);
    const nb = $('#nextb'); if (nb) nb.focus();
  }
  const model = (ex) => `<div style="margin-top:4px">${T(ex.target)} ${spk(ex.target)}${rd(ex.r)}</div>`;
  function vResult() {
    const st = LL.ls(), n = P.list.length, pct = Math.round((P.ok / n) * 100);
    if (!P.done) {
      P.done = true;
      LL.logTime((Date.now() - P.start) / 1000);
      if (P.lessonId) { const d = st.done[P.lessonId] || { n: 0, best: 0 }; st.done[P.lessonId] = { n: d.n + 1, best: Math.max(d.best, pct), at: Date.now() }; }
      if (P.placement) {
        let lv = 1;
        for (let i = 1; i <= 5; i++) { const r = P.plv[i]; if (r && r[0] / (r[0] + r[1]) >= 0.7) lv = Math.min(5, i + 1); else break; }
        st.lv = lv; P.setLv = lv;
      }
      LL.save();
    }
    const nx = P.lessonId ? C().lessons[C().lessons.indexOf(C().byId[P.lessonId]) + 1] : null;
    frame('', `<div class="card center"><div class="small mute">정답률</div><div class="big">${pct}%</div><div class="mute">${n}문제 중 ${P.ok}문제 · ${Math.max(1, Math.round((Date.now() - P.start) / 60000))}분</div>
        ${P.placement ? `<p>권장 시작 단계: <b>${esc(lvName(P.setLv))}</b><br><span class="small mute">홈의 "이어서 학습"이 이 단계부터 안내합니다. 아래 단계도 언제든 열 수 있습니다.</span></p>` : ''}</div>
      ${P.wrongs.length ? `<div class="card"><h2>틀린 문제 ${P.wrongs.length}개</h2><div class="small mute">오답 노트와 복습 카드에 자동으로 들어갔습니다.</div>
        ${P.wrongs.map((ex) => `<div class="sent">${ex.target ? T(ex.target) : ex.qtl ? T(ex.q) : ruby(esc(ex.q), ex.lang)}<div class="small mute">${ex.target ? esc(ex.q || ex.k || '') : '정답: ' + (ex.tl ? T(ex.answer) : esc(ex.answer))}</div></div>`).join('')}</div>
        <button class="btn block ghost" data-a="retry" style="margin-bottom:10px">틀린 문제만 다시</button>` : ''}
      <div class="grid2">${nx ? `<a class="btn" href="#/lesson/${nx.id}">다음 과</a>` : '<a class="btn" href="#/course">과정으로</a>'}<a class="btn plain" href="#/">홈</a></div>`, '결과');
  }

  /* ---------- 복습 ---------- */
  let R = null;
  function vReview() {
    const st = LL.ls(), due = LL.due();
    if (!R || R.lang !== S().lang) R = { lang: S().lang, show: false };
    const total = Object.keys(st.srs).length;
    const addForm = `<div class="card"><h2>내 단어 추가</h2><input type="text" id="cf" placeholder="${esc(C().name)} 단어·문장" lang="${C().tts}"><input type="text" id="cb" placeholder="뜻" style="margin-top:8px">
      <button class="btn sm plain" data-a="addcustom" style="margin-top:8px">추가</button><div class="small mute" style="margin-top:6px">직접 만난 표현을 넣어 두면 복습 주기에 함께 돌아옵니다.</div></div>`;
    if (!due.length) {
      return frame('review', `<div class="card center"><p><b>지금 복습할 카드가 없습니다.</b></p><p class="mute small">등록된 카드 ${total}장. 과를 열어 "복습 카드에 추가"를 누르거나, 연습에서 틀린 항목이 자동으로 들어옵니다.</p>
        <a class="btn" href="#/course">과정 보기</a></div>${addForm}`, '복습');
    }
    const ref = due[0], it = LL.get(S().lang, ref), cd = st.srs[ref];
    const iv = (q) => { const n = LL.nextIv(cd, q); return n === 0 ? '곧 다시' : n + '일 뒤'; };
    frame('review', `<div class="small mute" style="margin-bottom:8px">남은 카드 ${due.length}장 · ${esc(it.l.title)}</div>
      <div class="card flash"><div class="row" style="justify-content:center"><span class="term"${LL.plain(it.t, S().lang).length > 10 ? ' style="font-size:1.25rem"' : ''}>${T(it.t)}</span>${spk(it.t)}</div>
        ${R.show ? `${rd(it.r)}<p style="font-size:1.1rem">${esc(it.k)}</p>${it.ex ? `<div class="mute">${T(it.ex)}<br><span class="small">${esc(it.exk)}</span></div>` : ''}${it.n ? `<div class="small" style="color:var(--warn)">${esc(it.n)}</div>` : ''}` : '<p class="mute small">뜻을 떠올린 뒤 확인하세요.</p>'}</div>
      ${R.show ? `<div class="grades">${[['다시', 0], ['어려움', 1], ['알맞음', 2], ['쉬움', 3]].map(([n, q]) => `<button class="btn ${q === 2 ? '' : 'plain'}" data-a="grade" data-q="${q}" data-ref="${esc(ref)}">${n}<small>${iv(q)}</small></button>`).join('')}</div>
        <div class="row" style="margin-top:10px"><a class="small" href="#/lesson/${it.l.id}">이 과 보기</a><span class="grow"></span><button class="ib small" data-a="delcard" data-ref="${esc(ref)}">카드 삭제</button></div>`
        : '<button class="btn block" data-a="reveal">뜻 확인</button>'}`, '복습');
    if (!R.show) setTimeout(() => LL.say(it.t), 200);
  }

  /* ---------- 노트 ---------- */
  let N = 'wrong';
  function vNotes() {
    const c = C(), st = LL.ls();
    const tabs = [['wrong', '오답'], ['mark', '북마크'], ['memo', '메모'], ['mine', '내 단어']];
    let body = '';
    if (N === 'wrong') {
      const ks = Object.keys(st.wrong).filter((k) => LL.get(c.id, k.split('|')[0])).sort((a, b) => st.wrong[b].c - st.wrong[a].c || st.wrong[b].at - st.wrong[a].at);
      body = ks.length ? `<button class="btn block" data-a="wrongrun" style="margin-bottom:10px">오답 다시 풀기 (${Math.min(ks.length, 20)}문제)</button><div class="card">${ks.slice(0, 100).map((k) => {
        const [ref, kind] = k.split('|'), it = LL.get(c.id, ref);
        return `<a class="lesson" href="#/lesson/${it.l.id}"><div class="grow">${it.q ? ruby(esc(it.q.q), c.id) + `<div class="small mute">정답: ${T(it.q.a)}</div>` : T(it.t) + `<div class="small mute">${esc(it.k)}</div>`}
          <div class="small mute">${LL.KINDS[kind][0]} · ${esc(it.l.title)}</div></div><span class="badge">${st.wrong[k].c}회</span></a>`; }).join('')}</div>
        <p class="small mute">다시 풀어 맞히면 횟수가 줄고, 0이 되면 목록에서 빠집니다.</p>` : '<p class="mute center">틀린 문제가 여기에 모입니다.</p>';
    } else if (N === 'mark') {
      const ls = c.lessons.filter((l) => st.marks[l.id]);
      body = ls.length ? `<div class="card">${ls.map(lessonRow).join('')}</div>` : '<p class="mute center">과 화면에서 ☆를 누르면 여기에 모입니다.</p>';
    } else if (N === 'memo') {
      const ls = c.lessons.filter((l) => st.notes[l.id]);
      body = ls.length ? ls.map((l) => `<a class="card" style="display:block;color:inherit" href="#/lesson/${l.id}"><b>${esc(l.title)}</b><div class="mute" style="white-space:pre-wrap">${esc(st.notes[l.id])}</div></a>`).join('') : '<p class="mute center">과 화면 아래 "내 메모"에 적은 내용이 여기에 모입니다.</p>';
    } else {
      body = st.custom.length ? `<div class="card">${st.custom.map((x, i) => (x ? `<div class="kv"><div>${T(x.f)}<div class="small mute">${esc(x.b)}</div></div><button class="ib small" data-a="delcustom" data-i="${i}">삭제</button></div>` : '')).join('')}</div>` : '<p class="mute center">복습 화면에서 직접 단어를 추가할 수 있습니다.</p>';
    }
    frame('notes', `<div class="chips">${tabs.map(([v, n]) => `<span class="chip ${N === v ? 'on' : ''}" data-a="ntab" data-v="${v}">${n}</span>`).join('')}</div>${body}`, '노트');
  }

  /* ---------- 기록 ---------- */
  function vStats() {
    const c = C(), st = LL.ls(), log = st.log;
    let n = 0, ok = 0, sec = 0; const by = {};
    Object.values(log).forEach((e) => { n += e.n; ok += e.ok; sec += e.s || 0; Object.keys(e.by || {}).forEach((k) => { by[k] = by[k] || [0, 0]; by[k][0] += e.by[k][0]; by[k][1] += e.by[k][1]; }); });
    const cells = []; const d = new Date(); d.setDate(d.getDate() - (7 * 15 + d.getDay()));
    for (let i = 0; i < 7 * 16; i++) { const e = log[LL.dkey(d)]; const v = e ? e.n : 0; cells.push(`<i class="${v >= 60 ? 'c' : v >= 20 ? 'b' : v > 0 ? 'a' : ''}" title="${LL.dkey(d)}: ${v}문제"></i>`); d.setDate(d.getDate() + 1); if (d > new Date()) break; }
    const cards = Object.values(st.srs), mature = cards.filter((x) => x.i >= 21).length, young = cards.filter((x) => x.i > 0 && x.i < 21).length;
    frame('stats', `
      <div class="grid2"><div class="card"><div class="small mute">누적 문제</div><div class="big">${n}</div><div class="small mute">정답률 ${n ? Math.round((ok / n) * 100) : 0}%</div></div>
        <div class="card"><div class="small mute">누적 학습 시간</div><div class="big">${(sec / 3600).toFixed(1)}<span class="small mute"> 시간</span></div><div class="small mute">연속 ${LL.streak()}일</div></div></div>
      <div class="card"><h2>최근 16주</h2><div class="heat">${cells.join('')}</div></div>
      <div class="card"><h2>영역별 정답률</h2>${['어휘', '문법', '읽기', '듣기', '쓰기', '말하기'].map((k) => { const b = by[k] || [0, 0], p = b[0] ? Math.round((b[1] / b[0]) * 100) : 0;
        return `<div class="row" style="margin:8px 0"><span style="width:52px">${k}</span><div class="bar grow"><i style="width:${p}%"></i></div><span class="small mute" style="width:86px;text-align:right">${b[0] ? p + '% · ' + b[0] + '문제' : '기록 없음'}</span></div>`; }).join('')}
        <div class="small mute">정답률이 낮은 영역은 "맞춤 학습 구성"에서 해당 방식만 골라 집중할 수 있습니다.</div></div>
      <div class="card"><h2>단계별 진도</h2>${c.levels.map((nm, i) => { const ls = c.lessons.filter((l) => l.lv === i + 1); const dn = ls.filter((l) => st.done[l.id]).length;
        return ls.length ? `<div class="row" style="margin:8px 0"><span style="width:108px" class="small">${esc(nm)}</span><div class="bar grow"><i style="width:${(dn / ls.length) * 100}%"></i></div><span class="small mute">${dn}/${ls.length}</span></div>` : ''; }).join('')}</div>
      <div class="card"><h2>복습 카드</h2><div class="kv"><span>전체</span><b>${cards.length}</b></div><div class="kv"><span>장기 기억 (간격 21일 이상)</span><b>${mature}</b></div><div class="kv"><span>익히는 중</span><b>${young}</b></div><div class="kv"><span>오늘 대기</span><b>${LL.due().length}</b></div></div>`, '기록');
  }

  /* ---------- 설정 ---------- */
  function vSettings() {
    const s = S().set, c = C(), vs = LL.voices(c.id), sy = LL.sync || {};
    const sel = (id, opts, cur) => `<select id="${id}">${opts.map(([v, n]) => `<option value="${esc(v)}" ${String(v) === String(cur) ? 'selected' : ''}>${esc(n)}</option>`).join('')}</select>`;
    frame('', `
      <div class="card"><h2>학습 언어</h2><div class="kv"><span>${esc(c.name)} ${esc(c.native)}</span><button class="btn sm plain" data-a="switch">언어 바꾸기</button></div>
        <div class="kv"><span>시작 단계</span>${sel('s-lv', c.levels.map((n, i) => [i + 1, n]), LL.ls().lv || 1)}</div>
        <div class="kv"><span>레벨 진단 다시 하기</span><button class="btn sm plain" data-a="placement">진단</button></div></div>
      <div class="card"><h2>학습</h2><div class="kv"><span>하루 목표 (문제 수)</span>${sel('s-goal', [10, 20, 30, 50, 80, 120].map((x) => [x, x]), s.goal)}</div>
        <div class="kv"><span>음성 속도</span>${sel('s-rate', [[0.6, '0.6배'], [0.8, '0.8배'], [1, '보통'], [1.15, '1.15배'], [1.3, '1.3배']], s.rate)}</div>
        <div class="kv"><span>${esc(c.name)} 음성</span>${vs.length ? sel('s-voice', [['', '자동']].concat(vs.map((v) => [v.name, v.name])), s.voice[c.id] || '') : '<span class="small mute">이 기기에 설치된 음성이 없습니다</span>'}</div>
        <div class="kv"><span>일본어 후리가나 표시</span>${sel('s-ruby', [[1, '켬'], [0, '끔']], s.ruby ? 1 : 0)}</div>
        <div class="kv"><span>중국어 병음 표시</span>${sel('s-pin', [[1, '켬'], [0, '끔']], s.pin ? 1 : 0)}</div></div>
      <div class="card"><h2>화면</h2><div class="kv"><span>테마</span>${sel('s-theme', [['auto', '기기 설정 따름'], ['light', '밝게'], ['dark', '어둡게']], s.theme)}</div>
        <div class="kv"><span>글자 크기</span>${sel('s-fs', [[90, '작게'], [100, '보통'], [112, '크게'], [125, '아주 크게']], s.fs)}</div></div>
      <div class="card"><h2>계정·동기화</h2>
        ${!sy.available ? '<p class="small mute">Google 로그인은 Firebase 설정 후 켜집니다. <b>firebase-config.js</b>에 프로젝트 값을 넣으면 이 자리에 로그인 버튼이 나타납니다. 방법은 README.md에 있습니다. 그 전까지 기록은 이 기기의 브라우저에 저장됩니다.</p>'
          : sy.user ? `<div class="kv"><span>${esc(sy.user.email || sy.user.displayName || '로그인됨')}<div class="small mute">${esc(sy.status || '')}</div></span><button class="btn sm plain" data-a="signout">로그아웃</button></div>`
          : `<button class="btn block" data-a="signin">Google 계정으로 로그인</button><p class="small mute">${esc(sy.status || '로그인하면 기기 간에 학습 기록이 이어집니다.')}</p>`}
        <div class="kv"><span>기록 내보내기 (파일)</span><button class="btn sm plain" data-a="export">내보내기</button></div>
        <div class="kv"><span>기록 가져오기</span><input type="file" id="imp" accept="application/json" style="max-width:55%"></div>
        <div class="kv"><span>${esc(c.name)} 기록 초기화</span><button class="btn sm plain" data-a="resetlang">초기화</button></div></div>`, '설정');
    const bind = (id, fn) => { const e = $('#' + id); if (e) e.onchange = () => { fn(e.value); LL.save(); applyLook(); }; };
    bind('s-lv', (v) => (LL.ls().lv = +v)); bind('s-goal', (v) => (s.goal = +v)); bind('s-rate', (v) => (s.rate = +v));
    bind('s-voice', (v) => { s.voice[c.id] = v; setTimeout(() => LL.say(c.sample || c.native), 50); });
    bind('s-ruby', (v) => (s.ruby = v === '1')); bind('s-pin', (v) => (s.pin = v === '1')); bind('s-theme', (v) => (s.theme = v)); bind('s-fs', (v) => (s.fs = +v));
    $('#imp').onchange = (e) => {
      const f = e.target.files[0]; if (!f) return;
      f.text().then((t) => { const o = JSON.parse(t); if (!o || o.v !== 1 || !o.L) throw 0; LL.replaceState(o); LL.save(); applyLook(); toast('기록을 가져왔습니다.'); go(''); }).catch(() => toast('올바른 기록 파일이 아닙니다.'));
    };
  }

  /* ---------- 손으로 쓰기 ---------- */
  let W = null;
  function vWrite(id) {
    const c = C(), l = c.byId[id]; if (!l || !l.items.length) return go('course');
    if (!W || W.id !== id) W = { id, i: 0, guide: true };
    const it = l.items[W.i], text = LL.plain(it.t, c.id);
    frame('course', `<div class="row" style="margin-bottom:8px"><a class="small" href="#/lesson/${id}">‹ ${esc(l.title)}</a><span class="grow"></span><span class="small mute">${W.i + 1} / ${l.items.length}</span></div>
      <div class="card center"><div class="row" style="justify-content:center"><span class="item"><span class="term">${T(it.t)}</span></span>${spk(it.t)}</div><div class="mute">${esc(it.r ? it.r + ' · ' : '')}${esc(it.k)}</div>
        <canvas class="wr" id="cv" width="680" height="680"></canvas>
        <div class="row wrap" style="justify-content:center"><button class="btn plain sm" data-a="wprev">‹ 이전</button><button class="btn plain sm" data-a="wclear">지우기</button>
          <button class="btn plain sm" data-a="wguide">${W.guide ? '견본 숨기고 쓰기' : '견본 보기'}</button><button class="btn sm" data-a="wnext">다음 ›</button></div>
        <p class="small mute">옅은 견본 위에 따라 쓴 뒤, 견본을 숨기고 기억으로 다시 써 보세요.</p></div>`);
    const cv = $('#cv'), g = cv.getContext('2d'), cs = getComputedStyle(document.documentElement);
    const draw = () => {
      g.clearRect(0, 0, 680, 680);
      g.strokeStyle = cs.getPropertyValue('--line'); g.lineWidth = 2; g.setLineDash([10, 10]);
      g.beginPath(); g.moveTo(340, 0); g.lineTo(340, 680); g.moveTo(0, 340); g.lineTo(680, 340); g.stroke(); g.setLineDash([]);
      if (W.guide) {
        let fs = 520; const fam = getComputedStyle($('.term .tl')).fontFamily;
        g.font = fs + 'px ' + fam; const w = g.measureText(text).width; if (w > 600) { fs = Math.floor((fs * 600) / w); g.font = fs + 'px ' + fam; }
        g.globalAlpha = 0.16; g.fillStyle = cs.getPropertyValue('--ink'); g.textAlign = 'center'; g.textBaseline = 'middle'; g.fillText(text, 340, 350); g.globalAlpha = 1;
      }
    };
    draw(); W.draw = draw;
    let on = false;
    const pos = (e) => { const r = cv.getBoundingClientRect(); return [((e.clientX - r.left) / r.width) * 680, ((e.clientY - r.top) / r.height) * 680]; };
    cv.onpointerdown = (e) => { on = true; cv.setPointerCapture(e.pointerId); const [x, y] = pos(e); g.strokeStyle = cs.getPropertyValue('--ink'); g.lineWidth = 12; g.lineCap = g.lineJoin = 'round'; g.beginPath(); g.moveTo(x, y); };
    cv.onpointermove = (e) => { if (!on) return; const [x, y] = pos(e); g.lineTo(x, y); g.stroke(); };
    cv.onpointerup = cv.onpointercancel = () => (on = false);
  }

  /* ---------- 동작 ---------- */
  let chain = 0, rec = null;
  const A = {
    lang(e) { S().lang = e.dataset.l; LL.ls(); LL.save(); F = { lv: 0, t: '', q: '' }; go(''); },
    switch() { S().lang = null; LL.save(); go(''); },
    say(e) { LL.say(e.dataset.t, null, e.dataset.slow ? 0.6 : 1); },
    sayall(e) {
      if (chain) { chain = 0; speechSynthesis.cancel(); e.textContent = '전체 듣기'; return; }
      const l = C().byId[location.hash.split('/')[2]]; const list = l.ex.map((x) => x.t); const id = (chain = Date.now()); let i = 0;
      e.textContent = '멈춤';
      const step = () => { if (chain !== id) return; if (i >= list.length) { chain = 0; e.textContent = '전체 듣기'; return; } LL.say(list[i++], null, 1, () => setTimeout(step, 350)); };
      step();
    },
    hideko(e) { e.classList.toggle('on'); $('#lz').classList.toggle('hide-ko'); },
    ruby() { S().set.ruby = !S().set.ruby; LL.save(); route(); },
    pin() { S().set.pin = !S().set.pin; LL.save(); route(); },
    mark(e) { const m = LL.ls().marks; if (m[e.dataset.id]) delete m[e.dataset.id]; else m[e.dataset.id] = 1; LL.save(); route(); },
    addsrs(e) { const l = C().byId[e.dataset.id], r = LL.refs(C().id, l); r.i.concat(r.s).forEach((x) => LL.addCard(x)); LL.save(); toast('복습 카드에 추가했습니다.'); route(); },
    start(e) {
      const l = C().byId[e.dataset.id]; let kinds = S().set.kinds.filter((k) => LL.hasTTS() || (k !== 'hear' && k !== 'dict'));
      let list = LL.gen(C().id, [l], kinds, S().set.count);
      if (list.length < 4) list = LL.gen(C().id, [l], Object.keys(LL.KINDS).filter((k) => k !== 'speak' && (LL.hasTTS() || (k !== 'hear' && k !== 'dict'))), S().set.count);
      startSession(list, { lessonId: l.id });
    },
    flv(e) { F.lv = +e.dataset.v; vCourse(); }, ft(e) { F.t = e.dataset.v; vCourse(); },
    blv(e) { tog(B.lv, +e.dataset.v); route(); }, bt(e) { tog(B.t, e.dataset.v); route(); }, bscope(e) { B.scope = e.dataset.v; route(); },
    bkind(e) { tog(S().set.kinds, e.dataset.v); LL.save(true); route(); }, bcount(e) { S().set.count = +e.dataset.v; LL.save(true); route(); },
    bstart() { const one = B.id && C().byId[B.id]; const pool = one ? [one] : buildPool(); startSession(LL.gen(C().id, pool, S().set.kinds, S().set.count), one ? { lessonId: one.id } : {}); },
    placement() {
      const c = C(), list = [];
      for (let lv = 1; lv <= 5; lv++) {
        const refs = LL.shuffle(c.lessons.filter((l) => l.lv === lv).flatMap((l) => l.quiz.map((q, n) => l.id + ':q' + n))).slice(0, 5);
        refs.forEach((r) => { const ex = LL.build(c.id, r, 'quiz'); if (ex) { ex.lv = lv; list.push(ex); } });
      }
      startSession(list, { placement: true, plv: {} });
    },
    quit() { if (P.i === 0 || confirm('연습을 끝낼까요? 지금까지의 답은 기록에 남습니다.')) { P.list = P.list.slice(0, P.i + (P.cur.answered ? 1 : 0)); P.i = P.list.length; if (P.list.length) { P.lessonId = null; P.placement = false; vResult(); } else { P = null; go(''); } } },
    pick(e) {
      const ex = P.list[P.i]; if (P.cur.answered) return;
      const ch = ex.choices[+e.dataset.i], ok = ch === ex.answer;
      app.querySelectorAll('.choice').forEach((b, i) => { if (ex.choices[i] === ex.answer) b.classList.add('ok'); else if (b === e) b.classList.add('no'); });
      settle(ok, (ex.hideQ ? `<div>${T(ex.q)} ${rd(ex.r)}</div>` : '') + (ex.why ? `<div class="mute" style="margin-top:4px">${ex.kind === 'quiz' ? ruby(esc(ex.why), ex.lang) : T(ex.why)}</div>` : ''));
    },
    tok(e) {
      if (P.cur.answered) return; const n = +e.dataset.n; P.cur.picked.push(n); e.classList.add('used');
      const b = document.createElement('button'); b.className = 'tok'; b.innerHTML = e.innerHTML; b.dataset.a = 'untok'; b.dataset.n = n; $('#ans').appendChild(b);
    },
    untok(e) { if (P.cur.answered) return; const n = +e.dataset.n; P.cur.picked = P.cur.picked.filter((x) => x !== n); e.remove(); $(`#pool [data-n="${n}"]`).classList.remove('used'); },
    tokclear() { P.cur.picked = []; $('#ans').innerHTML = ''; app.querySelectorAll('#pool .tok').forEach((b) => b.classList.remove('used')); },
    ordercheck() {
      const ex = P.list[P.i]; if (!P.cur.picked.length) return;
      const mine = P.cur.picked.map((n) => P.cur.pool[n].t).join(''), ok = LL.norm(mine) === LL.norm(ex.tokens.join(''));
      settle(ok, model(ex));
    },
    typecheck() {
      const ex = P.list[P.i], v = $('#inp').value; if (!v.trim()) return;
      const r = LL.check(v, ex.target, ex.lang), sim = LL.sim(v, LL.plain(ex.target, ex.lang));
      if (r === 2) return settle(true, model(ex) + (ex.k ? `<div class="mute">${esc(ex.k)}</div>` : ''));
      if (r === 1) return settle(true, `<div>철자는 맞지만 강세 부호·ё 표기가 다릅니다.</div>` + model(ex), 'warn');
      if (ex.kind === 'compose' && !P.cur.answered) {
        $('#fb').innerHTML = `<div class="fb warn"><b>모범 답안과 다릅니다</b> <span class="small">(일치도 ${Math.round(sim * 100)}%)</span>${model(ex)}
          <div class="small" style="margin-top:6px">표현은 여러 가지일 수 있습니다. 모범 답안과 비교해 스스로 판정하세요.</div></div>
          <div class="row" style="margin-top:10px"><button class="btn plain grow" data-a="self" data-v="0">틀렸음</button><button class="btn ghost grow" data-a="self" data-v="1">내 답도 맞음</button></div>`;
        LL.say(ex.target); return;
      }
      settle(false, `<div class="small">내 답: ${esc(v)} (일치도 ${Math.round(sim * 100)}%)</div>` + model(ex) + (ex.k ? `<div class="mute">${esc(ex.k)}</div>` : ''));
    },
    skip() { const ex = P.list[P.i]; settle(false, model(ex) + (ex.k ? `<div class="mute">${esc(ex.k)}</div>` : '')); },
    self(e) { const ex = P.list[P.i]; const fb = $('#fb'); fb.innerHTML = ''; settle(e.dataset.v === '1', ex.kind === 'speak' ? '' : model(ex)); },
    sr(e) {
      const ex = P.list[P.i], out = $('#srout'); if (!SR) return;
      const r = new SR(); r.lang = C().tts; r.interimResults = false; r.maxAlternatives = 3;
      e.textContent = '듣는 중…'; e.disabled = true;
      r.onresult = (ev) => {
        let best = 0, heard = '';
        for (const alt of ev.results[0]) { const s = Math.max(LL.sim(alt.transcript, LL.plain(ex.target, ex.lang)), ex.lang === 'ja' ? LL.sim(alt.transcript, LL.kana(ex.target)) : 0); if (s >= best) { best = s; heard = alt.transcript; } }
        out.innerHTML = `<div class="fb ${best >= 0.8 ? 'ok' : 'warn'}"><div>인식된 말: ${esc(heard)}</div><div class="small">일치도 ${Math.round(best * 100)}% ${best >= 0.8 ? '— 잘 전달됩니다.' : '— 다시 듣고 한 번 더 해 보세요.'}</div></div>`;
      };
      r.onerror = (ev) => { out.innerHTML = `<div class="fb warn small">음성을 인식하지 못했습니다 (${esc(ev.error)}). 마이크 권한을 확인하세요.</div>`; };
      r.onend = () => { e.textContent = '발음 인식 다시'; e.disabled = false; };
      try { r.start(); } catch (x) { e.disabled = false; }
    },
    rec(e) {
      const out = $('#srout');
      if (rec) { rec.stop(); return; }
      if (!navigator.mediaDevices || !window.MediaRecorder) { toast('이 브라우저는 녹음을 지원하지 않습니다.'); return; }
      navigator.mediaDevices.getUserMedia({ audio: true }).then((stream) => {
        const chunks = []; rec = new MediaRecorder(stream);
        rec.ondataavailable = (ev) => chunks.push(ev.data);
        rec.onstop = () => { stream.getTracks().forEach((t) => t.stop()); const url = URL.createObjectURL(new Blob(chunks, { type: rec.mimeType })); rec = null; e.textContent = '다시 녹음'; e.classList.remove('rec');
          const d = document.createElement('div'); d.innerHTML = `<audio controls src="${url}" style="width:100%;margin-top:10px"></audio><div class="small mute">내 녹음과 원어민 음성을 번갈아 들으며 비교하세요.</div>`; out.appendChild(d); };
        rec.start(); e.textContent = '■ 녹음 끝내기'; e.classList.add('rec');
      }).catch(() => toast('마이크 권한이 필요합니다.'));
    },
    next() { P.i++; vPractice(); },
    retry() { const list = P.wrongs.map((ex) => LL.build(ex.lang, ex.ref, ex.kind)).filter(Boolean); startSession(LL.shuffle(list)); },
    reveal() { R.show = true; vReview(); },
    grade(e) { LL.grade(e.dataset.ref, +e.dataset.q); LL.logAnswer('어휘', +e.dataset.q > 0); LL.save(); R.show = false; vReview(); },
    delcard(e) { delete LL.ls().srs[e.dataset.ref]; LL.save(); R.show = false; vReview(); },
    addcustom() {
      const f = $('#cf').value.trim(), b = $('#cb').value.trim(); if (!f || !b) return toast('단어와 뜻을 모두 적어 주세요.');
      const st = LL.ls(); st.custom.push({ f, b }); LL.addCard('u:i' + (st.custom.length - 1)); LL.save(); toast('추가했습니다.'); vReview();
    },
    delcustom(e) { const st = LL.ls(), i = +e.dataset.i; st.custom[i] = null; delete st.srs['u:i' + i]; LL.save(); vNotes(); },
    ntab(e) { N = e.dataset.v; vNotes(); },
    wrongrun() {
      const st = LL.ls(), ks = Object.keys(st.wrong).sort((a, b) => st.wrong[b].c - st.wrong[a].c).slice(0, 20);
      startSession(LL.shuffle(ks.map((k) => { const [ref, kind] = k.split('|'); return LL.build(C().id, ref, kind); }).filter(Boolean)));
    },
    wprev() { const n = C().byId[W.id].items.length; W.i = (W.i - 1 + n) % n; route(); }, wnext() { W.i = (W.i + 1) % C().byId[W.id].items.length; route(); },
    wclear() { W.draw(); }, wguide() { W.guide = !W.guide; route(); },
    signin() { LL.sync.signIn(); }, signout() { LL.sync.signOut(); },
    export() {
      const a = document.createElement('a'); a.href = URL.createObjectURL(new Blob([JSON.stringify(S())], { type: 'application/json' }));
      a.download = 'lingua-atlas-' + LL.dkey() + '.json'; a.click();
    },
    resetlang() { if (confirm(C().name + ' 학습 기록을 모두 지웁니다. 되돌릴 수 없습니다. 계속할까요?')) { delete S().L[S().lang]; LL.save(); toast('초기화했습니다.'); route(); } },
  };
  function tog(a, v) { const i = a.indexOf(v); if (i >= 0) a.splice(i, 1); else a.push(v); }

  document.addEventListener('click', (ev) => {
    const ko = ev.target.closest('.hide-ko .ko'); if (ko) ko.classList.toggle('show');
    const e = ev.target.closest('[data-a]'); if (!e || e.disabled) return;
    const fn = A[e.dataset.a]; if (fn) { if (e.tagName !== 'A') ev.preventDefault(); fn(e); }
  });
  document.addEventListener('keydown', (ev) => {
    if (!location.hash.startsWith('#/practice') || !P || !P.cur) return;
    if (ev.key === 'Enter' && !ev.shiftKey && !ev.isComposing) {
      if (P.cur.answered) { ev.preventDefault(); A.next(); }
      else if ($('#inp') && document.activeElement === $('#inp')) { ev.preventDefault(); A.typecheck(); }
    } else if (/^[1-4]$/.test(ev.key) && !P.cur.answered && !$('#inp')) { const b = app.querySelectorAll('.choice')[+ev.key - 1]; if (b) b.click(); }
  });

  /* ---------- 라우터 ---------- */
  function route() {
    if (LL.hasTTS()) speechSynthesis.cancel(); chain = 0;
    const [name, arg] = location.hash.replace(/^#\/?/, '').split('/');
    if (!S().lang || !C()) { S().lang = null; return vPick(); }
    ({ '': vHome, course: vCourse, lesson: vLesson, build: vBuild, practice: vPractice, review: vReview, notes: vNotes, stats: vStats, settings: vSettings, write: vWrite }[name] || vHome)(arg);
  }
  LL.rerender = () => { applyLook(); route(); };
  window.addEventListener('hashchange', route);
  if (LL.hasTTS()) speechSynthesis.onvoiceschanged = () => {};
  matchMedia('(prefers-color-scheme: dark)').addEventListener('change', applyLook);
  applyLook(); route();
  if ('serviceWorker' in navigator && location.protocol === 'https:') navigator.serviceWorker.register('sw.js').catch(() => {});
})();
