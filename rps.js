console.log("hello world!");

function getRandomInt(max) {
    return Math.floor(Math.random()*max);
}

function getComputerSelection(){
    let x = getRandomInt(3);
    console.log("Computer has chosen: " + intToSelection(x));
    return x;
}

function intToSelection(int) {
    switch (int)
    {
        case 0: return "Rock";
        case 1: return "Scissors";
        case 2: return "Paper";
        default:return;
    }
}

function getPlayerSelection() {
    let option = prompt("Enter your choice: Rock, Paper, Scissors");
    let lower = option.toLowerCase();
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
    if(player == computer) return "The match is a draw.";
    else if((player == 0 && computer == 2) || (player == 1 && computer == 0) || (player == 2 && computer == 1)) return "The computer has won.";
    else return "You have won!";
}

function printResult(){
    return compareSelection(getPlayerSelection(),getComputerSelection());
}

console.log
console.log(printResult());