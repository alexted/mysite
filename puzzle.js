var correctAnswersCount = 0

function askQuestion(textBoxId, answer) {
    var userAnswer = document.getElementById(textBoxId).value;
    if (userAnswer == answer) {
        correctAnswersCount++;
    }
}

function playPuzzle() {
    correctAnswersCount = 0;
    askQuestion("userAnswer1", "кошка")
    askQuestion("userAnswer2", "мышь")
    askQuestion("userAnswer3", "свинья")

    //alert("Количество правильных ответов - " + correctAnswersCount)
    document.getElementById("result").innerHTML =
        "Количество правильных ответов - " + correctAnswersCount;
}