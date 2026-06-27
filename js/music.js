const musicBtn = document.getElementById("musicBtn");
const bgMusic = document.getElementById("bgMusic");

if (musicBtn) {

    musicBtn.addEventListener("click", () => {

        if (bgMusic.paused) {

            bgMusic.play();
            musicBtn.innerHTML =
                '<i class="fa-solid fa-pause"></i> Pause Music';

        } else {

            bgMusic.pause();

            musicBtn.innerHTML =
                '<i class="fa-solid fa-music"></i> Play Music';
        }
    });
}