const phone = document.querySelector("#phone-number");
const email = document.querySelector("#email");
const alert = document.querySelector("#alert");

phone.addEventListener("click", () => {
  console.log("phone copied");
  navigator.clipboard.writeText("+380 95 534 2870");
  alert.innerHTML = "phone copied";
  alert.classList.add("show");

  setTimeout(() => {
    alert.classList.remove("show");
  }, 1000);
});

email.addEventListener("click", () => {
  navigator.clipboard.writeText("galenko.vladislav@gmail.com");
  alert.innerHTML = "email copied";
  alert.classList.add("show");

  setTimeout(() => {
    alert.classList.remove("show");
  }, 1000);
});
