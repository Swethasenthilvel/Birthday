/* ==========================
   TYPEWRITER MESSAGE
========================== */

const message =
    `You are not just my friend.

You are my bestest friend,
my brothereyyy,
and one of the most important people
in my life. 💛

Thank you for every memory,
every laugh,
every random conversation.

From the serious talks
to the most chaotic moments,
every memory became special
because you were there.

I hope this year brings you
happiness, success, good health
and endless reasons to smile.

Happy Birthday Jiii! 🎂✨`;

const birthdayMessage =
    document.getElementById(
        "birthdayMessage"
    );

let index = 0;

function typeWriter() {

    if (index < message.length) {

        birthdayMessage.innerHTML +=
            message.charAt(index);

        index++;

        setTimeout(
            typeWriter,
            35
        );

    }

}

window.addEventListener(
    "load",
    () => {

        setTimeout(
            typeWriter,
            1000
        );

    });


/* ==========================
   GIFT BOX OPEN
========================== */

const giftBox =
    document.getElementById(
        "giftBox"
    );

const giftReveal =
    document.getElementById(
        "giftReveal"
    );

giftBox.addEventListener("click", () => {

    startVaultLoading();

});

function startVaultLoading() {

    const loading =
        document.getElementById(
            "vaultLoading"
        );

    const progress =
        document.getElementById(
            "vaultProgressBar"
        );

    const text =
        document.getElementById(
            "loadingText"
        );

    loading.style.display =
        "flex";

    const messages = [

        "Loading Friendship Archive...",

        "Recovering Memories...",

        "Decrypting Chaos Collection...",

        "Verifying Best Friend Status...",

        "Access Granted 💛"

    ];

    let value = 0;
    let index = 0;

    const timer =
        setInterval(() => {

            value += 20;

            progress.style.width =
                value + "%";

            if (index < messages.length) {

                text.innerText =
                    messages[index];

                index++;

            }

            if (value >= 100) {

                clearInterval(timer);

                setTimeout(() => {

                    loading.style.display =
                        "none";

                    document
                        .getElementById(
                            "vaultModal"
                        )
                        .style.display =
                        "flex";

                }, 1000);

            }

        }, 800);

}


/* ==========================
   CONFETTI BLAST
========================== */

function launchConfetti() {

    for (let i = 0; i < 100; i++) {

        const confetti =
            document.createElement(
                "div"
            );

        confetti.innerHTML =
            ["🎉", "✨", "💛", "⭐", "🎂"]
            [
            Math.floor(
                Math.random() * 5
            )
            ];

        confetti.style.position =
            "fixed";

        confetti.style.left =
            Math.random() * 100 + "vw";

        confetti.style.top =
            "-20px";

        confetti.style.fontSize =
            (
                20 +
                Math.random() * 20
            ) + "px";

        confetti.style.zIndex =
            "9999";

        confetti.style.pointerEvents =
            "none";

        document.body.appendChild(
            confetti
        );

        confetti.animate(

            [

                {
                    transform:
                        "translateY(0) rotate(0deg)",

                    opacity: 1
                },

                {
                    transform:
                        `translateY(${window.innerHeight + 200}px)
             rotate(${Math.random() * 720}deg)`,

                    opacity: 0
                }

            ],

            {

                duration:
                    3000 +
                    Math.random() * 2000,

                easing: "ease-out"

            });

        setTimeout(() => {

            confetti.remove();

        }, 5000);

    }

}


/* ==========================
   FLOATING PARTICLES
========================== */

const particles =
    document.querySelector(
        ".particles"
    );

for (let i = 0; i < 40; i++) {

    const star =
        document.createElement(
            "span"
        );

    star.innerHTML =
        "✨";

    star.style.position =
        "absolute";

    star.style.left =
        Math.random() * 100 + "%";

    star.style.top =
        Math.random() * 100 + "%";

    star.style.fontSize =
        (
            10 +
            Math.random() * 15
        ) + "px";

    star.style.opacity =
        .3;

    star.style.animation =
        `floatParticle ${3 + Math.random() * 5
        }s infinite ease-in-out`;

    particles.appendChild(
        star
    );

}


