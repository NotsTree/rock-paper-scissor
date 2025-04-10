// Game state variables
let humanScore = 0;
let computerScore = 0;
let gameOver = false;

// DOM elements
const rockButton = document.getElementById('rock');
const paperButton = document.getElementById('paper');
const scissorsButton = document.getElementById('scissors');
const resultsDiv = document.getElementById('results');
const scoreDiv = document.getElementById('score');

// Add event listeners to buttons
rockButton.addEventListener('click', () => playRound('rock'));
paperButton.addEventListener('click', () => playRound('paper'));
scissorsButton.addEventListener('click', () => playRound('scissors'));

// Get computer choice
function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissors'];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

// Display a message in the results div
function displayMessage(message, className = '') {
  const paragraph = document.createElement('p');
  paragraph.textContent = message;
  if (className) {
    paragraph.classList.add(className);
  }
  resultsDiv.prepend(paragraph);
  
  // Keep only the last 5 messages
  if (resultsDiv.children.length > 5) {
    resultsDiv.removeChild(resultsDiv.lastChild);
  }
}

// Update the score display
function updateScore() {
  scoreDiv.textContent = `Score: You ${humanScore} - Computer ${computerScore}`;
}

// Play a round
function playRound(humanChoice) {
  // Don't allow play if game is over
  if (gameOver) {
    return;
  }
  
  const computerChoice = getComputerChoice();
  
  // Display choices
  displayMessage(`You chose: ${humanChoice} | Computer chose: ${computerChoice}`, 'round-result');
  
  // Determine winner
  let result;
  if (humanChoice === computerChoice) {
    result = "It's a tie for this round!";
    displayMessage(result, 'tie');
  } else if (
    (humanChoice === 'rock' && computerChoice === 'scissors') ||
    (humanChoice === 'paper' && computerChoice === 'rock') ||
    (humanChoice === 'scissors' && computerChoice === 'paper')
  ) {
    humanScore++;
    result = "You win this round!";
    displayMessage(result, 'winner');
  } else {
    computerScore++;
    result = "Computer wins this round!";
    displayMessage(result, 'loser');
  }
  
  // Update score
  updateScore();
  
  // Check for game winner (first to 5 points)
  if (humanScore >= 5 || computerScore >= 5) {
    gameOver = true;
    
    if (humanScore > computerScore) {
      displayMessage(`🎉 You win the game! Final score: You ${humanScore} - Computer ${computerScore} 🎉`, 'winner');
    } else {
      displayMessage(`Computer wins the game! Final score: You ${humanScore} - Computer ${computerScore}`, 'loser');
    }
    
    // Add reset button
    const resetButton = document.createElement('button');
    resetButton.textContent = 'Play Again';
    resetButton.addEventListener('click', resetGame);
    resultsDiv.appendChild(resetButton);
  }
}

// Reset the game
function resetGame() {
  humanScore = 0;
  computerScore = 0;
  gameOver = false;
  updateScore();
  resultsDiv.innerHTML = '<p>Choose rock, paper, or scissors to start a new game!</p><p>First to 5 points wins the game.</p>';
}

// Initial message
console.log("Game started! Click a button to make your choice.");