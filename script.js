const phone = document.querySelector("#phone-number");
const email = document.querySelector("#contact-email");
const alert = document.querySelector("#alert");

const modal = document.getElementById("image-modal");
const modalImg = document.getElementById("modal-image");

const dropdownBtn = document.getElementById("selected-flag");
const flagList = document.getElementById("flag-list");

// Toggle dropdown
dropdownBtn.addEventListener("click", () => {
  flagList.style.display =
    flagList.style.display === "block" ? "none" : "block";
});

// Change selected flag
flagList.querySelectorAll("button").forEach((flag) => {
  flag.addEventListener("click", () => {
    dropdownBtn.innerHTML = flag.innerHTML;
    flagList.style.display = "none";
  });
});

// Close dropdown if clicking outside
window.addEventListener("click", (e) => {
  if (!dropdownBtn.contains(e.target) && !flagList.contains(e.target)) {
    flagList.style.display = "none";
  }
});

//Fullscreen Image
document.querySelectorAll(".image-wrapper").forEach((wrapper) => {
  wrapper.addEventListener("click", () => {
    const img = wrapper.querySelector("img");
    modalImg.src = img.src;
    modal.classList.add("show");
    modal.setAttribute("aria-hidden", "false");
  });
});

modal.addEventListener("click", () => {
  modal.classList.remove("show");
  modal.setAttribute("aria-hidden", "true");
});

// Esc for fullscreen image
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    modal.classList.remove("show");
    modal.setAttribute("aria-hidden", "true");
  }
});

// Copy phone and email
function copyToClipboard(element, message) {
  navigator.clipboard.writeText(element.textContent);
  alert.textContent = message;
  alert.classList.add("show");

  setTimeout(() => {
    alert.classList.remove("show");
  }, 1000);
}

phone.addEventListener("click", () => {
  const lang = localStorage.getItem("lang") || "en";
  const message = translations[lang].phone_copied;

  copyToClipboard(phone, message);
});

email.addEventListener("click", () => {
  const lang = localStorage.getItem("lang") || "en";
  const message = translations[lang].email_copied;

  copyToClipboard(email, message);
});

// Set language
function setLanguage(lang) {
  // Normal text
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.dataset.i18n;
    if (translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });

  // Placeholders
  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    const key = el.dataset.i18nPlaceholder;
    if (translations[lang][key]) {
      el.placeholder = translations[lang][key];
    }
  });

  localStorage.setItem("lang", lang);
}
