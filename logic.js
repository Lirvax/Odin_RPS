

const choices = ["rock", "paper", "scissors"];
const playerCounterField = document.getElementById("playerPoints");
const computerCounterField = document.getElementById("computerPoints");
const resultTxt = document.querySelector(".resultTxt");
let playerWon = false;
let tie = false;
let playerCounter = 0;
let computerCounter = 0;
let computerChoice = "";
let playerChoice = "";

$("#chooseRock").click(function (){playRound("rock")});
$("#choosePaper").click(function (){playRound("paper")});
$("#chooseScissors").click(function (){playRound("scissors")});
$("#nextRoundBtn").click(function (){showGame()});
$("#startGameBtn").click(function (){showGame();$(".startScreen").hide();});
$("#endOfGameBtn").click(function (){showStartScreen()});
$(document).ready(showStartScreen());

function playRound (playerChoice){
    getComputerChoice();
    findWinner(playerChoice, computerChoice);
    refreshCounterFields();
    showBetweenRoundScreen();
}

function findWinner(playerC, computerChoice){
    playerChoice += playerC;    
    if (computerChoice == playerChoice){
        tie = true;
        playerWon = false;
        resultTxt.textContent = "It's a tie!";
    }
    else if (((computerChoice == "rock") && (playerChoice != "paper")) || ((computerChoice == "paper") && (playerChoice != "scissors")) || ((computerChoice == "scissors") && (playerChoice != "rock"))){
        playerWon = false;
        tie = false;
        computerCounter++;
        resultTxt.textContent = `You lost! ${computerChoice} beats ${playerChoice}!`;
    }
    else {
        playerWon = true;
        tie= false;
        playerCounter++;
        resultTxt.textContent = `You won! ${playerChoice} beats ${computerChoice}!`;
    }
}
    
function showGame(){
    refreshCounterFields();
    playerChoice = "";
    computerChoice = "";
    $(".points").show();
    $(".betweenRounds").hide();
    if (playerCounter == 5 || computerCounter == 5){
        manageEndOfGameScreen();
        $(".endOfGame").show();
    }
    else{
        $(".game").show();
}}

function getComputerChoice(){
    computerChoice += choices[Math.floor(Math.random()*3)];
}

function refreshCounterFields(){
    playerCounterField.innerHTML = playerCounter;
    computerCounterField.innerHTML = computerCounter;
}

function showBetweenRoundScreen(){
    $(".game").hide();
    $(".betweenRounds").show();
    $("#playerFightImg").attr("src", `${playerChoice}.svg`);
    $("#computerFightImg").attr("src",`${computerChoice}.svg`);
}

function resetGame(){
    playerCounter = 0;
    computerCounter = 0;
}

function manageEndOfGameScreen(){
    if (playerCounter == 5){
        $('#endOfGameBtn').text("They stand no chance!");
        $(".endOfGameTxt").text("You won! Congratulations!");
    }
    else{
        $('#endOfGameBtn').text("Have another try!"); 
        $(".endOfGameTxt").text("You lost! Try again?");
    }
}

function showStartScreen(){
    resetGame();
    $(".game").hide();
    $(".betweenRounds").hide();
    $(".points").hide();
    $(".endOfGame").hide();
    $(".startScreen").show();
}

