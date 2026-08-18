// Yes on N for Miller Creek Schools — shared site behavior
(function () {
  "use strict";

  // Mobile nav toggle
  var toggle = document.querySelector(".nav-toggle");
  var body = document.body;
  if (toggle) {
    toggle.addEventListener("click", function () {
      var isOpen = body.classList.toggle("nav-open");
      toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });
  }

  // Close mobile nav when a link is clicked
  document.querySelectorAll(".mobile-nav a").forEach(function (link) {
    link.addEventListener("click", function () {
      body.classList.remove("nav-open");
      if (toggle) toggle.setAttribute("aria-expanded", "false");
    });
  });

  // Highlight current nav link
  var path = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll("[data-nav-link]").forEach(function (link) {
    var href = link.getAttribute("href");
    if (href === path || (path === "" && href === "index.html")) {
      link.setAttribute("aria-current", "page");
    }
  });

  // Allow only one FAQ item open at a time (progressive enhancement; <details> works without JS too)
  document.querySelectorAll(".faq-item").forEach(function (item) {
    item.addEventListener("toggle", function () {
      if (item.open) {
        document.querySelectorAll(".faq-item").forEach(function (other) {
          if (other !== item) other.open = false;
        });
      }
    });
  });

  // Set current year in footer
  document.querySelectorAll("[data-year]").forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });
})();
