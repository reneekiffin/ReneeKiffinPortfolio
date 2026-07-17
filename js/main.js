/* Renee Kiffin — Portfolio
   Shared chrome (nav + footer) injection + progressive enhancement.
   Nav/footer live here once, so edits happen in a single place. */

(function () {
  "use strict";

  /* ---- Shared navigation ----
     Put <div data-chrome="nav" data-variant="dark|light" data-active="portfolio|services|about|contact"></div>
     wherever the navbar should appear. */
  function buildNav(variant, active) {
    var v = variant === "light" ? "rk-navbar--light" : "rk-navbar--over-dark";
    function activeCls(name) { return active === name ? " active" : ""; }
    return (
      '<nav class="navbar navbar-expand-lg rk-navbar ' + v + '">' +
        '<div class="container rk-nav-inner">' +
          '<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#rkNav" aria-controls="rkNav" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>' +
          '<div class="collapse navbar-collapse" id="rkNav">' +
            '<ul class="navbar-nav">' +
              '<li class="nav-item dropdown">' +
                '<a class="nav-link dropdown-toggle' + activeCls("portfolio") + '" href="portfolio.html" role="button" data-bs-toggle="dropdown" aria-expanded="false">Portfolio</a>' +
                '<ul class="dropdown-menu"><li><a class="dropdown-item" href="portfolio.html">Graphic Design</a></li></ul>' +
              '</li>' +
              '<li class="nav-item dropdown">' +
                '<a class="nav-link dropdown-toggle' + activeCls("services") + '" href="services.html" role="button" data-bs-toggle="dropdown" aria-expanded="false">Services</a>' +
                '<ul class="dropdown-menu">' +
                  '<li><a class="dropdown-item" href="services.html">All Services</a></li>' +
                  '<li><a class="dropdown-item" href="brand-design.html">Brand Design</a></li>' +
                  '<li><a class="dropdown-item" href="web-design.html">Web Design</a></li>' +
                  '<li><a class="dropdown-item" href="photo-retouching.html">Photo Retouching</a></li>' +
                  '<li><a class="dropdown-item" href="photography.html">Photography</a></li>' +
                '</ul>' +
              '</li>' +
              '<li class="nav-item"><a class="nav-link' + activeCls("about") + '" href="about.html">About</a></li>' +
              '<li class="nav-item"><a class="nav-link' + activeCls("contact") + '" href="contact.html">Contact</a></li>' +
            '</ul>' +
          '</div>' +
          '<a class="navbar-brand" href="index.html">Renee Kiffin</a>' +
        '</div>' +
      '</nav>'
    );
  }

  /* ---- Shared footer ---- */
  function buildFooter() {
    return (
      '<footer class="site-footer"><div class="container">' +
        '<div class="row gy-4">' +
          '<div class="col-md-6">' +
            '<div class="footer-brand mb-4">Renee Kiffin</div>' +
            '<ul class="footer-links text-center" style="max-width:260px;">' +
              '<li><a href="about.html">About</a></li>' +
              '<li><a href="#">Blog</a></li>' +
              '<li><a href="https://www.behance.net/ReneeKiffin" target="_blank" rel="noopener">Behance</a></li>' +
              '<li><a href="https://www.linkedin.com/in/Reneekiffin/" target="_blank" rel="noopener">LinkedIn</a></li>' +
              '<li><a href="mailto:hello@reneekiffin.com">hello@reneekiffin.com</a></li>' +
            '</ul>' +
          '</div>' +
          '<div class="col-md-6 subscribe text-center">' +
            '<div class="subscribe-title mb-2">Subscribe</div>' +
            '<p class="mb-3">Sign up with your email address to receive news and updates.</p>' +
            '<form class="d-flex justify-content-center" data-stub-form="Thanks for subscribing!">' +
              '<input type="email" class="form-control me-2" placeholder="Email Address" aria-label="Email Address" required>' +
              '<button class="btn" type="submit">Sign Up</button>' +
            '</form>' +
            '<p data-form-note hidden class="mt-2 small text-green mb-0"></p>' +
          '</div>' +
        '</div>' +
        '<div class="mt-4 pt-3 small text-secondary">&copy; <span data-year>2026</span> Renee Kiffin</div>' +
      '</div></footer>'
    );
  }

  document.querySelectorAll('[data-chrome="nav"]').forEach(function (el) {
    el.outerHTML = buildNav(el.getAttribute("data-variant"), el.getAttribute("data-active"));
  });
  document.querySelectorAll('[data-chrome="footer"]').forEach(function (el) {
    el.outerHTML = buildFooter();
  });

  /* ---- Front-end-only form stubs ---- */
  document.querySelectorAll("[data-stub-form]").forEach(function (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var note = form.querySelector("[data-form-note]");
      if (note) { note.textContent = form.dataset.stubForm || "Thanks!"; note.hidden = false; }
      form.reset();
    });
  });

  /* ---- Image placeholders (for any img[data-ph] whose file is missing) ---- */
  document.querySelectorAll("img[data-ph]").forEach(function (img) {
    function fail() {
      if (img.dataset.phDone) return;
      img.dataset.phDone = "1";
      var box = document.createElement("div");
      box.className = "ph";
      box.innerHTML = "<span>" + (img.dataset.ph || "Image") + "</span>";
      if (img.parentNode) img.parentNode.replaceChild(box, img);
    }
    if (img.complete && img.naturalWidth === 0) fail();
    else img.addEventListener("error", fail);
  });

  /* ---- Footer year ---- */
  document.querySelectorAll("[data-year]").forEach(function (el) {
    el.textContent = String(new Date().getFullYear());
  });
})();
