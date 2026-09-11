/*
 * Theme Controller
 * Handles light/dark mode and remembers the user's choice.
 */

const themeToggle = document.getElementById("themeToggle");
const themeIcon = document.querySelector(".theme-icon");

const savedTheme = localStorage.getItem("portfolio-theme");
const systemPrefersDark = window.matchMedia(
    "(prefers-color-scheme: dark)"
).matches;

// Use the saved preference first.
// If there is no saved preference, follow the system theme.
const initialTheme = savedTheme || (systemPrefersDark ? "dark" : "light");

document.documentElement.setAttribute("data-theme", initialTheme);
updateThemeButton(initialTheme);

themeToggle?.addEventListener("click", () => {
    const currentTheme =
        document.documentElement.getAttribute("data-theme");

    const newTheme = currentTheme === "dark" ? "light" : "dark";

    document.documentElement.setAttribute("data-theme", newTheme);

    // Remember the user's choice for future visits.
    localStorage.setItem("portfolio-theme", newTheme);

    updateThemeButton(newTheme);
});

function updateThemeButton(theme) {
    if (!themeToggle || !themeIcon) return;

    if (theme === "dark") {
        themeIcon.textContent = "☀";
        themeToggle.setAttribute("aria-label", "Switch to light mode");
        themeToggle.setAttribute("title", "Switch to light mode");
    } else {
        themeIcon.textContent = "☾";
        themeToggle.setAttribute("aria-label", "Switch to dark mode");
        themeToggle.setAttribute("title", "Switch to dark mode");
    }
}