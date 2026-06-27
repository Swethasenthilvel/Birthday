
/* ===========================
   SCROLL REVEAL ANIMATION
=========================== */

const reveals =
    document.querySelectorAll(".reveal");

function revealOnScroll() {

    reveals.forEach(card => {

        const cardTop =
            card.getBoundingClientRect().top;

        const trigger =
            window.innerHeight - 100;

        if (cardTop < trigger) {

            card.classList.add("active");

        }

    });

}

window.addEventListener(
    "scroll",
    revealOnScroll
);

window.addEventListener(
    "load",
    revealOnScroll
);


/* ===========================
   FLOATING GOLD PARTICLES
=========================== */

const particlesContainer =
    document.querySelector(".particles");

for (let i = 0; i < 25; i++) {

    const particle =
        document.createElement("span");

    particle.classList.add(
        "gold-particle"
    );

    particle.style.left =
        Math.random() * 100 + "%";

    particle.style.top =
        Math.random() * 100 + "%";

    particle.style.animationDelay =
        Math.random() * 8 + "s";

    particle.style.animationDuration =
        (5 + Math.random() * 8) + "s";

    particlesContainer.appendChild(
        particle
    );
}


/* ===========================
   CARD STAGGER EFFECT
=========================== */

window.addEventListener(
    "load",
    () => {

        const cards =
            document.querySelectorAll(
                ".funny-card"
            );

        cards.forEach(
            (card, index) => {

                setTimeout(() => {

                    card.classList.add(
                        "active"
                    );

                }, index * 150);

            });

    });


/* ===========================
   NEXT BUTTON LOADING
=========================== */

const nextBtn =
    document.querySelector(".next-btn");

nextBtn?.addEventListener("click", (e) => {

    e.preventDefault();

    const overlay =
        document.getElementById("countdownOverlay");

    const number =
        document.getElementById("countdownNumber");

    const text =
        document.getElementById("countdownText");

    overlay.classList.add("show");

    let count = 5;

    const timer = setInterval(() => {

        count--;

        if (count > 0) {

            number.innerText = count;

        }

        else {

            clearInterval(timer);

            number.innerText = "🎁";

            text.innerText =
                "Ready? 💛";

            setTimeout(() => {

                window.location.href =
                    "letter.html";

            }, 2000);

        }

    }, 1000);

});


/* ===========================
   TITLE PARALLAX GLOW
=========================== */

document.addEventListener(
    "mousemove",
    (e) => {

        const title =
            document.querySelector(
                ".gold-title"
            );

        if (!title) return;

        const x =
            (window.innerWidth / 2 - e.clientX)
            / 40;

        const y =
            (window.innerHeight / 2 - e.clientY)
            / 40;

        title.style.transform =
            `translate(${x}px, ${y}px)`;

    });

/* ===========================
   GOLD SCRATCH CARDS
=========================== */

const scratchCards =
    document.querySelectorAll(".scratch-card");

const sounds = [

    "/assets/music/funny1.mp3",
    "/assets/music/funny2.mp3",
    "/assets/music/funny3.mp3",
    "/assets/music/funny4.mp3",
    "/assets/music/funny5.mp3",
    "/assets/music/funny6.mp3",
    "/assets/music/funny7.mp3",
    "/assets/music/funny8.mp3"

];

