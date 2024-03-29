const button1Element = document.querySelector("button")
button1Element.addEventListener("click", () => {
    button1Element.classList.toggle("red");
});
const button2Element = document.querySelector("button:nth-child(2)");
button2Element.addEventListener("click", () => {
    button2Element.classList.toggle("yellow");
});
const button3Element = document.querySelector("button:nth-child(3)");
button3Element.addEventListener("click", () => {
    button3Element.classList.toggle("green");
});
const button4Element = document.querySelector("button:nth-child(4)");
button4Element.addEventListener("click", () => {
    button4Element.classList.toggle("black");
});



