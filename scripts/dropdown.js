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