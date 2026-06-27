document.addEventListener("DOMContentLoaded", () => {


startTypewriter(
    "typewriter",
    "This isn't just a birthday website... It's a collection of moments made for you."
);

const enterBtn = document.getElementById("enterBtn");
const questionModal = document.getElementById("questionModal");
const loadingScreen = document.getElementById("loadingScreen");
const loadingText = document.getElementById("loadingText");
const progressBar = document.getElementById("progressBar");

const questionContent = document.getElementById("questionContent");
const answerInput = document.getElementById("answerInput");
const submitAnswer = document.getElementById("submitAnswer");
const resultMessage = document.getElementById("resultMessage");

const cameraSound = document.getElementById("cameraSound");
const photos = document.querySelectorAll(".photo-card");

/* Camera Click */

photos.forEach(photo => {

    photo.addEventListener("click", () => {

        if (cameraSound) {

            cameraSound.currentTime = 0;

            cameraSound.play().catch(() => { });

        }

    });

});

/* Enter Button */

enterBtn.addEventListener("click", () => {

    questionModal.style.display = "flex";

    let progress = 0;

    const messages = [
        "Initializing Memory Archive...",
        "Loading Friendship Records...",
        "Verifying Birthday Person...",
        "Access Challenge Required..."
    ];

    let msgIndex = 0;

    const interval = setInterval(() => {

        progress += 25;

        progressBar.style.width = progress + "%";

        if (msgIndex < messages.length) {

            loadingText.innerText = messages[msgIndex];

            msgIndex++;

        }

        if (progress >= 100) {

            clearInterval(interval);

            setTimeout(() => {

                loadingScreen.style.display = "none";

                questionContent.style.display = "block";

            }, 500);

        }

    }, 700);

});

/* Question Answer */

submitAnswer.addEventListener("click", () => {

    const answer =
        answerInput.value.trim().toLowerCase();

    if (answer === "thanish") {

        questionContent.innerHTML = `

            <h2 style="
                color:#22c55e;
                font-size:2rem;
                font-weight:700;
            ">
                ✅ ACCESS GRANTED ❤️
            </h2>

            <p style="
                color:white;
                margin-top:15px;
            ">
                Welcome to the Memory Archive...
            </p>

        `;

        setTimeout(() => {

            window.location.href = "memories.html";

        }, 2000);

    } else {

        resultMessage.innerHTML = "Thappuu 😂";

    }

});


});
