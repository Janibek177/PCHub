document.addEventListener("DOMContentLoaded", () => {
    const bootTextElement = document.querySelector(".boot-text");
    const text = "> System initialization... Choose a section:";
    let index = 0;

    function typeWriter() {
        if (index < text.length) {
            bootTextElement.innerHTML = text.substring(0, index + 1) + '<span class="cursor">_</span>';
            index++;
            setTimeout(typeWriter, 40);
        } else {
            bootTextElement.innerHTML = text + '<span class="cursor">_</span>';
        }
    }

    setTimeout(typeWriter, 300);
});