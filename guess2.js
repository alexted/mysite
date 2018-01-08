function playguess2() {
    var username1 = prompt("Введите никнейм первого игрока:");
    var username2 = prompt("Введите никнейм второго игрока:");
    var username = username1
    var answer = parseInt(Math.random() * 100);
    count = 0

    while (username2 == username1) {
        username2 = prompt("Никнейм " + username1 + " уже используется, введите другое")
    }

    while (true) {
        var useranswer = prompt("Игрок " + username + " введите число от 0 до 100, для выхода нажмите q ");
        if (useranswer == 'q') {
            alert("Игрок " + username + " сдался")
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
            alert("Игрок " + username + " угадал c " + Math.ceil(count / 2) + " попыток");
            break;
        } else {
            alert("Необходимо ввести число!")
            continue;
        }

        if (username == username1) {
            username = username2
        } else {
            username = username1
        }
    }
}