function startTypewriter(elementId, text, speed = 70) {

    const element = document.getElementById(elementId);

    let index = 0;

    function type() {

        if (index < text.length) {

            element.innerHTML += text.charAt(index);

            index++;

            setTimeout(type, speed);
        }
    }

    type();
}