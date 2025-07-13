document.addEventListener("DOMContentLoaded", () => {
    const spotlight = document.getElementById("spotlight");

    document.addEventListener("mousemove", (e) => {
        const offset = 280; // needs to be double of height / width to ensure its centered
        spotlight.style.transform = `translate(${e.clientX - offset}px, ${e.clientY - offset}px)`;
    });
});