// Input
const textInput = document.getElementById("text");

// Buttons
const searchGoogle  = document.getElementById("searchGoogle");
const luckyGoogle = document.getElementById("luckyGoogle");


searchGoogle.addEventListener("click", () => {
    window.location.href = `https://www.google.com/search?q=${textInput.value}`;
});

luckyGoogle.addEventListener("click", () => {
    if (textInput.value === "" || textInput.value === " ") {
        window.location.href = `https://www.google.com/doodles`;
    } else {
        window.location.href = `https://www.google.com/search?q=${textInput.value}`
    }
});

// Event: Enter
window.addEventListener("keydown", (event) => {
    if (textInput.value != "" || textInput.value != " ") {
        if (event.key === "Enter") window.location.href = `https://www.google.com/search?q=${textInput.value}`;      
    } else { console.log(textInput.value)}
    console.log(event.key);
  },false);