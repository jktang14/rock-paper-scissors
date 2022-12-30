let choices = ['Rock', 'Paper', 'Scissors']
// Return rock,paper,scissors randomly
function getComputerChoice() {
    let pose = Math.floor(Math.random() * 3) + 0;
    return choices[pose];
}