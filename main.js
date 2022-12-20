const hand = [
    'paper',
    'sissors',
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
    if(playerSelection === "rock" && computerSelection === "sissors"){
        msg="You Win! Rock beats Sissors"   
        playerScore = playerScore + 1
    }
    else 
    if(playerSelection === "paper" && computerSelection === "sissors"){
        msg="You Loose ! Sissors beats Paper"  
        computerScore = computerScore + 1 

    }else 
    if(playerSelection === "sissors" && computerSelection === "paper"){
        msg="You Win! Rock beats Sissors"   
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



 game()


