// =========================================================
// DOKUMENTASI FILTER
// Filter kartu berdasarkan data-category.
// =========================================================

document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".filter-btn");
    const cards = document.querySelectorAll(".gallery-card");

    if (!buttons.length || !cards.length) return;

    buttons.forEach((button) => {
        button.addEventListener("click", function () {
            const filter = button.dataset.filter;

            buttons.forEach((item) => item.classList.remove("active"));
            button.classList.add("active");

            cards.forEach((card) => {
                const category = card.dataset.category;
                const visible = filter === "all" || category === filter;
                card.style.display = visible ? "block" : "none";
            });
        });
    });
});
