console.log("hello world!");

function getComputerChoice(){

    let int = getRandomInt(3);
    switch (int)
    {
        case 0: return "Rock";
        case 1: return "Scissors";
        case 2: return "Paper";
        default:return;
    }
    
}

function getRandomInt(max) {
    return Math.floor(Math.random()*max);
}

function printComputerChoice(){
    return "I have chosen: " + getComputerChoice();
}

console.log(printComputerChoice());