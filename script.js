let choices = ['Rock', 'Paper', 'Scissors'];
let userScore = 0;
let computerScore = 0;
// Return rock,paper,scissors randomly
function getComputerChoice() {
    let pose = Math.floor(Math.random() * 3);
    return choices[pose];
}

// Create div in body
let results = document.createElement('div');
document.body.appendChild('results');

// Play round and declare winner
function playRound(e, playerSelection, computerSelection) {
    playerSelection = e.target.innerText;
    if (playerSelection === computerSelection) {
        let `Its a tie!\nUser score: ${userScore}\nComputer score: ${computerScore}`;
    }
    else if (playerSelection === "Rock" && computerSelection === "Scissors") {
        return `You win! Rock beats scissors\nUser score: ${userScore += 1}\nComputer score: ${computerScore}`;
    }
    else if (playerSelection === "Rock" && computerSelection === "Paper") {
        return `You lose! Paper beats rock\nUser score: ${userScore}\nComputer score: ${computerScore += 1}`;    
    }
    else if (playerSelection === "Scissors" && computerSelection === "Rock") {
        return `You lose! Rock beats scissors\nUser score: ${userScore}\nComputer score: ${computerScore += 1}`;
    }
    else if (playerSelection === "Scissors" && computerSelection === "Paper") {
        return `You win! Scissors beats paper"\nUser score: ${userScore += 1}\nComputer score: ${computerScore}`;
    }
    else if (playerSelection === "Paper" && computerSelection === "Scissors") {
        return `You lose! Scissors beats paper\nUser score: ${userScore}\nComputer score: ${computerScore += 1}`;
    }
    else if (playerSelection === "Paper" && computerSelection === "Rock") {
        return `You win! Paper beats rock\nUser score: ${userScore += 1}\nComputer score: ${computerScore}`;
    }
}

let buttons = document.querySelectorAll('button');
let text = buttons.forEach(choice => choice.addEventListener('click', playRound));

function game() {
    for (i = 0; i < 5; i++) {
        console.log(playRound(allLower, getComputerChoice()));
    }
    if (userScore === computerScore) {
        console.log("Tie");
     }
    else if (userScore > computerScore) {
         console.log("Congratulations, you won!");
     }
    else {
         console.log("You lost :( Try again!");
     }
}
