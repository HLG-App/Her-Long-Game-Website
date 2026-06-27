/* ============================================================
   HER LONG GAME — hlg.js
   Shared site menu. Guarantees a consistent, end-to-end
   navigation menu on every page.

   Behaviour:
   - If the page already has the canonical <nav id="nav"> (home,
     tools, blog, article), this script does nothing.
   - Otherwise it UPGRADES a simple existing header <nav> to the
     canonical menu, or INJECTS one if the page has none.
   - Wires the mobile hamburger + drawer.
   - The "Get early access" CTA opens the waitlist modal if the
     page has one, else links to the homepage waitlist (/#join).

   Mirrors hlg.css nav styling. Single source of truth for the menu.
   ============================================================ */
(function () {
  'use strict';

  // Page already carries the canonical menu — leave it alone.
  if (document.getElementById('nav')) return;

  var NAV =
    '<nav id="nav" class="nav--solid">' +
      '<a href="/" class="nav-logo" aria-label="Her Long Game home">' +
        '<img src="/assets/images/her-long-game-logo.svg" alt="Her Long Game" style="height:30px;width:auto;display:block">' +
      '</a>' +
      '<div class="nav-actions">' +
        '<a href="/#about" class="nav-link">Why</a>' +
        '<a href="/#lessons" class="nav-link">Learn</a>' +
        '<a href="/tools.html" class="nav-link">Tools</a>' +
        '<a href="/field-notes.html" class="nav-link">Blog</a>' +
        '<a href="/contact.html" class="nav-link">Contact</a>' +
        '<a href="/#join" class="nav-cta" data-hlg-cta>Get early access</a>' +
      '</div>' +
      '<button class="nav-hamburger" id="hlgHamburger" aria-label="Open menu" aria-expanded="false">' +
        '<span></span><span></span><span></span>' +
      '</button>' +
    '</nav>' +
    '<div class="nav-drawer" id="hlgDrawer" role="dialog" aria-modal="true" aria-label="Navigation menu">' +
      '<button class="nav-drawer-close" id="hlgDrawerClose" aria-label="Close menu">&#x2715;</button>' +
      '<a class="nav-drawer-link" href="/#about">Why</a>' +
      '<a class="nav-drawer-link" href="/#lessons">Learn</a>' +
      '<a class="nav-drawer-link" href="/tools.html">Tools</a>' +
      '<a class="nav-drawer-link" href="/field-notes.html">Blog</a>' +
      '<a class="nav-drawer-link" href="/contact.html">Contact</a>' +
      '<a class="nav-cta nav-drawer-cta" href="/#join" data-hlg-cta>Get early access</a>' +
    '</div>';

  function init() {
    // Upgrade a simple body-level header nav, else inject at top of body.
    var existing = document.querySelector('nav:not(#nav)');
    var insideOverlay = existing && existing.closest('#gate-overlay, .gate-card, .modal-overlay, .nav-drawer');
    if (existing && !insideOverlay) {
      existing.insertAdjacentHTML('beforebegin', NAV);
      existing.parentNode.removeChild(existing);
    } else {
      document.body.insertAdjacentHTML('afterbegin', NAV);
    }
    document.body.classList.add('hlg-nav-pad');

    var ham = document.getElementById('hlgHamburger');
    var drawer = document.getElementById('hlgDrawer');
    var closeBtn = document.getElementById('hlgDrawerClose');

    function openDrawer() { drawer.classList.add('open'); ham.setAttribute('aria-expanded', 'true'); }
    function closeDrawer() { drawer.classList.remove('open'); ham.setAttribute('aria-expanded', 'false'); }

    if (ham) ham.addEventListener('click', openDrawer);
    if (closeBtn) closeBtn.addEventListener('click', closeDrawer);
    if (drawer) {
      drawer.addEventListener('click', function (e) { if (e.target === drawer) closeDrawer(); });
      Array.prototype.forEach.call(drawer.querySelectorAll('a'), function (a) {
        a.addEventListener('click', closeDrawer);
      });
    }

    // CTA: prefer an on-page waitlist modal; otherwise the /#join link stands.
    if (typeof window.openWaitlistModal === 'function') {
      Array.prototype.forEach.call(document.querySelectorAll('[data-hlg-cta]'), function (cta) {
        cta.addEventListener('click', function (e) { e.preventDefault(); window.openWaitlistModal(); });
      });
    }

    // Keep the menu solid on scroll too.
    var nav = document.getElementById('nav');
    if (nav) {
      var onScroll = function () { nav.classList.toggle('scrolled', window.scrollY > 8); };
      window.addEventListener('scroll', onScroll, { passive: true });
      onScroll();
    }
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
