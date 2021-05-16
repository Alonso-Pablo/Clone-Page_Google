// URL
const GOOGLE_URL = "https://www.google.com/"

// Input
const textInput = document.getElementById("text");

// Buttons
const searchGoogle  = document.getElementById("searchGoogle");
const luckyGoogle = document.getElementById("luckyGoogle");


searchGoogle.addEventListener("click", () => {
    window.location.href = `${GOOGLE_URL}search?q=${textInput.value}`;
});

luckyGoogle.addEventListener("click", () => {
    if (textInput.value === "" || textInput.value === " ") {
        window.location.href = `${GOOGLE_URL}doodles`;
    } else {
        window.location.href = `${GOOGLE_URL}search?q=${textInput.value}`
    }
});

// Event: Enter
window.addEventListener("keydown", (event) => {
    if (textInput.value != "" && textInput.value != " ") {
        if (event.key === "Enter") window.location.href = `${GOOGLE_URL}search?q=${textInput.value}`;      
    };
  },false);
