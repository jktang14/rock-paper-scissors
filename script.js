let choices = ['Rock', 'Paper', 'Scissors']
// Return rock,paper,scissors randomly
function getComputerChoice() {
    let pose = Math.floor(Math.random() * 3);
    return choices[pose];
}

// Play round and declare winner
function playRound(playerSelection, computerSelection) {
    let allLower = playerSelection[0].toUpperCase() + playerSelection.slice(1).toLowerCase();
    if (allLower === computerSelection) {
        return "Its a tie!";
    }
    else if (allLower === "Rock" && computerSelection === "Scissors") {
        return "You win! Rock beats scissors";
    }
    else if (allLower === "Rock" && computerSelection === "Paper") {
        return "You lose! Paper beats rock";    
    }
    else if (allLower === "Scissors" && computerSelection === "Rock") {
        return "You lose! Rock beats scissors";
    }
    else if (allLower === "Scissors" && computerSelection === "Paper") {
        return "You win! Scissors beats paper";
    }
    else if (allLower === "Paper" && computerSelection === "Scissors") {
        return "You lose! Scissors beats paper";
    }
    else if (allLower === "Paper" && computerSelection === "Rock") {
        return "You win! Paper beats rock";
    }
}
