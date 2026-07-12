// Define your test plates and their correct answers
const testPlates = [
    { image: "images/plate1.png", answer: "12" },
    { image: "images/plate2.png", answer: "8" },
    { image: "images/plate3.png", answer: "6" },
    { image: "images/plate4.png", answer: "none" } // For plates where colorblind users see nothing
];

let currentIndex = 0;
let score = 0;

function nextPlate() {
    const inputField = document.getElementById("user-answer");
    const userAnswer = inputField.value.trim();

    // Check if correct
    if (userAnswer.toLowerCase() === testPlates[currentIndex].answer.toLowerCase()) {
        score++;
    }

    // Clear input
    inputField.value = "";

    // Move to next plate or finish
    currentIndex++;
    if (currentIndex < testPlates.length) {
        document.getElementById("plate-image").src = testPlates[currentIndex].image;
    } else {
        showResults();
    }
}

function showResults() {
    document.getElementById("quiz-box").classList.add("hidden");
    const resultBox = document.getElementById("result-box");
    resultBox.classList.remove("hidden");
    
    document.getElementById("score-text").innerText = 
        `You scored ${score} out of ${testPlates.length}.`;
}
