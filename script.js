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
document.body.appendChild(results);

// Play round and declare winner
function playRound(e, playerSelection, computerSelection) {
    playerSelection = e.target.textContent;
    computerSelection = getComputerChoice();
    let paragraph = document.createElement('p');
    if (playerSelection === computerSelection) {
        paragraph.textContent = `Its a tie!\nUser score: ${userScore}\nComputer score: ${computerScore}`;
    }
    else if (playerSelection === "Rock" && computerSelection === "Scissors") {
        paragraph.textContent = `You win! Rock beats scissors\nUser score: ${userScore += 1}\nComputer score: ${computerScore}`;
    }
    else if (playerSelection === "Rock" && computerSelection === "Paper") {
        paragraph.textContent = `You lose! Paper beats rock\nUser score: ${userScore}\nComputer score: ${computerScore += 1}`;    
    }
    else if (playerSelection === "Scissors" && computerSelection === "Rock") {
        paragraph.textContent = `You lose! Rock beats scissors\nUser score: ${userScore}\nComputer score: ${computerScore += 1}`;
    }
    else if (playerSelection === "Scissors" && computerSelection === "Paper") {
        paragraph.textContent = `You win! Scissors beats paper"\nUser score: ${userScore += 1}\nComputer score: ${computerScore}`;
    }
    else if (playerSelection === "Paper" && computerSelection === "Scissors") {
        paragraph.textContent = `You lose! Scissors beats paper\nUser score: ${userScore}\nComputer score: ${computerScore += 1}`;
    }
    else if (playerSelection === "Paper" && computerSelection === "Rock") {
        paragraph.textContent = `You win! Paper beats rock\nUser score: ${userScore += 1}\nComputer score: ${computerScore}`;
    }
    results.appendChild(paragraph);
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
