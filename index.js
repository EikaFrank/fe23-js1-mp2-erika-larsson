//Box for player to whrite name
const gameForm = document.getElementById('gameForm')

function startBtn() {
    let userInput = document.querySelector("#userInput");
    const message = document.querySelector("#message");

    message.innerHTML = `<b>Hello ${userInput.value}, best of 3 wins. Let's game!`;
};

gameForm.addEventListener('submit', function (event) {
    event.preventDefault();
    startBtn();
});


// The game itself 

let userScore = 0;
let compScore = 0;
const userScore_span = document.getElementById("userScore");
const compScore_span = document.getElementById("compScore");
const result_div_p = document.querySelector(".result >p")
const rock_div = document.getElementById("R");
const paper_div = document.getElementById("P");
const scissors_div = document.getElementById("S");


rock_div.addEventListener('click', () => game("R"));

paper_div.addEventListener('click', () => game("P"));

scissors_div.addEventListener('click', () => game("S"));


//Game generator
function getCompSelection() {
    const selections = ['R', 'P', 'S'];
    const randomNum = Math.floor(Math.random() * 3);
    return selections[randomNum];
}

function convertToWord(letter) {
    if (letter === "R") return "Rock";
    if (letter === "P") return "Paper";
    if (letter === "S") return "Scissors";
}

function win(userSelection, compSelection) {
    userScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    result_div_p.innerHTML = `${convertToWord(userSelection)} beats ${convertToWord(compSelection)}. You win.`;
}

function lose(userSelection, compSelection) {
    compScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    result_div_p.innerHTML = `${convertToWord(userSelection)} lose to ${convertToWord(compSelection)}. You lost.`;
}

function draw(userSelection, compSelection) {
    result_div_p.innerHTML = `${convertToWord(userSelection)} equals ${convertToWord(compSelection)}. It's a draw.`;
}

function game(userSelection) {
    const compSelection = getCompSelection();
    switch (userSelection + compSelection) {
        case "R" + "S":
        case "P" + "R":
        case "S" + "P":
            win(userSelection, compSelection);
            break;

        case "R" + "P":
        case "P" + "S":
        case "S" + "R":
            lose(userSelection, compSelection);
            break;

        case "R" + "R":
        case "P" + "P":
        case "S" + "S":
            draw(userSelection, compSelection);
            break;
    }


    //Best of 3 wins

    const x = 3;

    if (x === userScore) {
        result_div_p.innerHTML = `${convertToWord(userSelection)} beats ${convertToWord(compSelection)}. <b>Congratulations, you won! 🥇`;
        resetGame();
    }
    else if (x === compScore) {
        result_div_p.innerHTML = `${convertToWord(userSelection)} lose to ${convertToWord(compSelection)}. <b>You just lost 🥈`;
        resetGame();
    }

    while (userScore, compScore > 3) {
        resetGame();
    }

}

function resetGame() {
    userScore = 0;
    compScore = 0;
}



