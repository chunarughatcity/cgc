// SEASON 1 MATCH DATA — preserved from the original season code.
// To add a match, paste a new object into the matches array.
const matches = [
  {
    "number": 18,
    "opponentName": "🆚FC Toxic Boys Team",
    "date": "2024-11-22",
    "score": " 0-1 ",
    "result": "lost"
  },
  {
    "number": 17,
    "opponentName": "🆚Kalishiri FC",
    "date": "2024-11-18",
    "score": " 5-0 / Goal - Shuvo'14'19'31pen Affan'38 Joy'50 / Assit-Jakariya'14 Sabbir'38 Affan'50 / MOTM - Shuvo",
    "result": "won"
  },
  {
    "number": 16,
    "opponentName": "🆚Dewor Gac FC",
    "date": "2024-11-15",
    "score": " 1-0 / Goal - Sabbir'16/ Assit-Raju'16/ MOTM - Sabbir",
    "result": "won"
  },
  {
    "number": 15,
    "opponentName": "🆚Balla Road FC",
    "date": "2024-10-03",
    "score": " 5-1 / Goal - Nasir'9 Joy'17'40 Najim'30 Jakariya'55 / Assit-Sabbir'9 Najim'17'55 Shahin'30'40 / MOTM - Najim",
    "result": "won"
  },
  {
    "number": 14,
    "opponentName": "🆚United Uttar Bazar",
    "date": "2024-10-02",
    "score": " 1-1 / Goal - Joy'23 / MOTM - Anthor",
    "result": "draw"
  },
  {
    "number": 13,
    "opponentName": "🆚United Uttar Bazar",
    "date": "2024-09-09",
    "score": " 4-0 / Goal - Sabbir'17 Raju'25 Najim'26'57 / Assist - Joy'17 Raju'26 Sabbir'57 / MOTM - Najim",
    "result": "won"
  },
  {
    "number": 12,
    "opponentName": "🆚Amkandi FC - MiniBar",
    "date": "2024-09-08",
    "score": " 1-1 / Goal - Raju'64 / Assist - Jakariya'64 / MOTM - Raju",
    "result": "draw"
  },
  {
    "number": 11,
    "opponentName": "🆚United Uttar Bazar",
    "date": "2024-08-30",
    "score": " 1-1 / Goal - Joy'12 / Assist - Affan'12",
    "result": "draw"
  },
  {
    "number": 10,
    "opponentName": "🆚Toxic Boys Team",
    "date": "2024-08-22",
    "score": " 2-7 / Goal - Sabbir'41'pen Jabir'47",
    "result": "lost"
  },
  {
    "number": 9,
    "opponentName": "🆚Ranigaon Platon Club",
    "date": "2024-08-17",
    "score": " 1-1 / Pen - 2-4 / Goal - Joy'29 Shurob'pen Jakir'pen / MOTM - Joy",
    "result": "lost"
  },
  {
    "number": 8,
    "opponentName": "ARG 🆚 BRA Won - ARG",
    "date": "2024-08-15",
    "score": " 4-3 / ARG Goal - Affan'13 Sani'39 Nasir'61 Raju'85 BRA Goal - Unkhown'66 Sujon'72 Tuhin'80'pen / MOTM - Affan",
    "result": "won"
  },
  {
    "number": 7,
    "opponentName": "🆚Dudhpatil Sporting Club",
    "date": "2024-08-14",
    "score": " 0-0 / MOTM - Shahin",
    "result": "draw"
  },
  {
    "number": 6,
    "opponentName": "ARG 🆚 BRA Won - ARG",
    "date": "2024-07-13",
    "score": " 2-1 / ARG Goal - Sabbir'1 Arif'56 BRA Goal - Jakariya'40 Own / Assist - Mujammil'56 / MOTM - Sabbir",
    "result": "won"
  },
  {
    "number": 5,
    "opponentName": "🆚Chondona Junior FC - MiniBar",
    "date": "2024-05-19",
    "score": " 1-0 / Goal - Joy'56 / Assist - Najim'56 / MOTM - Joy",
    "result": "won"
  },
  {
    "number": 4,
    "opponentName": "🆚Young Star Club- MiniBar",
    "date": "2024-05-21",
    "score": " 1-1 / Pen - 2-1 / Goal - Sabbir'24 'Pen Shajan'Pen / Assist - / MOTM - Sabbir",
    "result": "won"
  },
  {
    "number": 3,
    "opponentName": "🆚Dokkhin Norpoti FC - MiniBar",
    "date": "2024-02-29",
    "score": " 1-1 / Pen - 2-0 / Goal - Sabbir'26 'Pen Raju'Pen / Assist - Najim'26 / MOTM - Sabbir",
    "result": "won"
  },
  {
    "number": 2,
    "opponentName": "🆚YoungStar Club",
    "date": "2024-01-12",
    "score": " 1-1 / Goal - Sabbir'51 / Assist - Najim'51 / MOTM - Riyad",
    "result": "draw"
  },
  {
    "number": 1,
    "opponentName": "🆚Amkandi FC - MiniBar",
    "date": "2024-01-6",
    "score": " 2-6 / Goal - Dipu'32 Affan'58 / Assist - Affan'32 / MOTM - Dipu",
    "result": "lost"
  }
];

