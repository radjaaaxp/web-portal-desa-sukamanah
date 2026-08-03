document.addEventListener("DOMContentLoaded", function () {

    /* =========================
       NAVBAR SAAT SCROLL
    ========================= */

    const navbar = document.querySelector(".navbar");

    function handleNavbarScroll() {

        if (window.scrollY > 50) {
            navbar.classList.add("navbar-scrolled");
        } else {
            navbar.classList.remove("navbar-scrolled");
        }

    }

    window.addEventListener("scroll", handleNavbarScroll);

    handleNavbarScroll();


    /* =========================
       ANIMASI SAAT SCROLL
    ========================= */

    const animatedElements = document.querySelectorAll(
        ".animate-on-scroll"
    );

    if (animatedElements.length > 0) {

        const observer = new IntersectionObserver(
            function (entries) {

                entries.forEach(function (entry) {

                    if (entry.isIntersecting) {

                        entry.target.classList.add(
                            "show-animation"
                        );

                        observer.unobserve(
                            entry.target
                        );

                    }

                });

            },
            {
                threshold: 0.15
            }
        );


        animatedElements.forEach(function (element) {

            observer.observe(element);

        });

    }


    /* =========================
       FILTER DOKUMENTASI
    ========================= */

    const filterButtons = document.querySelectorAll(
        ".filter-btn"
    );

    const galleryCards = document.querySelectorAll(
        ".gallery-card"
    );


    filterButtons.forEach(function (button) {

        button.addEventListener(
            "click",
            function () {

                const filter =
                    button.getAttribute(
                        "data-filter"
                    );


                filterButtons.forEach(
                    function (btn) {

                        btn.classList.remove(
                            "active"
                        );

                    }
                );


                button.classList.add(
                    "active"
                );


                galleryCards.forEach(
                    function (card) {

                        const category =
                            card.getAttribute(
                                "data-category"
                            );


                        if (
                            filter === "all" ||
                            category === filter
                        ) {

                            card.style.display =
                                "block";

                        } else {

                            card.style.display =
                                "none";

                        }

                    }
                );

            }
        );

    });


    /* =========================
       BACK TO TOP
    ========================= */

    const backToTop =
        document.getElementById(
            "backToTop"
        );


    if (backToTop) {

        window.addEventListener(
            "scroll",
            function () {

                if (window.scrollY > 300) {

                    backToTop.classList.add(
                        "show"
                    );

                } else {

                    backToTop.classList.remove(
                        "show"
                    );

                }

            }
        );


        backToTop.addEventListener(
            "click",
            function () {

                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });

            }
        );

    }


    /* =========================
       FORM KONTAK
    ========================= */

    const contactForm =
        document.getElementById(
            "contactForm"
        );


    if (contactForm) {

        contactForm.addEventListener(
            "submit",
            function (event) {

                event.preventDefault();

                const nama =
                    document.getElementById(
                        "nama"
                    ).value.trim();

                if (nama === "") {

                    alert(
                        "Silakan masukkan nama terlebih dahulu."
                    );

                    return;

                }


                alert(
                    "Terima kasih, " +
                    nama +
                    ". Pesan berhasil disiapkan."
                );


                contactForm.reset();

            }
        );

    }


});