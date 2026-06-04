document.querySelector('a[href^="mailto"]').addEventListener('click', function(e) {
  e.preventDefault();
  navigator.clipboard.writeText('carlos.cmd96@gmail.com').then(function() {
    const item = document.querySelector('a[href^="mailto"]');
    const original = item.innerHTML;
    item.innerHTML = '<i class="ti ti-check" aria-hidden="true"></i> copiado!';
    item.style.color = 'var(--green)';
    item.style.background = 'var(--green-dark)';
    setTimeout(function() {
      item.innerHTML = original;
      item.style.color = '';
      item.style.background = '';
    }, 2000);
  });
});