function checkAnswer() {
    let correctAnswer = "4";  // Correct answer is 4
    
    // Retrieve the checked radio button
    let userAnswer = document.querySelector('input[name="quiz"]:checked')?.value;
    
    // Select the feedback element
    let feedback = document.getElementById("feedback");

    // Compare userAnswer with correctAnswer
    if (userAnswer === correctAnswer) {
        feedback.textContent = "Correct! Well done.";  // User is correct
    } else {
        feedback.textContent = "That's incorrect. Try again.";  // User is incorrect
    }
}

// Add event listener to the submit button
document.getElementById("submit-answer").addEventListener("click", checkAnswer);
