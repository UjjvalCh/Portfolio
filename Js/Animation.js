/*
 * Animation Controller
 * Handles the hero typewriter effect and scroll-reveal animations.
 */

/* ==============================
   TYPEWRITER EFFECT
   ============================== */

const typingText = document.getElementById("typingText");

const roles = [
    "HTML Developer",
    "CSS Styler",
    "JS Script Writer"
];

const typingSpeed = 100;
const deletingSpeed = 60;
const pauseAfterTyping = 1200;
const pauseAfterDeleting = 400;

const sleep = (milliseconds) => {
    return new Promise((resolve) => {
        setTimeout(resolve, milliseconds);
    });
};

async function typeWriter() {
    if (!typingText) return;

    // Screen readers can announce changes to this text.
    typingText.setAttribute("aria-live", "polite");

    let roleIndex = 0;

    while (true) {
        const currentRole = roles[roleIndex];

        // Type the current role one character at a time.
        for (let i = 0; i <= currentRole.length; i++) {
            typingText.textContent = currentRole.substring(0, i);
            await sleep(typingSpeed);
        }

        await sleep(pauseAfterTyping);

        // Delete the role one character at a time.
        for (let i = currentRole.length; i >= 0; i--) {
            typingText.textContent = currentRole.substring(0, i);
            await sleep(deletingSpeed);
        }

        await sleep(pauseAfterDeleting);

        // Move to the next role.
        roleIndex = (roleIndex + 1) % roles.length;
    }
}

typeWriter();


/* ==============================
   SCROLL REVEAL
   ============================== */

// These elements receive the reveal animation automatically,
// so we don't have to repeat "reveal" classes throughout the HTML.
const revealElements = document.querySelectorAll(
    ".page-hero, " +
    ".intro-section, " +
    ".about-section, " +
    ".projects-section, " +
    ".project-card, " +
    ".contact-section, " +
    ".contact-form"
);

revealElements.forEach((element) => {
    element.classList.add("reveal");
});

// IntersectionObserver lets us animate an element when it
// actually enters the user's viewport.
const revealObserver = new IntersectionObserver(
    (entries, observer) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) return;

            entry.target.classList.add("visible");

            // Once revealed, there is no need to observe it anymore.
            observer.unobserve(entry.target);
        });
    },
    {
        threshold: 0.15
    }
);

revealElements.forEach((element) => {
    revealObserver.observe(element);
});