/* Renee Kiffin — Portfolio
   Progressive enhancement: image placeholders, form stubs, footer year.
   Bootstrap's bundle handles the navbar toggle and accordion. */

(function () {
  "use strict";

  /* ---- Image placeholders ----
     Any <img data-ph="label"> that fails to load (real file not added yet)
     is swapped for a labeled placeholder box. Drop the real file at the
     img's src path and the placeholder disappears automatically. */
  document.querySelectorAll("img[data-ph]").forEach(function (img) {
    function fail() {
      if (img.dataset.phDone) return;
      img.dataset.phDone = "1";
      var box = document.createElement("div");
      box.className = "ph";
      box.innerHTML =
        "<span>" + (img.dataset.ph || "Image") +
        '<br><small style="opacity:.65">' + (img.getAttribute("src") || "") +
        "</small></span>";
      if (img.parentNode) img.parentNode.replaceChild(box, img);
    }
    // Image may have already failed before this script ran (fires no event),
    // so check the loaded state as well as listening for future errors.
    if (img.complete && img.naturalWidth === 0) fail();
    else img.addEventListener("error", fail);
  });

  /* ---- Front-end-only form stubs ----
     These just show a confirmation. Connect them to your email or a form
     service (Formspree, Squarespace forms, etc.) to actually send. */
  document.querySelectorAll("[data-stub-form]").forEach(function (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var note = form.querySelector("[data-form-note]");
      if (note) {
        note.textContent = form.dataset.stubForm || "Thanks — your message is ready to send.";
        note.hidden = false;
      }
      form.reset();
    });
  });

  /* ---- Footer year ---- */
  document.querySelectorAll("[data-year]").forEach(function (el) {
    el.textContent = String(new Date().getFullYear());
  });
})();
