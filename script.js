// script.js
const themeToggle = document.getElementById("themeToggle");
const themeIcon = document.getElementById("themeIcon");
const body = document.body;

themeToggle.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
    if (body.classList.contains("dark-mode")) {
        themeIcon.classList.replace('bx-moon', 'bx-sun'); // Switch to sun icon
        themeIcon.title = "Switch to Light Mode";
    } else {
        themeIcon.classList.replace('bx-sun', 'bx-moon'); // Switch to moon icon
        themeIcon.title = "Switch to Dark Mode";
    }
});