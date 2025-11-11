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
  closeModal.style.display = "none";
});


const modalPayment = document.getElementById("paymentModal");
const closeBtn = document.getElementById("modal-close");
const cancelBtn = document.getElementById("cancelBtn");

// All buttons that should open the modal
const openButtons = [
  document.getElementById("openModal"),     // sign up
  document.getElementById("openModal-1"),   // pro
  document.getElementById("openModal-2")    // premium
];

// Loop through all buttons and add click listener
openButtons.forEach(btn => {
  if(btn) {
    btn.addEventListener("click", () => {
      modalPayment.style.display = "block"; // open modal
    });
  }
});

// Close modal via close button
if(closeBtn) {
  closeBtn.addEventListener("click", () => {
    modalPayment.style.display = "none";
  });
}

// Close modal via cancel button
if(cancelBtn) {
  cancelBtn.addEventListener("click", () => {
    modalPayment.style.display = "none";
  });
}

// Optional: close modal when clicking outside modal content
window.addEventListener("click", (e) => {
  if (e.target === modalPayment) {
    modalPayment.style.display = "none";
  }
});

document.getElementById("contact-form").addEventListener("submit", function(e) {
  e.preventDefault();

  const note = document.querySelector(".submit-notification");

  note.classList.add("show");
  note.textContent = "Message sent successfully.";

  setTimeout(() => {
    note.classList.add("hide");
  }, 2000);

  // thoda delay se completely remove display
  setTimeout(() => {
    note.classList.remove("show", "hide");
    note.style.display = "none";
  }, 2500);
});