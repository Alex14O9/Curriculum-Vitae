// =========================================
// MOBILE NAVIGATION
// =========================================

function toggleMenu() {

    const navLinks = document.querySelector(".nav-links");

    navLinks.classList.toggle("active");

}


// =========================================
// CLOSE MOBILE MENU AFTER CLICKING A LINK
// =========================================

const navigationLinks = document.querySelectorAll(".nav-links a");

navigationLinks.forEach(function(link) {

    link.addEventListener("click", function() {

        document
            .querySelector(".nav-links")
            .classList
            .remove("active");

    });

});


// =========================================
// FORM SUBMISSION MESSAGE
// =========================================

const form = document.querySelector("form");

form.addEventListener("submit", function() {

    const button = document.querySelector(".send-button");

    button.innerHTML = "Sending...";

    button.disabled = true;

});
/* =========================================
   MOVING DASHBOARD BACKGROUND
========================================= */

const hero = document.querySelector(".hero");

hero.addEventListener("mousemove", function(event) {

    const x = event.clientX / window.innerWidth;
    const y = event.clientY / window.innerHeight;

    const moveX = (x - 0.5) * 30;
    const moveY = (y - 0.5) * 30;

    hero.style.setProperty(
        "--mouse-x",
        `${moveX}px`
    );

    hero.style.setProperty(
        "--mouse-y",
        `${moveY}px`
    );

    hero.style.setProperty(
        "--mouse-transform",
        `translate(${moveX}px, ${moveY}px)`
    );

});
