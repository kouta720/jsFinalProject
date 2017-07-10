var playerScore = 0;
var userChoice;
var userInput;
var ansCheck = false;
var quizApp = (function () {
    function quizApp(quizQues, choice1, choice2, choice3, correctChoice, points) {
        this.quizQues = quizQues;
        this.choice1 = choice1;
        this.choice2 = choice2;
        this.choice3 = choice3;
        this.correctChoice = correctChoice;
        this.points = points;
    }
    return quizApp;
}());
var ques1 = new quizApp('The pyramids are in what country? ', 'ROME', 'GREECE', 'EGYPT', 'EGYPT', 20);
var ques2 = new quizApp('Where do you find fish? ', 'OCEAN', 'DESERT', 'FOREST', 'OCEAN', 20);
var ques3 = new quizApp('What has 4 wheels? ', 'BIKE', 'CAR', 'BOAT', 'CAR', 20);
var ques4 = new quizApp('Which fruit is red? ', 'BANANA', 'ORANGE', 'CHERRY', 'CHERRY', 20);
var ques5 = new quizApp('What is 9 + 10? ', ' 19 ', ' 21 ', ' 15 ', '19', 20);
function myQuiz(z) {
    var x = z;
    var tempScore = 0;
    do {
        userInput = prompt(x.quizQues + '\n' + x.choice1 + '\n' + x.choice2 + '\n' + x.choice3);
        if (userInput.toUpperCase() == x.correctChoice) {
            tempScore = x.points;
            ansCheck = true;
        }
        else {
            x.points = x.points - 1;
            ansCheck = false;
            alert('Answer is incorrect. Please try again.' + 'Now worth ' + x.points + ' points');
        }
    } while (ansCheck == false);
    return x.points;
}
playerScore += myQuiz(ques1);
playerScore += myQuiz(ques2);
playerScore += myQuiz(ques3);
playerScore += myQuiz(ques4);
playerScore += myQuiz(ques5);
alert('Total points = ' + playerScore);
