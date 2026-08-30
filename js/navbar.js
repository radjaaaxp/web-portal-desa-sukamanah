// =========================================================
// NAVBAR
// Menambahkan efek saat halaman di-scroll.
// =========================================================

document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.querySelector(".navbar");

    if (!navbar) return;

    function handleNavbarScroll() {
        navbar.classList.toggle("navbar-scrolled", window.scrollY > 50);
    }

    window.addEventListener("scroll", handleNavbarScroll, { passive: true });
    handleNavbarScroll();
});
