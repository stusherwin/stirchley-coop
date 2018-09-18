import '../static/dist/styles.css';

function showCurrentTab() {
  document.querySelectorAll('.tab-content').forEach(function(e) {
    e.style.display = 'none';
    var link = document.querySelector('[data-href="' + e.id + '"]');
    if(link) {
      link.classList.remove('font-normal', 'pointer-events-none', 'cursor-default');
    }
  })

  var elem = document.getElementById(location.hash.substr(1) || 'about');
  elem.style.display = 'block';
  var link = document.querySelector('[href="#' + elem.id + '"]');
  if(link) {
    link.classList.add('font-normal', 'pointer-events-none', 'cursor-default');
  }
}

document.addEventListener("DOMContentLoaded", showCurrentTab);
window.onhashchange = showCurrentTab;