document.addEventListener("DOMContentLoaded", function () {
    const contactBtn = document.getElementById("contact-btn");
    const contactForm = document.querySelector(".contact-form");
    const cancelBtn = document.getElementById("cancel-btn");
    const overlay = document.querySelector(".overlay");

    function closeForm() {
        contactForm.classList.remove("show");
        overlay.classList.remove("active");
    }

    // Open form & show overlay
    contactBtn.addEventListener("click", function () {
        contactForm.classList.add("show");
        overlay.classList.add("active");
    });

    // Close form when clicking cancel or overlay
    cancelBtn.addEventListener("click", closeForm);
    overlay.addEventListener("click", closeForm);
});
