// script.js
document.addEventListener("DOMContentLoaded", () => {
    // Animate elements after load
    const elementsToFade = document.querySelectorAll(".fade-in");
    elementsToFade.forEach((el, index) => {
        el.style.animationDelay = `${index * 0.5}s`;
    });

    // Theme toggle functionality
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
});


// Select the snowflakes container
const snowContainer = document.querySelector('.snowflakes');

// Function to create a snowflake
function createSnowflake() {
    const snowflake = document.createElement('div');
    snowflake.className = 'snowflake';
    snowflake.textContent = '❤️'; // Change to other characters like ❄, ✲, ✻ for variety
    snowflake.style.left = `${Math.random() * 100}vw`; // Random horizontal position
    snowflake.style.animationDelay = `${Math.random() * 5}s`; // Staggered start
    snowflake.style.fontSize = `${Math.random() * 10 + 10}px`; // Random size
    snowContainer.appendChild(snowflake);

    // Remove the snowflake after its animation ends
    setTimeout(() => snowflake.remove(), 10000); // Match longest animation duration
}

// Create snowflakes continuously
setInterval(createSnowflake, 300); // Adjust interval for denser or lighter snow

