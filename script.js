
// Initialize AOS (Animate on Scroll)
AOS.init({
    duration: 1000,
    once: true,
});

// Initialize Typed.js
var typed = new Typed(".typed-text", {
    strings: [
        "Translating business needs into actionable solutions",
        "Bridging business and technology",
        "Creating value through analysis",
        "Turning data into decisions",
        "Empowering business with insights",
        "Driving growth through requirements",
        "Shaping ideas into deliverables",
    ],
    typeSpeed: 50,
    backSpeed: 25,
    loop: true,
});

// Activate scrollspy to highlight nav items on scroll
const mainNav = document.body.querySelector("#mainNav");
if (mainNav) {
    new bootstrap.ScrollSpy(document.body, {
        target: "#mainNav",
        offset: 80,
    });
}
