// Copy code buttons
function copyCode(btn){
  const pre=btn.closest('.code-block').querySelector('pre');
  navigator.clipboard.writeText(pre.innerText);
  btn.innerHTML='✓ Copied';
  setTimeout(()=>btn.innerHTML='Copy',1500);
}

