// For Node.js environment

console.log("Welcome to Rock, Paper, Scissors!");




function getHumanChoice() {
    let choice = prompt("Enter your choice (rock, paper, scissors):").toLowerCase();
    
    // Validate the input
    if (choice === 'rock' || choice === 'paper' || choice === 'scissors') {
      return choice;
    } else {
      alert("Invalid choice! Please enter rock, paper, or scissors.");
      return getHumanChoice(); // Recursively ask again for valid input
    }
  }
  
  console.log("human: " + getHumanChoice());
  

function getcomputerchoice(){
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

console.log("pc: " + getcomputerchoice());