(() => {
  'use strict';
  const SEASON_ID = 1;
  const isSeasonOne = SEASON_ID === 1;
  const isSeasonThree = SEASON_ID === 3;
  const el = (id) => document.getElementById(id);
  const escapeHTML = (value) => String(value ?? '').replace(/[&<>"']/g, (char) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  }[char]));

  if (isSeasonThree) window.CGC_SEASON3_MATCHES = matches;
  // The same file can be loaded by the Home page to display the latest Season Three count/record.
  if (!el('matchList')) return;

  function opponentOf(match) { return isSeasonOne ? match.opponentName : match.opponent; }
  function imagePath(value) {
    const path = String(value || '').trim();
    if (!path || path === '.jpg') return '';
    if (/^(https?:|data:image\/|\/|\.\.\/)/i.test(path)) return path;
    if (path.startsWith('images/')) return `../${path}`;
    return path;
  }
  function detailItem(label, value) {
    const content = String(value || '').trim();
    return content ? `<div class="detail-item"><b>${label}:</b> ${escapeHTML(content)}</div>` : '';
  }
  function imageMarkup(match) {
    const src = imagePath(match.image);
    if (!src) return '<div class="match-image-placeholder">CGC MATCH</div>';
    return `<img class="match-image" data-image="${escapeHTML(src)}" src="${escapeHTML(src)}" alt="${escapeHTML(opponentOf(match))}" loading="lazy">`;
  }
  function renderCard(match) {
    const opponent = opponentOf(match);
    const description = isSeasonOne ? '' : String(match.description || '').trim();
    const details = isSeasonOne ? '' : `<div class="detail-grid">${detailItem('Goals', match.goals)}${detailItem('Assists', match.assists)}${detailItem('MOTM', match.motm)}</div>`;
    const notes = description ? `<div class="description-box">${escapeHTML(description)}</div>` : '';
    const notesButton = description ? `<div class="card-actions"><button class="text-action" type="button" data-action="description">View description</button></div>` : '<div class="card-actions"></div>';
    return `
      <article class="match-card ${escapeHTML(match.result)}" data-match-card>
        ${imageMarkup(match)}
        <div class="match-main">
          <div class="match-meta"><span class="match-number">MATCH #${escapeHTML(match.number)}</span><span class="result-pill ${escapeHTML(match.result)}">${escapeHTML(String(match.result || '').toUpperCase())}</span></div>
          <h3>${escapeHTML(opponent || 'Unknown opponent')}</h3>
          <p class="match-date">${escapeHTML(match.date || 'Date not provided')}</p>
          <div class="score-line"><span>${isSeasonOne ? 'Match record' : 'Full time'}</span><strong>${escapeHTML(match.score || '—')}</strong></div>
          ${details}${notes}
        </div>
        ${notesButton}
      </article>`;
  }
  function stats() {
    const won = matches.filter(m => m.result === 'won').length;
    const draw = matches.filter(m => m.result === 'draw').length;
    const lost = matches.filter(m => m.result === 'lost').length;
    const total = matches.length;
    el('statTotal').textContent = total;
    el('statWon').textContent = won;
    el('statDraw').textContent = draw;
    el('statLost').textContent = lost;
    el('statRate').textContent = `${total ? Math.round(won / total * 100) : 0}%`;
  }
  function render() {
    const search = el('searchInput').value.trim().toLocaleLowerCase();
    const resultFilter = el('resultFilter').value;
    const sorted = [...matches].sort((a, b) => (Number(b.number) || 0) - (Number(a.number) || 0));
    const filtered = sorted.filter(match => {
      const opponent = String(opponentOf(match) || '').toLocaleLowerCase();
      return opponent.includes(search) && (resultFilter === 'all' || match.result === resultFilter);
    });
    stats();
    const list = el('matchList');
    if (!filtered.length) {
      const emptyTitle = isSeasonThree && matches.length === 0 ? 'Season Three is ready for kickoff' : 'No matches found';
      const emptyText = isSeasonThree && matches.length === 0
        ? 'To publish a match, open Season-3/script.js, add a match object inside the matches array, then upload the updated file.'
        : 'Try a different opponent name or result filter.';
      list.innerHTML = `<div class="empty-state"><strong>${emptyTitle}</strong>${emptyText}</div>`;
    } else {
      list.innerHTML = filtered.map(renderCard).join('');
    }
    list.querySelectorAll('img[data-image]').forEach(image => image.addEventListener('error', () => {
      const placeholder = document.createElement('div');
      placeholder.className = 'match-image-placeholder';
      placeholder.textContent = 'CGC MATCH';
      image.replaceWith(placeholder);
    }, { once: true }));
    el('resultCount').textContent = `${filtered.length} ${filtered.length === 1 ? 'match' : 'matches'}`;
  }
  function closeLightbox() { el('lightbox').hidden = true; el('lightboxImage').src = ''; }
  el('searchInput').addEventListener('input', render);
  el('resultFilter').addEventListener('change', render);
  el('matchList').addEventListener('click', event => {
    const button = event.target.closest('button[data-action="description"]');
    if (button) {
      const box = button.closest('.match-card').querySelector('.description-box');
      if (box) { box.classList.toggle('open'); button.textContent = box.classList.contains('open') ? 'Hide description' : 'View description'; }
      return;
    }
    const image = event.target.closest('img[data-image]');
    if (image) { el('lightboxImage').src = image.dataset.image; el('lightbox').hidden = false; }
  });
  el('lightboxClose').addEventListener('click', closeLightbox);
  el('lightbox').addEventListener('click', event => { if (event.target === el('lightbox')) closeLightbox(); });
  el('lightboxImage').addEventListener('click', event => event.stopPropagation());
  document.addEventListener('keydown', event => { if (event.key === 'Escape') closeLightbox(); });
  render();
})();
