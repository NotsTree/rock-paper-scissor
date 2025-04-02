// For browser console
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

function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissors'];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function playGame() {
  // Clear console before starting the game
  console.clear();
  console.log("Welcome to Rock, Paper, Scissors!");
  
  // Move score variables inside playGame function
  let humanScore = 0;
  let computerScore = 0;
  
  // Inner function for playing a round
  function playRound(humanChoice, computerChoice) {
    console.log(`You chose: ${humanChoice}`);
    console.log(`Computer chose: ${computerChoice}`);
    
    if (humanChoice === computerChoice) {
      return "tie";
    } else if (
      (humanChoice === 'rock' && computerChoice === 'scissors') ||
      (humanChoice === 'paper' && computerChoice === 'rock') ||
      (humanChoice === 'scissors' && computerChoice === 'paper')
    ) {
      humanScore++;
      return "human";
    } else {
      computerScore++;
      return "computer";
    }
  }
  
  // Play 5 rounds
  for (let i = 1; i <= 5; i++) {
    console.log(`\n-- Round ${i} --`);
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();
    const roundWinner = playRound(humanChoice, computerChoice);
    
    // Announce the round winner
    if (roundWinner === "tie") {
      console.log("This round is a tie!");
    } else if (roundWinner === "human") {
      console.log("You win this round!");
    } else {
      console.log("Computer wins this round!");
    }
    
    // Show current score after each round
    console.log(`Current Score: You ${humanScore} - Computer ${computerScore}`);
    
    // Show current leader after each round
    if (humanScore > computerScore) {
      console.log("You're in the lead!");
    } else if (computerScore > humanScore) {
      console.log("Computer is in the lead!");
    } else {
      console.log("The game is currently tied!");
    }
  }
  
  // Declare the final winner
  console.log("\n-- Game Over --");
  if (humanScore > computerScore) {
    console.log(`You win the game! Final score: You ${humanScore} - Computer ${computerScore}`);
  } else if (computerScore > humanScore) {
    console.log(`Computer wins the game! Final score: You ${humanScore} - Computer ${computerScore}`);
  } else {
    console.log(`The game ends in a tie! Final score: You ${humanScore} - Computer ${computerScore}`);
  }
}


console.log("To play, open the console and follow the prompts.");
console.log("Good luck!");
console.log("May the best player win!");
// Start the game when the script runs
playGame();