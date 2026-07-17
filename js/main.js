/* Renee Kiffin — Portfolio
   Small progressive-enhancement scripts: mobile nav + scroll reveal. */

(function () {
  "use strict";

  /* ---- Mobile navigation toggle ---- */
  var toggle = document.querySelector(".nav-toggle");
  var links = document.querySelector(".nav-links");

  if (toggle && links) {
    toggle.addEventListener("click", function () {
      var open = links.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(open));
    });

    // Close menu when a link is tapped
    links.addEventListener("click", function (e) {
      if (e.target.closest("a")) {
        links.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  /* ---- Scroll reveal ---- */
  var revealEls = document.querySelectorAll(".reveal");

  if ("IntersectionObserver" in window && revealEls.length) {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    // No IO support: just show everything
    revealEls.forEach(function (el) { el.classList.add("is-visible"); });
  }

  /* ---- Contact form (front-end only stub) ---- */
  var form = document.querySelector("[data-contact-form]");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var note = form.querySelector("[data-form-note]");
      if (note) {
        note.textContent =
          "Thanks — your message is ready to send. Hook this form up to your email or form service to go live.";
        note.hidden = false;
      }
      form.reset();
    });
  }

  /* ---- Image placeholders ----
     Any <img data-ph="label"> that fails to load (because the real file
     hasn't been added yet) is replaced with a labeled placeholder box.
     Drop the real file at the img's src path and the placeholder disappears. */
  var phImgs = document.querySelectorAll("img[data-ph]");
  phImgs.forEach(function (img) {
    img.addEventListener("error", function () {
      if (img.dataset.phDone) return;
      img.dataset.phDone = "1";
      var box = document.createElement("div");
      box.className = "ph";
      var name = img.getAttribute("src") || "";
      box.innerHTML =
        '<span>' + (img.dataset.ph || "Image") +
        '<br><small style="opacity:.7">' + name + "</small></span>";
      if (img.parentNode) img.parentNode.replaceChild(box, img);
    });
  });

  /* ---- Footer year ---- */
  var yearEl = document.querySelector("[data-year]");
  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }
})();
