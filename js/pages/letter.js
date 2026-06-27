/* ==========================
   TYPEWRITER EFFECT
========================== */

const title =
document.getElementById("letterTitle");

const text =
document.getElementById("letterText");

title.innerText =
"Happy Birthday My Brothereyyy! 🎉";

const message = `

This website isn't just a collection of photos.

It's a collection of memories,
laughs, random conversations,
and moments that made our friendship special.

You're my bestest friend and bro ever ji.
You are my comfortable soul erumai. 😂

From the serious talks
to the most random and funniest moments,
every memory has become part of our journey.

Thank you for being such a best best bestest frnd. 💛

I never leave you.
I'll be there always in your best and worst days.

Whenever life feels heavy,
just call me at any time you want.

Be happy always.
I wish you'll become the richest
and happiest person one day.

Then don't forget to buy me a chocolate. 😂

Just Ferrero Rocher or KitKat is enough. 😁

I hope this year brings you happiness,
success, good health,
and everything you've been wishing for.

Never stop being the amazing person you are.

And never lose that smile. 😄

Happy Birthday once again, Jiii! 🎂✨

`;


text.innerText = message;


/* ==========================
   SCROLL FADE IN
========================== */

const scroll =
document.querySelector(".letter-scroll");

window.addEventListener("load", () => {

    scroll.style.opacity = "0";
    scroll.style.transform =
    "translateY(50px)";

    setTimeout(() => {

        scroll.style.transition =
        "1.5s ease";

        scroll.style.opacity = "1";

        scroll.style.transform =
        "translateY(0)";

    }, 200);

});


/* ==========================
   BUTTON CLICK
========================== */

const continueBtn =
document.getElementById("continueBtn");

continueBtn.addEventListener("click", () => {

    continueBtn.innerHTML = "🦋";

    document.querySelector(".key-text")
    .innerText = "Unlocking...";

    continueBtn.style.pointerEvents =
    "none";

    setTimeout(() => {

        window.location.href =
        "balloon.html";

    }, 2000);

});