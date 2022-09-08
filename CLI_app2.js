var readlineSync = require("readline-sync");
var score = 0;
var questions = [{
    question: "what is best action anime ?",
    answer: "One Punch man",
}, {
    question: "Best anime of all time ?",
    answer: "One Piece",
}, {
    question: "which is best anime of recent time ?",
    answer: "Demon Slayer",
}, {
    question: "which is best genre in anime ?",
    answer: "action",
}, {
    question: "which company produce best anime in quality and story wise !?",
    answer: "tobia animation company",
}]

function welcome() {
    var username = readlineSync.question("what do i watch for fun ?");
    console.log("welcome" + username + "How much do you know this anime? ");
}

function play(question, answer) {
    var useranswer = readlineSync.question(question);
    if (useranswer == answer) {
        console.log("you are right!");
        score++;
    } else {
        console.log("you are wrong!");
    }
    console.log("current_score" + score);
}

function game() {
    for (var i = 0; i < quesitons.length; i++) {
        var c_question = questions[i];
        play(c_question.question, c_question.answer);
    }
}

function displayscore() {
    console.log("Final score! = " + score);
}
welcome();
game();
displayscore();