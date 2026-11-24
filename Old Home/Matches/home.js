(() => {
  const matches = Array.isArray(window.CGC_SEASON3_MATCHES) ? window.CGC_SEASON3_MATCHES : [];
  const count = document.getElementById('latestSeasonCount');
  const small = document.getElementById('latestSeasonTotalSmall');
  const preview = document.getElementById('latestSeasonMatch');
  if (count) count.textContent = String(matches.length);
  if (small) small.textContent = String(matches.length);
  if (preview && matches.length) {
    const latest = [...matches].sort((a, b) => (Number(b.number) || 0) - (Number(a.number) || 0))[0];
    const safe = (value) => String(value ?? '').replace(/[&<>"\']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
    preview.innerHTML = `<strong>Latest · Match #${safe(latest.number)}</strong>${safe(latest.opponent || 'Opponent')} · ${safe(latest.score || 'Score pending')} · ${(safe(latest.result || 'pending')).toUpperCase()}`;
  }
})();
