document.addEventListener("DOMContentLoaded", function () {

    const detailButtons = document.querySelectorAll(".detail-btn");

    const modalTitle = document.getElementById("detailModalLabel");
    const modalCategory = document.getElementById("detailModalCategory");
    const modalImage = document.getElementById("detailModalImage");

    const modalLocation = document.getElementById("detailModalLocation");
    const modalParticipants = document.getElementById("detailModalParticipants");
    const modalOrganizer = document.getElementById("detailModalOrganizer");
    const modalDescription = document.getElementById("detailModalDescription");


    detailButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            /*
             * Mengambil data dari tombol
             * yang sedang diklik.
             */

            const title = this.dataset.title;
            const category = this.dataset.category;
            const image = this.dataset.image;

            const location = this.dataset.location;
            const participants = this.dataset.participants;
            const organizer = this.dataset.organizer;
            const description = this.dataset.description;


            /*
             * Memasukkan data ke modal
             */

            modalTitle.textContent = title;

            modalCategory.textContent = category;

            modalImage.src = image;
            modalImage.alt = title;

            modalLocation.textContent = location;

            modalParticipants.textContent = participants;

            modalOrganizer.textContent = organizer;

            modalDescription.textContent = description;

        });

    });

});