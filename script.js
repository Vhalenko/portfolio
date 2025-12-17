const phone = document.querySelector("#phone-number");
const email = document.querySelector("#contact-email");
const alert = document.querySelector("#alert");

function copyToClipboard(element, message) {
  navigator.clipboard.writeText(element.textContent);
  alert.textContent = message;
  alert.classList.add("show");

  setTimeout(() => {
    alert.classList.remove("show");
  }, 1000);
}

phone.addEventListener("click", () => {
  copyToClipboard(phone, "phone copied");
});

email.addEventListener("click", () => {
  copyToClipboard(email, "email copied");
});

