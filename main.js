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



function getComputerChoice(hand) {

    return hand[Math.floor(Math.random() * hand.length)]
}

// console.log(getComputerChoice(hand))

const playRound = (playerSelection, computerSelection) => {

    if(playerSelection === "paper" && computerSelection === "rock" ){
        msg = "You Lose! Paper beats Rock"
        // console.log("You Lose! Paper beats Rock")
    }else 
    if(playerSelection === "rock" && computerSelection === "sissors"){
        msg="You Win! Rock beats Sissors"
        // console.log("You Win! Rock beats Sissors")
    }
    else 
    if(playerSelection === "paper" && computerSelection === "sissors"){
        msg="You Loose ! Sissors beats Paper"
        // console.log("You Win! Rock beats Sissors")
    }else 
    if(playerSelection === "sissors" && computerSelection === "paper"){
        msg="You Win! Rock beats Sissors"
        // console.log("You Win! Sissors beats Paper")
    }else if(playerSelection === "rock" && computerSelection === "paper"){
        msg="You loose, paper beats rock"

    }
    else if(playerSelection === computerSelection ) {
        msg="its a draw"
    }
//  console.log("its a draw!")

return msg

}
// const playerSelection = "rock"
// const computerSelection = getComputerChoice(hand);
// console.log('the player choose: ' + playerSelection)
// console.log('the player choose: ' + computerSelection)


// playRound(playerSelection, computerSelection)


const game = () => {

    for (let i = 0; i < 5; i++) {
        console.log('round : ' + (i) )
        playerSelection = prompt("Make your choice")
        computerSelection = getComputerChoice(hand)
        playRound(playerSelection, computerSelection)
        console.log('the player choose: ' + playerSelection)
        console.log('the AI choose: ' + computerSelection)
        console.log(msg)

}
}

game()


