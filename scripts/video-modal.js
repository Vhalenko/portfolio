const videoModal = document.getElementById("video-modal");
const modalVideo = document.getElementById("modal-video");
const closeBtn = videoModal.querySelector(".video-modal-close");

function openVideoModal(src) {
  modalVideo.src = src;
  videoModal.classList.add("show");
  videoModal.setAttribute("aria-hidden", "false");
  modalVideo.play().catch(() => {});
}

function closeVideoModal() {
  videoModal.classList.remove("show");
  videoModal.setAttribute("aria-hidden", "true");
  modalVideo.pause();
  modalVideo.removeAttribute("src");
  modalVideo.load();
}

document.querySelectorAll("[data-video-src]").forEach((trigger) => {
  trigger.addEventListener("click", () => {
    openVideoModal(trigger.dataset.videoSrc);
  });
});

videoModal.addEventListener("click", (e) => {
  if (e.target === videoModal || e.target === closeBtn) {
    closeVideoModal();
  }
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && videoModal.classList.contains("show")) {
    closeVideoModal();
  }
});