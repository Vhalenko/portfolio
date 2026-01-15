const phone = document.querySelector("#phone-number");
const email = document.querySelector("#contact-email");
const alert = document.querySelector("#alert");

const modal = document.getElementById("image-modal");
const modalImg = document.getElementById("modal-image");

document.querySelectorAll(".image-wrapper").forEach(wrapper => {
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

document.addEventListener("keydown", e => {
  if (e.key === "Escape") {
    modal.classList.remove("show");
    modal.setAttribute("aria-hidden", "true");
  }
});

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

