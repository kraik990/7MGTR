const messageInput = document.querySelector("textarea");
const maxLength = 200;
const charCounter = document.createElement("div");

charCounter.textContent = `0/${maxLength} tähemärki`;
charCounter.style.fontSize = "0.9rem";
charCounter.style.color = "gray";
messageInput.parentNode.appendChild(charCounter);

messageInput.addEventListener("input", () => {
    const currentLength = messageInput.value.length;
    charCounter.textContent = `${currentLength}/${maxLength} tähemärki`;

    if (currentLength > maxLength) {
        charCounter.style.color = "red";
    } else {
        charCounter.style.color = "gray";
    }
});