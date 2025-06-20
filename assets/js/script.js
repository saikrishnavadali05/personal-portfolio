// script.js

document.addEventListener("DOMContentLoaded", () => {
    // Highlight active nav link based on current page
    const links = document.querySelectorAll('.nav-links a');
    const currentPath = window.location.pathname.split('/').pop();

    links.forEach(link => {
        if (link.getAttribute('href') === currentPath) {
            link.classList.add('active');
        }
    });

    // Contact form confirmation (works with Formspree or any async API)
    const contactForm = document.getElementById("contact-form");
    if (contactForm) {
        contactForm.addEventListener("submit", (e) => {
            // Prevent default to show message right away
            // Remove below if you want the form to actually submit
            e.preventDefault();

            alert("Thank you for reaching out! I’ll get back to you soon.");

            // Optionally reset form after submission
            contactForm.reset();

            // Uncomment this to allow form to submit if using real Formspree:
            // contactForm.submit();
        });
    }
});
