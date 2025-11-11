const btnToggler = document.getElementById("btn-toggler");
const modal = document.getElementById("modal-1");
const closeModal = document.getElementById("close-modal-1");

// open modal
btnToggler.addEventListener("click", () => {
  modal.style.display = "block";
  closeModal.style.display = "block"; // optional: show icon if hidden
});

// close modal via close button
closeModal.addEventListener("click", () => {
  modal.style.display = "none";
  closeModal.style.display = "none"; // optional: hide icon
});
