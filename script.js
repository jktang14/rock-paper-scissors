let choices = ['Rock', 'Paper', 'Scissors'];
let userScore = 0;
let computerScore = 0;
let paragraph = document.createElement('p');
let winner;
// Return rock,paper,scissors randomly
function getComputerChoice() {
    let pose = Math.floor(Math.random() * 3);
    return choices[pose];
}

// Create div in body
let results = document.createElement('div');
results.classList.add('center')
document.body.appendChild(results);

// Play round and declare winner
function playRound(e, playerSelection, computerSelection) {
    if (results.contains(winner)) {
        results.removeChild(winner);
    }
    this.classList.add('playing');
    playerSelection = e.target.textContent;
    computerSelection = getComputerChoice();
    if (playerSelection === computerSelection) {
        paragraph.innerHTML = `Its a tie! <br> User score: ${userScore} Computer score: ${computerScore}`;
    }
    else if (playerSelection === "Rock" && computerSelection === "Scissors") {
        paragraph.innerHTML = `You win! Rock beats Scissors<br>User score: ${userScore += 1} Computer score: ${computerScore}`;
    }
    else if (playerSelection === "Rock" && computerSelection === "Paper") {
        paragraph.innerHTML = `You lose! Paper beats Rock<br>User score: ${userScore} Computer score: ${computerScore += 1}`;    
    }
    else if (playerSelection === "Scissors" && computerSelection === "Rock") {
        paragraph.innerHTML = `You lose! Rock beats Scissors<br>User score: ${userScore} Computer score: ${computerScore += 1}`;
    }
    else if (playerSelection === "Scissors" && computerSelection === "Paper") {
        paragraph.innerHTML = `You win! Scissors beats Paper<br>User score: ${userScore += 1} Computer score: ${computerScore}`;
    }
    else if (playerSelection === "Paper" && computerSelection === "Scissors") {
        paragraph.innerHTML = `You lose! Scissors beats Paper<br>User score: ${userScore} Computer score: ${computerScore += 1}`;
    }
    else if (playerSelection === "Paper" && computerSelection === "Rock") {
        paragraph.innerHTML = `You win! Paper beats Rock<br>User score: ${userScore += 1} Computer score: ${computerScore}`;
    }
    results.appendChild(paragraph);

    if (userScore === 5) {
        userScore = 0;
        computerScore = 0;
        winner = document.createElement('p');
        winner.textContent = "Congratulations, you won!";
        results.appendChild(winner);
    }
    else if (computerScore === 5) {
        userScore = 0;
        computerScore = 0;
        winner = document.createElement('p');
        winner.textContent = "You lost :( Try again!";
        results.appendChild(winner);
    }
}

let buttons = document.querySelectorAll('button');
let text = buttons.forEach(choice => choice.addEventListener('click', playRound));

function endTransition(e) {
    this.classList.remove('playing');
}

buttons.forEach(choice => choice.addEventListener('transitionend', endTransition));