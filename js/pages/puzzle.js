const pieces = document.querySelectorAll(".piece");
const success = document.getElementById("successMessage");

let dragged = null;

/* Initial Order */

pieces.forEach((piece, index) => {

    piece.style.order = index;

});

/* Shuffle */

const orders = [0,1,2,3,4,5,6,7,8];

orders.sort(() => Math.random() - 0.5);

pieces.forEach((piece, index) => {

    piece.style.order = orders[index];

});

/* Drag & Drop */

pieces.forEach(piece => {

    piece.addEventListener("dragstart", () => {

        dragged = piece;

        piece.classList.add("dragging");

    });

    piece.addEventListener("dragend", () => {

        piece.classList.remove("dragging");

    });

    piece.addEventListener("dragover", (e) => {

        e.preventDefault();

    });

    piece.addEventListener("drop", () => {

        if (!dragged || dragged === piece) return;

        let temp = piece.style.order;

        piece.style.order = dragged.style.order;

        dragged.style.order = temp;

        checkPuzzle();

    });

});

/* ==========================
   MOBILE TOUCH SUPPORT
========================== */


let activePiece = null;

pieces.forEach(piece => {

    piece.addEventListener("touchstart", () => {

        activePiece = piece;

        piece.classList.add("dragging");

    });

    piece.addEventListener("touchend", (e) => {

        piece.classList.remove("dragging");

        const touch =
        e.changedTouches[0];

        const target =
        document.elementFromPoint(
            touch.clientX,
            touch.clientY
        );

        const targetPiece =
        target?.closest(".piece");

        if(
            activePiece &&
            targetPiece &&
            activePiece !== targetPiece
        ){

            let temp =
            activePiece.style.order;

            activePiece.style.order =
            targetPiece.style.order;

            targetPiece.style.order =
            temp;

            checkPuzzle();

        }

        activePiece = null;

    });

});

/* Check Puzzle */

function checkPuzzle() {

    let correct = true;

    pieces.forEach((piece, index) => {

        if (Number(piece.style.order) !== index) {

            correct = false;

        }

    });

    if (correct) {

        success.classList.add("show");

    }

}

/* Loading Overlay */

const unlockBtn = document.getElementById("unlockBtn");

unlockBtn?.addEventListener("click", () => {
    console.log("Button Clicked");
    const overlay =
    document.getElementById("loadingOverlay");

    const progress =
    document.getElementById("loadingProgress");

    const message =
    document.getElementById("loadingMessage");

    overlay.classList.add("show");

    const messages = [

        "Decrypting Friendship Archives ❤️",
        "Loading Legendary Memories 😂",
        "Collecting Embarrassing Evidence 🤣",
        "Preparing Chaos Collection 😭",
        "Access Granted 😎"

    ];

    let value = 0;
    let index = 0;

    const interval = setInterval(() => {

        value += 20;

        progress.style.width = value + "%";

        if(index < messages.length){

            message.innerText = messages[index];

            index++;

        }

        if(value >= 100){

            clearInterval(interval);

            setTimeout(() => {

                window.location.href =
                "funny-moments.html";

            }, 1000);

        }

    }, 700);

});