/* ==========================
   FLOAT ANIMATION
========================== */

const style =
    document.createElement(
        "style"
    );

style.innerHTML = `

@keyframes floatParticle{

    0%{
        transform:
        translateY(0);
    }

    50%{
        transform:
        translateY(-20px);
    }

    100%{
        transform:
        translateY(0);
    }

}

`;

document.head.appendChild(
    style
);


/* ==========================
   TITLE GLOW EFFECT
========================== */

const title =
    document.querySelector(
        ".birthday-title"
    );

setInterval(() => {

    title.style.transform =
        "scale(1.03)";

    setTimeout(() => {

        title.style.transform =
            "scale(1)";

    }, 600);

}, 3000);
/* ==========================
   IMAGE & VIDEO MODAL
========================== */

const galleryItems =
document.querySelectorAll(
".gallery-track img, .gallery-track video"
);

const modal =
document.getElementById(
"imageModal"
);

const modalImage =
document.getElementById(
"modalImage"
);

const modalVideo =
document.getElementById(
"modalVideo"
);

const closeModal =
document.getElementById(
"closeModal"
);

const prevBtn =
document.getElementById(
"prevBtn"
);

const nextBtn =
document.getElementById(
"nextBtn"
);

let currentIndex = 0;

galleryItems.forEach((item,index)=>{

    item.addEventListener("click",()=>{

        currentIndex = index;

        openModal();

    });

});

function stopVideo(){

    modalVideo.pause();

    modalVideo.currentTime = 0;

}

function openModal(){

    modal.style.display = "flex";

    stopVideo();

    const item =
    galleryItems[currentIndex];

    if(item.tagName === "IMG"){

        modalImage.style.display =
        "block";

        modalVideo.style.display =
        "none";

        modalImage.src =
        item.src;

    }

    else{

    modalImage.style.display =
    "none";

    modalVideo.style.display =
    "block";

    if(item.querySelector("source")){

        modalVideo.src =
        item.querySelector("source").src;

    }
    else{

        modalVideo.src =
        item.src;

    }

    modalVideo.load();

    /* Click pannina dhaan play */

    modalVideo.onclick = () => {

        if(modalVideo.paused){

            modalVideo.play();

        }
        else{

            modalVideo.pause();

        }

    };

    /* Video mudinja aprm stop */

    modalVideo.onended = () => {

        modalVideo.pause();

        modalVideo.currentTime = 0;

    };

}

}

function showNext(){

    currentIndex++;

    if(currentIndex >= galleryItems.length){

        currentIndex = 0;

    }

    openModal();

}

function showPrev(){

    currentIndex--;

    if(currentIndex < 0){

        currentIndex =
        galleryItems.length - 1;

    }

    openModal();

}

nextBtn.addEventListener(
"click",
showNext
);

prevBtn.addEventListener(
"click",
showPrev
);

closeModal.addEventListener(
"click",
()=>{

    stopVideo();

    modal.style.display =
    "none";

});

let startX = 0;

modal.addEventListener(
"touchstart",
e=>{

    startX =
    e.touches[0].clientX;

});

modal.addEventListener(
"touchend",
e=>{

    let endX =
    e.changedTouches[0].clientX;

    let diff =
    startX - endX;

    if(diff > 50){

        showNext();

    }

    else if(diff < -50){

        showPrev();

    }

});
/* ==========================
   QUIZ DATA
========================== */

const questions = [

    {
        question:
            "What do I call you most often?",

        answers: [
            "Erumai",
            "Panni",
            "Jiii"
        ],

        correct: 2
    },

    {
        question:
            "What chocolate did I ask for the most?",

        answers: [
            "Ferrero Rocher",
            "KitKat",
            "5 Star"
        ],

        correct: 1
    },

    {
        question:
            "What game came before this?",

        answers: [
            "Balloon",
            "Puzzle",
            "Quiz"
        ],

        correct: 0
    },

    {
        question:
            "What colour theme is this website?",

        answers: [
            "Black & Gold",
            "Blue & White",
            "Red & Black"
        ],

        correct: 0
    },

    {
        question:
            "This website is made of?",

        answers: [
            "Photos",
            "Videos",
            "Memories"
        ],

        correct: 2
    }

];

