// =========================================================
// SCROLL REVEAL
// Animasi elemen ketika masuk viewport.
// =========================================================

document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll(".animate-on-scroll");

    if (!elements.length || !("IntersectionObserver" in window)) {
        elements.forEach((element) => element.classList.add("show-animation"));
        return;
    }

    const observer = new IntersectionObserver(
        (entries, observerInstance) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("show-animation");
                    observerInstance.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.15 }
    );

    elements.forEach((element) => observer.observe(element));
});
