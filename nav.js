// Mobile nav toggle — shows/hides the nav links below the desktop breakpoint (1024px),
// where .navbar-links is hidden by CSS with no other way to reach them.
(function () {
  var toggle = document.getElementById('navToggle');
  var menu = document.getElementById('mobileMenu');
  if (!toggle || !menu) return;

  function setOpen(open) {
    toggle.classList.toggle('is-open', open);
    menu.classList.toggle('is-open', open);
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  }

  toggle.addEventListener('click', function () {
    setOpen(!menu.classList.contains('is-open'));
  });

  menu.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () { setOpen(false); });
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') setOpen(false);
  });

  document.addEventListener('click', function (e) {
    if (!menu.classList.contains('is-open')) return;
    if (menu.contains(e.target) || toggle.contains(e.target)) return;
    setOpen(false);
  });

  window.addEventListener('resize', function () {
    if (window.innerWidth >= 1024) setOpen(false);
  });
})();
