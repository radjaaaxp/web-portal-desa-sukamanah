// =========================================================
// BACK TO TOP
// Menampilkan tombol kembali ke bagian atas halaman.
// =========================================================

document.addEventListener("DOMContentLoaded", function () {
    const button = document.getElementById("backToTop");

    if (!button) return;

    function updateButton() {
        button.classList.toggle("show", window.scrollY > 300);
    }

    window.addEventListener("scroll", updateButton, { passive: true });
    updateButton();

    button.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
});
