import '../static/dist/styles.css';

function showCurrentTab() {
  document.querySelectorAll('.tab-content').forEach(function(e) {
    e.style.display = 'none';
  })

  var elem = document.getElementById(location.hash.substr(1) || 'about')
  elem.style.display = 'block';
}

document.addEventListener("DOMContentLoaded", showCurrentTab);
window.onhashchange = showCurrentTab;