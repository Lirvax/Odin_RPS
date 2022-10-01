//ROCK PAPER "Scissors"

//create Array Choices(ROCK | PAPER | "Scissors")
//get computerChoice -> create random int between 0 and 2 and assign a Choice to it
//get playerChoice -> Get Input from player and convert it to a int between 0 and 2
//compare Choices:
//for 
//if computerChoice === playerChoice
//  Output DRAW
//elif (((computerChoice === rock) && (playerChoice !== PAPER)) || ((computerChoice === Paper)) && (playerChoice !== "Scissors")) || ((computerChoice === "Scissors") && (playerChoeice !== ROCK)))
//  Output LOSE
//  loseCounter += 1;
//else
//  Output WIN;
//  winCounter += 1;
//

const choices = ["Rock", "Paper", "Scissors"];
let winCounter = 0;
let loseCounter = 0;
let playerChoice = " ";
let computerChoice = " ";
 
function getComputerChoice (){
    computerChoice = choices[Math.floor(Math.random()*3)];
    console.log(computerChoice);
    document.getElementById("pcChoice").innerHTML = computerChoice;
}

function getPlayerChoice (choice){
    playerChoice = choice;
    console.log(playerChoice);
    document.getElementById("playerChoice").innerHTML = playerChoice;
    playTheGame();
}
//can outsource return in pickWinner() with bools -> to do
function pickWinner (){
    console.log("2 "+ computerChoice);
    console.log("2 "+ playerChoice);
    if (computerChoice == playerChoice){
        document.getElementById("result").innerHTML = `That's a draw! you both choosed ${playerChoice}!`;
    }
    else if (((computerChoice == "Rock") && (playerChoice != "Paper")) || ((computerChoice == "Paper") && (playerChoice != "Scissors")) || ((computerChoice == "Scissors") && (playerChoice != "Rock"))){
        document.getElementById("result").innerHTML = `You lose! ${computerChoice} beats ${playerChoice}!`;
        loseCounter++;
        document.getElementById("loseCounter").innerHTML = `Computer Score:${loseCounter}`;
    }
    else{
        document.getElementById("result").innerHTML = `You win! ${playerChoice} beats ${computerChoice}!`;
        winCounter++;
        document.getElementById("winCounter").innerHTML = `Player Score: ${winCounter}`;
    }
}
//reset function on new btn doesnt work yet -> to do
function playTheGame (){
        getComputerChoice();
        pickWinner();
        if (loseCounter == 3){
            document.getElementById("result").innerHTML = `GAME OVER! Computer won ${loseCounter} to ${winCounter}!`
            document.getElementById("playerButtons").innerHTML = `<button id="resetBtn" onclick="reset(document.getElementsByClassName("container"))">New Game</button>`
        }
        else if (winCounter == 3){
            document.getElementById("result").innerHTML = `YOU WON! You beat the computer ${winCounter} to ${loseCounter}!`
            document.getElementById("playerButtons").innerHTML = `<button id="resetBtn" onclick="reset(document.getElementsByClassName("container"))">New Game</button>`
        }
}