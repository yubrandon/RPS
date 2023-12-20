var playerScore = 0;
var computerScore = 0;

/* Returns a random integer from the range of 0 to max */
function getRandomInt(max) {
    return Math.floor(Math.random()*max);
}

/* 
    Uses getRandomInt to pick between the 3 options for RPS
    Calls intToSelction to convert number to corresponding option
    Console prints out computer's choice
*/
function getComputerSelection(){
    let x = getRandomInt(3);
    console.log("Computer has chosen: " + intToSelection(x));
    return x;
}


/* Converts a number to a corresponding RPS option */
function intToSelection(int) {
    switch (int)
    {
        case 0: return "Rock";
        case 1: return "Scissors";
        case 2: return "Paper";
        default:return;
    }
}


/*
    Prompt user to enter a choice
    Return a corresponding integer based on entry
*/
function getPlayerSelection() {
    var option = prompt("Enter your choice: Rock, Paper, Scissors");
    
    var lower = option.toLowerCase();
    while (lower != "rock" && lower != "paper" && lower != "scissors")
    {
        option = prompt("Enter your choice: Rock, Paper, Scissors\nEnter a valid option.");
        lower = option.toLowerCase();
    }
    /* Print out the player's selection */
    printPlayerSelection(lower);

    switch(lower) 
    {
        case "rock": return 0;
        case "scissors": return 1;
        case "paper": return 2;
        default: return undefined;
    }
}

function printPlayerSelection(string) {
    var first = string.charAt(0);
    first = first.toUpperCase();

    console.log("You have chosen: " + first + string.slice(1));
}

function compareSelection(player,computer) {
    if(player == computer) return "Computer has chosen: " + intToSelection(computer) + "\nThe match is a draw.";
    else if((player == 0 && computer == 2) || (player == 1 && computer == 0) || (player == 2 && computer == 1)) 
    {
        computerScore++;
        return "Computer has chosen: " + intToSelection(computer) + "\nThe computer has won.";
    }
    else if((player == 2 && computer == 0) || (player == 0 && computer == 1) || (player == 1 && computer == 2))
    {
        playerScore++;
        return "Computer has chosen: " + intToSelection(computer) + "\nCongratulations! You have won.";
    }
    else return "Invalid selection made.";
}

function printResult(){
    return compareSelection(getPlayerSelection(),getComputerSelection());
}

function playRound() {
    console.log(printResult());
}

function printScore() {
    console.log("The score is: " + playerScore + "-" + computerScore);
}

function game() {
    do {
        playRound();
        printScore();
    }
    while(playAgain());

}

function playAgain() {
    var bool = prompt("Would you like to play again? (Enter yes or no)");
    var lower = bool.toLowerCase();

    while (lower != "yes" && lower != "no")
    {
        bool = prompt("Would you like to play again? (Enter yes or no)");
        lower = bool.toLowerCase();
    }
}

function updateScore() {
    const score = document.querySelector('.score');
    score.textContent = "Score: " + playerScore + " - " + computerScore;
}

updateScore();

function displayRes(str) {
    const div = document.querySelector('.result');

    if(div.hasChildNodes()){
        let del = document.querySelector('.print');
        //console.log(del);
        var temp = div.removeChild(del);
    }
    let result = document.createElement('p');
    result.classList.add("print");
    result.innerText = str;
    div.appendChild(result);
    console.log(playerScore);
    
    updateScore();
}

const rock = document.querySelector('.rock');
rock.addEventListener('click', function(e) {
    //console.log(e);
    //console.log(compareSelection(0,getComputerSelection()));
    displayRes(compareSelection(0,getComputerSelection()));
});

const paper = document.querySelector('.paper');
paper.addEventListener('click', function(e) {
    //console.log(e);
    //console.log(compareSelection(1,getComputerSelection()));
    displayRes(compareSelection(1,getComputerSelection()));
});

const scissors = document.querySelector('.scissors');
scissors.addEventListener('click', function(e) {
    //console.log(e);
    //console.log(compareSelection(2,getComputerSelection()));
    displayRes(compareSelection(2,getComputerSelection()));
});