let currentQuestion = 0;
let progress = 0;

const startQuizBtn =
    document.getElementById(
        "startQuiz"
    );

const quizContainer =
    document.getElementById(
        "quizContainer"
    );

const questionText =
    document.getElementById(
        "questionText"
    );

const answerButtons =
    document.getElementById(
        "answerButtons"
    );

const vaultPercent =
    document.getElementById(
        "vaultPercent"
    );

/* ==========================
   START QUIZ
========================== */

startQuizBtn.addEventListener(
    "click",
    () => {

        startQuizBtn.style.display =
            "none";

        quizContainer.style.display =
            "block";

        showQuestion();

    });
function showQuestion() {

    const q =
        questions[currentQuestion];

    questionText.innerText =
        q.question;

    answerButtons.innerHTML =
        "";

    q.answers.forEach(
        (answer, index) => {

            const btn =
                document.createElement(
                    "button"
                );

            btn.classList.add(
                "answer-btn"
            );

            btn.innerText =
                answer;

            btn.addEventListener(
                "click",
                () => {

                    checkAnswer(index);

                });

            answerButtons.appendChild(
                btn
            );

        });

}

function checkAnswer(index) {

    const q =
        questions[currentQuestion];

    if (index === q.correct) {

        progress += 20;

        vaultPercent.innerText =
            progress + "%";
        document.querySelector(
            ".royal-door"
        ).style.filter =

            `drop-shadow(
0 0 ${progress / 2}px gold
)`;

        document
            .querySelector(
                ".royal-door"
            )
            .style.boxShadow =

            `0 0 ${progress}px rgba(255,215,0,.5)`;

        const vaultCenter =
            document.querySelector(
                ".vault-center"
            );

        if (vaultCenter) {

            vaultCenter.style.transform =
                `rotate(${progress * 5}deg)`;

        }

        currentQuestion++;

        if (
            currentQuestion <
            questions.length
        ) {

            showQuestion();

        }

        else {

            unlockVault();

        }

    }

    else {

        alert(
            "❌ Wrong Answer! Try Again"
        );

    }

}
function unlockVault() {

    const vault =
        document.querySelector(
            ".vault-container"
        );

    /* Open Doors */

    document
        .querySelector(".left-door")
        .classList.add("open");

    document
        .querySelector(".right-door")
        .classList.add("open");

    /* Flash Effect */

    document.body.classList.add(
        "flash"
    );

    setTimeout(() => {

        document.body.classList.remove(
            "flash"
        );

    }, 300);

    /* ACCESS GRANTED */

    setTimeout(() => {

        vault.innerHTML = `

            <div class="access-screen">

                <h1 class="granted-text">

                    ✨ ACCESS GRANTED ✨

                </h1>

            </div>

        `;

    }, 2000);

    /* BONUS IMAGE */

    setTimeout(() => {

        vault.innerHTML = `

            <div class="bonus-screen">

                <h2>
                    🎉 Secret Memory Unlocked
                </h2>

                <img
                src="/assets/images/surprise/Bonus 1.jpeg"
                class="bonus-image">

                <p>
                    Some memories deserve a secret vault. 💛
                </p>

            </div>

        `;

    }, 5000);

}

const butterflyContainer =
    document.querySelector(
        ".butterfly-container"
    );

if(butterflyContainer){

    for(let i = 0; i < 15; i++){

        const butterfly =
        document.createElement("img");

        butterfly.src =
        "/assets/images/timeline/b.png";

        butterfly.classList.add(
        "butterfly"
        );

        butterfly.style.top =
        Math.random()*90 + "%";

        butterfly.style.left =
        Math.random()*90 + "%";

        butterfly.style.animationDuration =
        (8 + Math.random()*8) + "s";

        butterfly.style.animationDelay =
        Math.random()*5 + "s";

        butterflyContainer.appendChild(
        butterfly
        );

    }

}