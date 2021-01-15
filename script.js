"use strict";

const showModalButtons = [...document.querySelectorAll(".show-modal")];
const closeModalButton = document.querySelector(".close-modal");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");

function showModal() {
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
}

function closeModal() {
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
}

// Add showModal listener to all show-modal buttons
showModalButtons.map(function (btn) {
    btn.addEventListener("click", showModal);
});

// Add closeModal listener to close-Modal Button
closeModalButton.addEventListener("click", closeModal);

overlay.addEventListener("click", closeModal);

// Add colseModal listener to 'esc' key
document.addEventListener("keyup", function (event) {
    if (event.key === "Escape" && !modal.classList.contains("hidden")) {
        closeModal();
    }
});
