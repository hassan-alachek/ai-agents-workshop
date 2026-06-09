/* ===========================================================================
   Deck bootstrap: reveal.js init + a minimal progress bar
   reveal.js 6.0.1 (vendored under /vendor/reveal)
   =========================================================================== */

Reveal.initialize({
  width: 1280,
  height: 720,
  margin: 0.04,
  minScale: 0.2,
  maxScale: 1.6,

  hash: true,
  center: false,
  controls: true,
  controlsTutorial: false,
  controlsLayout: 'bottom-right',
  progress: false,              // built-in bar OFF — we render our own
  slideNumber: 'c/t',
  hashOneBasedIndex: true,
  overview: true,
  transition: 'slide',
  transitionSpeed: 'default',
  backgroundTransition: 'fade',
  backgroundColor: '#ffffff',   // default; dark slides set data-background-color
  autoAnimateEasing: 'cubic-bezier(0.4, 0, 0.2, 1)',
  autoAnimateDuration: 0.6,
  display: 'flex',

  plugins: [ RevealHighlight, RevealNotes, RevealZoom ]
});

/* -------- minimal progress bar --------------------------------------------- */
(function () {
  var fill = document.querySelector('.deck-progress__fill');

  function render() {
    if (!fill) return;
    var p = Reveal.getProgress();                 // 0 .. 1 (includes fragments)
    if (typeof p !== 'number' || isNaN(p)) p = 0;
    fill.style.width = (Math.max(0, Math.min(1, p)) * 100) + '%';
  }

  // Keep the outer page background in sync with the current slide so dark
  // slides are fully black edge-to-edge (no white letterbox).
  function syncBg() {
    var slide = Reveal.getCurrentSlide();
    if (!slide) return;
    document.documentElement.classList.toggle('is-dark', slide.classList.contains('dark'));
  }

  Reveal.on('ready', function () { syncBg(); render(); });
  Reveal.on('slidechanged', function () { syncBg(); render(); });
  Reveal.on('fragmentshown', render);
  Reveal.on('fragmenthidden', render);
})();
