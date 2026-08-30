// =========================================================
// CONTACT FORM
// Validasi sederhana form kontak.
// =========================================================

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactForm");

    if (!form) return;

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const nameField = document.getElementById("nama");
        const name = nameField ? nameField.value.trim() : "";

        if (!name) {
            alert("Silakan masukkan nama terlebih dahulu.");
            nameField?.focus();
            return;
        }

        alert(`Terima kasih, ${name}. Pesan berhasil disiapkan.`);
        form.reset();
    });
});
