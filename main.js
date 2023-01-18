/*const hand = [
    'paper',
    'scissors',
    'rock'
]

let msg 
let playerScore = 0;
let computerScore = 0;
let playerSelection
let computerSelection



const getComputerChoice = (hand) => {
    return hand[Math.floor(Math.random() * hand.length)]
}

// console.log(getComputerChoice(hand))

const playRound = (playerSelection, computerSelection) => {

    if(playerSelection === "paper" && computerSelection === "rock" ){
        msg = "You Lose! Paper beats Rock"
        computerScore = computerScore + 1  
    }else 
    if(playerSelection === "rock" && computerSelection === "scissors"){
        msg="You Win! Rock beats scissors"   
        playerScore = playerScore + 1
    }
    else 
    if(playerSelection === "paper" && computerSelection === "scissors"){
        msg="You Loose ! scissors beats Paper"  
        computerScore = computerScore + 1 

    }else 
    if(playerSelection === "scissors" && computerSelection === "paper"){
        msg="You Win! Rock beats scissors"   
        playerScore = playerScore + 1 
    }else if(playerSelection === "rock" && computerSelection === "paper"){
        msg="You loose, paper beats rock"
        computerScore = computerScore + 1 

    }
    else if(playerSelection === computerSelection ) {
        msg="its a draw"
        playerScore = playerScore + 1
        computerScore = computerScore + 1 

    }


return msg
}



const game = () => {

    for (let i = 0; i < 5; i++) {
        console.log('round : ' + (i+1) )
        playerSelection = prompt("Make your choice")
        computerSelection = getComputerChoice(hand)
        playRound(playerSelection, computerSelection)
        console.log('the player choose: ' + playerSelection)
        console.log('the AI choose: ' + computerSelection)
        console.log(msg)
        document.getElementById("pplScore").innerHTML = playerScore
        document.getElementById("pcScore").innerHTML = computerScore
        // console.log('player score :' + playerScore)
        // console.log('AI score :' + computerScore)
    }
} 
*/
const hand = ["paper", "scissors", "rock"];

let playerScore = 0;
let computerScore = 0;
let round = 0;
let playerSelection;
let computerSelection;
let msg = "";

const getComputerChoice = (hand) => {
  return hand[Math.floor(Math.random() * hand.length)];
};

const audioPlayer = document.getElementById("audioPlayer");
const choices = document.querySelectorAll("#pc");
const theResult = document.getElementById("msg");
const theRound = document.getElementById("round");
const plSc = document.getElementById("plScore");
const pcSc = document.getElementById("pcScore");
const plChoice = document.getElementById("plChoice");
const pcChoice = document.getElementById("pcChoice");

const setDiv = (divId, display) => {
  let div = document.getElementById(divId);
  console.log("called toggleDiv");
  div.style.display = display;
};

const game = () => {
  // display buttons and round
  setDiv("gc", "block");
  setDiv("round", "block");
  setDiv("dc", "flex");

  // hide game start
  setDiv("bg", "none");

  // loop for 5 rounds
  //for (let i = 0; i < 5; i++) {
  //play audio game
  //audioPlayer.play();

  
  choices.forEach((choice) => {
    choice.addEventListener("click", () => {
      
      playRound(choice.textContent);
      
      theResult.innerHTML = msg;
      theRound.innerHTML = "ROUND " + round;
      document.getElementById("plScore").innerHTML = playerScore;
      document.getElementById("pcScore").innerHTML = computerScore;
            
    });
  });
};

const playRound = (playerSelection) => {
  console.log("executing playRound");
  let computerSelection = getComputerChoice(hand);
  console.log("Computer choose " + computerSelection);
  executeRound(playerSelection, computerSelection);
};

// play round
const executeRound = (playerSelection, computerSelection) => {
  /*console.log("executing executeRound");
  console.log(playerSelection);
  console.log(computerSelection);*/
  

  if (playerSelection === "paper" && computerSelection === "rock") {
    msg = "You Lose! Paper beats Rock";
    //console.log("FIRST CHECK");
    computerScore = computerScore + 1;
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    msg = "You Win! Rock beats Scissors";
    //log("SECOND CHECK");
    playerScore = playerScore + 1;
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    msg = "You Loose ! scissors beats Paper";
    //console.log("THIRD CHECK");
    computerScore = computerScore + 1;
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    msg = "You Win! Rock beats scissors";
    //console.log("FOURTH CHECK");
    playerScore = playerScore + 1;
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    msg = "You loose, paper beats rock";
    //console.log("FIFTH CHECK");
    computerScore = computerScore + 1;
  } else if (playerSelection === computerSelection) {
    msg = "its a draw";
    //console.log("LAST CHECK");
    playerScore = playerScore + 1;
    computerScore = computerScore + 1;
  }
  if(round == 5){
    msg = "GAME OVER !!!!!"
    setDiv("round", "none");
  }
  document.getElementById("plChoice").innerHTML = "Player choose: " + playerSelection;
      document.getElementById("pcChoice").innerHTML = "Computer choose: " + computerSelection
  console.log("ROUND CHECK " + round);
  console.log(msg);
  round++;
  
  
};
