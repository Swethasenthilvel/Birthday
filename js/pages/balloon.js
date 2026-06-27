const container =
    document.getElementById("balloonContainer");

const counter =
    document.getElementById("counter");

const total = 20;

let popped = 0;

/* ==========================
   CREATE BALLOONS
========================== */

for (let i = 0; i < total; i++) {

    const balloon =
        document.createElement("img");

    balloon.src =
        "/assets/images/cover/balloon.png";

    balloon.classList.add("balloon");

    balloon.style.left =
        Math.random() * 90 + "%";

    balloon.style.top =
        Math.random() * 70 + "%";

    balloon.style.animationDelay =
        Math.random() * 3 + "s";

    balloon.style.animationDuration =
        (3 + Math.random() * 4) + "s";

    // const size =
    //     70 + Math.random() * 40;

    // balloon.style.width =
    //     size + "px";

    /* Random Hits Required */

    balloon.dataset.hp =
        Math.floor(Math.random() * 3) + 1;

    balloon.addEventListener(
        "click",
        () => {

            let hp =
                Number(balloon.dataset.hp);

            hp--;

            balloon.dataset.hp = hp;

            balloon.classList.add("hit");

            setTimeout(() => {

                balloon.classList.remove("hit");

            }, 250);

            /* POP */

            if (hp <= 0) {

    if (balloon.dataset.popped === "true") return;

    balloon.dataset.popped = "true";

    balloon.style.pointerEvents = "none";

    balloon.classList.add("pop");

    createBurst(balloon);

    setTimeout(() => {

        balloon.remove();

        popped++;

        counter.innerText =
            `${popped} / ${total}`;

        if (popped === total) {

            finishGame();

        }

    }, 500);

}

        });

    container.appendChild(balloon);

}

/* ==========================
   BALLOON BURST EFFECT
========================== */

function createBurst(balloon) {

    const rect =
        balloon.getBoundingClientRect();

    for (let i = 0; i < 10; i++) {

        const spark =
            document.createElement("span");

        spark.innerHTML =
            ["✨", "💛", "🎉", "⭐"]
            [Math.floor(Math.random() * 4)];

        spark.style.position =
            "fixed";

        spark.style.left =
            rect.left + 30 + "px";

        spark.style.top =
            rect.top + 40 + "px";

        spark.style.fontSize =
            "20px";

        spark.style.pointerEvents =
            "none";

        spark.style.zIndex =
            "999";

        document.body.appendChild(
            spark
        );

        const x =
            (Math.random() - .5) * 200;

        const y =
            (Math.random() - .5) * 200;

        spark.animate(

            [

                {
                    transform:
                        "translate(0,0)",
                    opacity: 1
                },

                {
                    transform:
                        `translate(${x}px,${y}px)`,

                    opacity: 0
                }

            ],

            {

                duration: 1000

            });

        setTimeout(() => {

            spark.remove();

        }, 1000);

    }

}

/* ==========================
   FINISH GAME
========================== */

function finishGame() {

    const celebration =
        document.getElementById(
            "celebration"
        );

    celebration.style.display =
        "flex";

    launchConfetti();

    setTimeout(() => {

        celebration.style.display =
            "none";

        startLoading();

    }, 3500);

}

/* ==========================
   CONFETTI
========================== */

function launchConfetti() {

    for (let i = 0; i < 80; i++) {

        const confetti =
            document.createElement("div");

        confetti.innerHTML =
            ["🎉", "✨", "💛", "⭐"]
            [Math.floor(Math.random() * 4)];

        confetti.style.position =
            "fixed";

        confetti.style.left =
            Math.random() * 100 + "vw";

        confetti.style.top =
            "-20px";

        confetti.style.fontSize =
            "25px";

        confetti.style.zIndex =
            "2000";

        document.body.appendChild(
            confetti
        );

        confetti.animate(

            [

                {
                    transform:
                        "translateY(0)"
                },

                {
                    transform:
                        `translateY(${window.innerHeight + 100}px)`
                }

            ],

            {

                duration:
                    3000 +
                    Math.random() * 2000

            });

        setTimeout(() => {

            confetti.remove();

        }, 5000);

    }

}

/* ==========================
   LOADING SCREEN
========================== */

function startLoading() {

    const overlay =
        document.getElementById(
            "loadingOverlay"
        );

    const progress =
        document.getElementById(
            "progress"
        );

    overlay.style.display =
        "flex";

    let value = 0;

    const interval =
        setInterval(() => {

            value += 5;

            progress.style.width =
                value + "%";

            if (value >= 100) {

                clearInterval(interval);

                setTimeout(() => {

                    window.location.href =
                        "surprise.html";

                }, 1000);

            }

        }, 150);

}