let choices = ['Rock', 'Paper', 'Scissors'];
let userScore = 0;
let computerScore = 0;
// Return rock,paper,scissors randomly
function getComputerChoice() {
    let pose = Math.floor(Math.random() * 3);
    return choices[pose];
}

// Play round and declare winner
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return `Its a tie!\nUser score: ${userScore}\nComputer score: ${computerScore}`;
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

function game() {
    for (i = 0; i < 5; i++) {
        let userAnswer = prompt("Choose your attack! Scissors, Paper or Rock");
        let allLower = userAnswer[0].toUpperCase() + userAnswer.slice(1).toLowerCase();
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
