

(function() {
  function applyZoom() {
    document.body.style.transform = 'scale(1)';
    document.body.style.transformOrigin = '0 0';
    document.documentElement.style.width = '100vw';
    document.documentElement.style.height = '100vh';
  }

  window.addEventListener('resize', applyZoom);
  window.addEventListener('DOMContentLoaded', applyZoom);
  applyZoom();
})();