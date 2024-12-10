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

document.addEventListener("DOMContentLoaded", function() {
    const snowflakesContainer = document.querySelector('.snowflakes');
    const numberOfSnowflakes = 100; // You can change this number to get more snowflakes
    for (let i = 0; i < numberOfSnowflakes; i++) {
        const snowflake = document.createElement('div');
        snowflake.classList.add('snowflake');
        snowflake.innerText = "❆"; // You can change this to a different snowflake character if you like
        snowflakesContainer.appendChild(snowflake);

        // Randomize position and animation delay
        snowflake.style.left = `${Math.random() * 100}vw`;
        snowflake.style.animationDelay = `${Math.random() * 10}s`;
        snowflake.style.animationDuration = `${5 + Math.random() * 10}s`; // Snowflakes will take different durations
    }
});
