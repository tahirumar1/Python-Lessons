/* ============================================================
   UTILITY: Copy code buttons
   ============================================================ */
function copyCode(btn) {
  const pre = btn.closest('.code-block').querySelector('pre');
  navigator.clipboard.writeText(pre.innerText);
  btn.innerHTML = '✓ Copied';
  setTimeout(() => btn.innerHTML = '<i class="ti ti-copy" aria-hidden="true"></i> Copy', 1500);
}

/* ============================================================
   INDEX PAGE: Course Schedule Functionality
   ============================================================ */
// This is loaded on index.html for course overview page
// See bottom of index.html for inline schedule data and rendering functions

/* ============================================================
   LESSON PAGES: Quiz Answer Functionality
   ============================================================ */
function answer(el, correct) {
  // Check if already answered
  if (document.querySelector('.check-opt.correct')) return;
  
  // Disable all options and mark selected answer
  document.querySelectorAll('.check-opt').forEach(o => {
    o.style.pointerEvents = 'none';
    if (o === el) o.classList.add(correct ? 'correct' : 'wrong');
    else if (correct === false && o.onclick.toString().includes('true')) o.classList.add('correct');
  });
  
  // Show feedback
  if (correct) {
    document.getElementById('fb').style.display = 'block';
  } else {
    document.getElementById('fb').style.display = 'block';
    document.getElementById('fb').style.color = 'var(--color-text-secondary)';
    document.getElementById('fb').textContent = 'Not quite — the correct answer is shown in green. Read the explanation above.';
  }
}
