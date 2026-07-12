// Map your images (0.png to 16.png) to their correct answers
// Change the "answer" values below to match what is actually on your images!
const testPlates = [
    { image: "Images/0.png", answer: "12" },  // Example: Plate 0 usually is a training plate (12)
    { image: "Images/1.png", answer: "8" },   // Change these to match your images
    { image: "Images/2.png", answer: "6" },
    { image: "Images/3.png", answer: "29" },
    { image: "Images/4.png", answer: "5" },
    { image: "Images/5.png", answer: "3" },
    { image: "Images/6.png", answer: "15" },
    { image: "Images/7.png", answer: "74" },
    { image: "Images/8.png", answer: "6" },
    { image: "Images/9.png", answer: "45" },
    { image: "Images/10.png", answer: "5" },
    { image: "Images/11.png", answer: "7" },
    { image: "Images/12.png", answer: "16" },
    { image: "Images/13.png", answer: "73" },
    { image: "Images/14.png", answer: "none" }, // Use "none" if the image has no number
    { image: "Images/15.png", answer: "26" },
    { image: "Images/16.png", answer: "42" }
];

let currentIndex = 0;
let score = 0;

function nextPlate() {
    const inputField = document.getElementById("user-answer");
    const userAnswer = inputField.value.trim();

    // Grade the answer (ignoring capital letters)
    if (userAnswer.toLowerCase() === testPlates[currentIndex].answer.toLowerCase()) {
        score++;
    }

    // Clear the input box for the next turn
    inputField.value = "";

    // Move to the next plate
    currentIndex++;
    
    if (currentIndex < testPlates.length) {
        // Change the image to the next one (e.g., Images/1.png)
        document.getElementById("plate-image").src = testPlates[currentIndex].image;
    } else {
        // If out of images, transition to the survey
        document.getElementById("quiz-box").classList.add("hidden");
        document.getElementById("survey-box").classList.remove("hidden");
    }
}

function submitSurvey() {
    const formData = new FormData(document.getElementById("survey-form"));
    formData.append("ishihara_score", `${score}/${testPlates.length}`);

    // Hide survey, show results
    document.getElementById("survey-box").classList.add("hidden");
    const resultBox = document.getElementById("result-box");
    resultBox.classList.remove("hidden");
    
    document.getElementById("score-text").innerText = 
        `You scored ${score} out of ${testPlates.length}. Thank you for participating!`;
}