scratchCards.forEach((canvas, index) => {

    const ctx =
        canvas.getContext(
            "2d",
            {
                willReadFrequently: true
            }
        );

    const audio =
        new Audio(sounds[index]);

    audio.preload = "auto";

    let audioUnlocked = false;

    function unlockAudio() {

        if (audioUnlocked) return;

        audio.play()
            .then(() => {

                audio.pause();

                audio.currentTime = 0;

                audioUnlocked = true;

            })
            .catch(() => { });

    }

    function setupCanvas() {

        canvas.width =
            canvas.offsetWidth;

        canvas.height =
            canvas.offsetHeight;

        const gradient =
            ctx.createLinearGradient(
                0,
                0,
                canvas.width,
                canvas.height
            );

        gradient.addColorStop(0, "#FFD700");
        gradient.addColorStop(.3, "#FFF4B0");
        gradient.addColorStop(.6, "#D4AF37");
        gradient.addColorStop(1, "#FFD700");

        ctx.fillStyle =
            gradient;

        ctx.fillRect(
            0,
            0,
            canvas.width,
            canvas.height
        );

        const glitterCount =

            window.innerWidth < 768

                ?

                220

                :

                500;

        for (let i = 0; i < glitterCount; i++) {

            ctx.beginPath();

            ctx.fillStyle =

                Math.random() > .5

                    ?

                    "rgba(255,255,255,.9)"

                    :

                    "rgba(255,215,0,.9)";

            ctx.arc(

                Math.random() * canvas.width,

                Math.random() * canvas.height,

                Math.random() * 2.5,

                0,

                Math.PI * 2

            );

            ctx.fill();

        }

        ctx.fillStyle =
            "#07111f";

        ctx.font =
            "bold 26px Poppins";

        ctx.textAlign =
            "center";

        ctx.fillText(

            "✨ SCRATCH ✨",

            canvas.width / 2,

            canvas.height / 2

        );

    }

    setupCanvas();

    let scratching = false;

    let soundPlayed = false;

    let revealed = false;

    let scratchCount = 0;

    let lastX = 0;

    let lastY = 0;

    function checkScratchPercent() {

        const pixels =
            ctx.getImageData(
                0,
                0,
                canvas.width,
                canvas.height
            ).data;

        let transparent = 0;

        for (
            let i = 3;
            i < pixels.length;
            i += 4
        ) {

            if (
                pixels[i] === 0
            ) {

                transparent++;

            }

        }

        const percent =

            (transparent /

                (pixels.length / 4))

            * 100;

        if (
            percent >= 65 &&
            !revealed
        ) {

            revealed = true;

            if (!soundPlayed) {

                audio.currentTime = 0;

                audio.play()
                    .catch(err =>
                        console.log(err)
                    );

                soundPlayed = true;

            }

            canvas.style.transition =
                ".6s ease";

            canvas.style.opacity =
                "0";

            setTimeout(() => {

                canvas.remove();

            }, 600);

        }

    }

    function scratch(x, y) {

        ctx.globalCompositeOperation =
            "destination-out";

        ctx.lineCap =
            "round";

        ctx.lineJoin =
            "round";

        const radius =

            window.innerWidth < 768

                ?

                42

                :

                30;

        ctx.lineWidth =
            radius * 2;

        ctx.beginPath();

        ctx.moveTo(
            lastX,
            lastY
        );

        ctx.lineTo(
            x,
            y
        );

        ctx.stroke();

        lastX = x;

        lastY = y;

        scratchCount++;

        if (
            scratchCount % 12 === 0
        ) {

            checkScratchPercent();

        }

    }

    /* DESKTOP */

    canvas.addEventListener(
        "mousedown",
        e => {

            unlockAudio();

            scratching = true;

            const rect =
                canvas.getBoundingClientRect();

            lastX =
                e.clientX -
                rect.left;

            lastY =
                e.clientY -
                rect.top;

        }
    );

    canvas.addEventListener(
        "mouseup",
        () => {

            scratching = false;

        }
    );

    canvas.addEventListener(
        "mouseleave",
        () => {

            scratching = false;

        }
    );

    canvas.addEventListener(
        "mousemove",
        e => {

            if (!scratching)
                return;

            const rect =
                canvas.getBoundingClientRect();

            scratch(

                e.clientX -
                rect.left,

                e.clientY -
                rect.top

            );

        }
    );

    /* MOBILE */

    canvas.addEventListener(
        "touchmove",
        e => {

            if (!scratching)
                return;

            e.preventDefault();

            const rect =
                canvas.getBoundingClientRect();

            scratch(

                e.touches[0].clientX -
                rect.left,

                e.touches[0].clientY -
                rect.top

            );

        },
        { passive: false }
    );

    canvas.addEventListener(
        "touchend",
        () => {

            scratching = false;

        }
    );

    canvas.addEventListener(
        "touchcancel",
        () => {

            scratching = false;

        }
    );

    canvas.addEventListener(
        "touchmove",
        e => {

            e.preventDefault();

            const rect =
                canvas.getBoundingClientRect();

            scratch(

                e.touches[0].clientX -
                rect.left,

                e.touches[0].clientY -
                rect.top

            );

        },
        { passive: false }
    );

});