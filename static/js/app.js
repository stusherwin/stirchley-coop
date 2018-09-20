function showCurrentTab() {
  document.querySelectorAll('.tab-content').forEach(function(e) {
    e.style.display = 'none';
    document.querySelectorAll('[data-href="' + e.id + '"]').forEach(function(link) {
      link.classList.remove('font-normal', 'pointer-events-none', 'cursor-default');
    })
  })

  var elem = document.getElementById(location.hash.substr(1) || 'about');
  elem.style.display = 'block';
  document.querySelectorAll('[data-href="' + elem.id + '"]').forEach(function(link) {
    link.classList.add('font-normal', 'pointer-events-none', 'cursor-default');
    link.blur();
  })
}

document.addEventListener("DOMContentLoaded", showCurrentTab);
window.onhashchange = showCurrentTab;