/*
 * Main Website Controller
 * Handles general interactions that are not specifically
 * related to themes or animations.
 */

document.addEventListener("DOMContentLoaded", () => {
    const contactForm = document.getElementById("contactForm");

    if (contactForm) {
        contactForm.addEventListener("submit", (event) => {
            // Prevent the browser from reloading the page.
            event.preventDefault();

            const nameInput = document.getElementById("name");
            if (!nameInput) return;

            const name = nameInput.value.trim();

            if (!name) {
                nameInput.focus();
                return;
            }

            /*
             * There is currently no backend connected to the form.
             * Therefore, this is only a frontend demonstration.
             */
            alert(`Thanks, ${name}! Your message has been received.`);

            contactForm.reset();
        });
    }
});