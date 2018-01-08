function playguess() {
    var answer = parseInt(Math.random() * 100);
    count = 0

    while (true) {
        var useranswer = prompt(" введите число от 0 до 100, для выхода нажмите q ");
        if (useranswer == 'q') {
            alert("Игра окончена, участник сдался.")
            break;
        }
        useranswer = parseInt(useranswer);
        if (useranswer > answer) {
            alert("Ваш ответ великоват.");
            count++
        } else if (useranswer < answer) {
            alert("Ваш ответ маловат.");
            count++
        } else if (useranswer == answer) {
            count++
            alert("Правильно! Вы угадали c " + count + " раза.");
            break;
        } else {
            alert("Необходимо ввести число!")
            continue;
        }
    }
}