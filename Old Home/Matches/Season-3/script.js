/*
  CGC MATCH CENTRE — SEASON THREE
  --------------------------------
  Add every new match manually inside the matches array below.
  Copy the sample object, change its values, and save this file.
  Then upload the updated Season-3/script.js to your website.

  Required fields:
    number      : Match number (1, 2, 3...)
    date        : DD-MM-YYYY (example: 24-11-2026)
    opponent    : Opponent team name
    result      : "won", "draw", or "lost"
    score       : Full-time score (example: "2-1")

  Optional fields: image, goals, assists, motm, description
  Image files should be uploaded into the main Matches/images/ folder,
  then use a path such as "images/season3-match-01.jpg".
  Newest matches are automatically shown first by match number.
*/
const matches = [
  {
    number: 1,
    image: "images/season3-match-01.jpg", // Optional image
    date: "06-01-2026",
    opponent: "🆚Suhag XI",
    result: "lost", // won | draw | lost
    score: "0-0 | Pen 2-1",
    goals: "Jakariya pen' ",
    assists: "",
    motm: "",
    description: "মোঃ লাল মিয়া কাউন্সিলর স্মৃতি ফ্রিজ কাপ নাইট মিনিবার ফুটবল টুর্নামেন্ট ২০২৫-২৬."
  },
    {
    number: 2,
    image: "images/s3m2.jpeg", // Optional image
    date: "16-02-2026",
    opponent: "🆚Dudpatil Sporting Club",
    result: "draw", // won | draw | lost
    score: "1-1",
    goals: "Sabbir'67",
    assists: "",
    motm: "",
    description: "Good Game"
  },
    {
    number: 3,
    image: "images/s3m3.jpeg", // Optional image
    date: "21-03-2026",
    opponent: "🆚স্বপ্নছোঁয়া তরুণ ক্লাব",
    result: "lost", // won | draw | lost
    score: "1-3",
    goals: "Sabbir'16",
    assists: "",
    motm: "",
    description: "Good Game"
  },
    {
    number: 4,
    image: "images/s3m4.jpeg", // Optional image
    date: "24-03-2026",
    opponent: "🆚ইনাতাবাদ অগ্রগামী ফুটবল টিম ",
    result: "won", // won | draw | lost
    score: "3-1",
    goals: "Rajon 25' Shajan 71' Shajan 80'",
    assists: "Rumel 25'",
    motm: "Shajan ",
    description: "Good Game"
  },
    {
    number: 5,
    image: "images/s3m5.jpeg", // Optional image
    date: "03-04-2026",
    opponent: "🆚খোয়াই স্পোর্টিং ক্লাব",
    result: "draw", // won | draw | lost
    score: "2-3",
    goals: "Sabbir 32' Rajon 68'",
    assists: "Shajan 68'",
    motm: "",
    description: "বিশেষ দ্রষ্টব্য: খেলা চলাকালীন একটা সময়ে দেখা গেছে বিরোধী দলের ১৪ জন খেলতেছে! 🥴"
  },
    {
    number: 6,
    image: "images/s3m6.jpeg", // Optional image
    date: "08-05-2026",
    opponent: "🆚ব্যারিস্টার সুমন ফুটবল একাডেমী",
    result: "lost", // won | draw | lost
    score: "2-4",
    goals: "Saymon 23'  Masum 55'",
    assists: "",
    motm: "",
    description: "Good game"
  },
    {
    number: 7,
    image: "images/s3m7.jpeg", // Optional image
    date: "12-06-2026",
    opponent: "🆚৪ নং পাইকপাড়া ইউপি FC",
    result: "lost", // won | draw | lost
    score: "2-4",
    goals: "Jakaria 17' Rajon 38'",
    assists: "Sabbir 38'",
    motm: "",
    description: "Good game"
  },
      {
    number: 8,
    image: "images/s3m9.jpeg", // Optional image
    date: "20-06-2026",
    opponent: "🆚রাণীরকোট ফুটবল একাদশ",
    result: "won", // won | draw | lost
    score: "7-2",
    goals: "Akram 5' Sabbir 9' Sabbir 14' Arif T 19' Akram 23' Sabbir 51' Opi 63'",
    assists: "Arit T 5' Opi 9' Arit T 14' Sabbir 19' Arif T 23' Opi 51' Sabbir 63'",
    motm: "Sabbir",
    description: "Good game"
  },
      {
    number: 9,
    image: "images/s3m9.jpeg", // Optional image
    date: "11-07-2026",
    opponent: "🆚আজিমাবাদ একাদশ ",
    result: "lost", // won | draw | lost
    score: "5-6",
    goals: " Rajon 13' Rajon 37' Sabbir 44' Sabbir 65' Rumel 82'",
    assists: "Sabbir 13' Rumel 37' Akram 44' Akram 65' Rajon 82'",
    motm: "",
    description: "Good game"
  },
      {
    number: 10,
    image: "images/s3m10.jpeg", // Optional image
    date: "24-07-2026",
    opponent: "🆚৪ নং পাইকপাড়া ইউপি",
    result: "draw", // won | draw | lost
    score: "4-4",
    goals: "Shajan 16' Sabbir 33' Sabbir 56' Saymon 68'pen",
    assists: "Rasel 33' Shajan 56'",
    motm: "Shajan",
    description: "Good game"
  },
      {
    number: 11,
    image: "images/s3m11.jpeg", // Optional image
    date: "27-07-2026",
    opponent: "🆚চাঁনপুর ফুটবল একাদশ ",
    result: "lost", // won | draw | lost
    score: "0-2",
    goals: "",
    assists: "",
    motm: "",
    description: "Good game"
  },
      {
    number: 12,
    image: "images/s3m12.jpeg", // Optional image
    date: "14-08-2026",
    opponent: "🆚শায়েস্তাগঞ্জ ফুটবল একাদশ",
    result: "won", // won | draw | lost
    score: "9-2",
    goals: "Sabbir 11' Sabbir 17' Opi 23' Najim 33' Sabbir 54' Sabbir 60' Rumel 67' Shabuddin 71'pen Arit T 76'",
    assists: "Opi 11' Opi 17' Jakaria 23' ashik 33' Opi 60' Sabbir 67' Razu 76' ",
    motm: "Opi",
    description: "Good game"
  },
      {
    number: 13,
    image: "images/s3m13.jpeg", // Optional image
    date: "04-09-2026",
    opponent: "🆚ভাই ব্রাদার্স একাদশ",
    result: "lost", // won | draw | lost
    score: "2-3",
    goals: "Akram 43' Rumel 57'",
    assists: " Rajon 43' Akram 57'",
    motm: "",
    description: "Good game"
  },
      {
    number: 14,
    image: "images/s3m14.jpeg", // Optional image
    date: "24-09-2026",
    opponent: "🆚Team Balla road",
    result: "won", // won | draw | lost
    score: "4-1",
    goals: "Jakariya 38'pen Sabbir 46' Sabbir 52' Razu 60'",
    assists: "Jakariya 46' Joy 52'",
    motm: "Joy",
    description: "Good game"
  },
      {
    number: 15,
    image: "images/s3m15.jpeg", // Optional image
    date: "25-09-2026",
    opponent: "🆚নোয়াবাদ বন্ধু মহল",
    result: "draw", // won | draw | lost
    score: "2-2",
    goals: "Sabbir 49' Sabbir 70'",
    assists: " Jakaria 49' Mushahid 70'",
    motm: "Sabbir",
    description: "Good game"
  },
      {
    number: 16,
    image: "images/s3m16.jpeg", // Optional image
    date: "27-09-2026",
    opponent: "🆚Digaw Young Star Club",
    result: "lost", // won | draw | lost
    score: "1-3",
    goals: "Arif T 48'",
    assists: "Mushahid 48'",
    motm: "",
    description: "Good game"
  },
      {
    number: 17,
    image: "images/s3m17.jpeg", // Optional image
    date: "02-10-2026",
    opponent: "🆚বিশ্রাবণ একতা যুব সংঘ ",
    result: "lost", // won | draw | lost
    score: "3-4",
    goals: "Shajan 25' Shajan 34' Fuhad 63'",
    assists: "",
    motm: "",
    description: "Good game"
  },
      {
    number: 18,
    image: "images/s3m18.jpeg", // Optional image
    date: "11-10-2026",
    opponent: "🆚Ballaroad City",
    result: "won", // won | draw | lost
    score: "3-1",
    goals: "Payel 12' Jakaria 24' Payel 43'",
    assists: "ArifT 12' Sabbir 24' Sabbir 43'",
    motm: "Payel",
    description: "Good game"
  },
      {
    number: 19,
    image: "images/s3m19.jpeg", // Optional image
    date: "07-11-2026",
    opponent: "🆚চাঁনপুর ফুটবল একাদশ",
    result: "lost", // won | draw | lost
    score: "0-3",
    goals: "",
    assists: "",
    motm: "",
    description: "Good game"
  },
  {
    number: 20,
    image: "images/s3m20.jpeg", // Optional image
    date: "10-11-2026",
    opponent: "🆚Opponent Unknown",
    result: "won", // won | draw | lost
    score: "5-2",
    goals: "Razu 4' RazjuBSFA 6' RajuBSFA 11' Razu 13' Sabbir 27'",
    assists: "Sabbir 4' Sabbir 6' TajolBSFA 13' Rasel 17'",
    motm: "RajuBSFA",
    description: "কালিশিরী সিক্সবার টুর্নামেন্টের প্রথম রাউন্ড"
  },
  {
    number: 21,
    image: "images/s3m7.jpeg", // Optional image
    date: "24-11-2026",
    opponent: "🆚ভয়ংকর একাদশ",
    result: "lost", // won | draw | lost
    score: "0-0 | Pen 1-2",
    goals: "Sabbir Pen'",
    assists: "",
    motm: "",
    description: "কালিশিরী সিক্সবার প্রাইজমানি টুর্নামেন্ট রাউন্ড অফ ১৬"
  },
  /*
    {
    number: 7,
    image: "images/s3m7.jpeg", // Optional image
    date: "",
    opponent: "",
    result: "lost", // won | draw | lost
    score: "-",
    goals: "",
    assists: "",
    motm: "",
    description: "Good game"
  },
  */
];

(() => {
  'use strict';
  const SEASON_ID = 3;
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
