document.addEventListener("DOMContentLoaded", () => {

    const revealElements =
        document.querySelectorAll(".timeline-row");

    const observer =
        new IntersectionObserver((entries) => {

            entries.forEach(entry => {

                if(entry.isIntersecting){

                    entry.target.classList.add("show");

                }

            });

        }, {
            threshold: 0.2
        });

    revealElements.forEach(item => {

        observer.observe(item);

    });

});

