# Learning-JavaScript

let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;
// Write your code below:

const generateTarget = targetVal => {
  targetVal = Math.floor(Math.random() * 10);
  console.log(`The target value is ${targetVal}`);
  return targetVal
}

const compareGuesses = (humanScore, computerScore, targetVal) =>{  // determine who wins
	if(humanScore === computerScore) {
		return true;
    //'Human Wins this Round!';
  }
  
  humanScore = Math.abs(targetVal - humanScore);
  console.log(`difference human: ${humanScore}`);
  computerScore = Math.abs(targetVal - computerScore);
  console.log(`difference computer: ${computerScore}`);
  
  if(humanScore < computerScore) {
     return true;
    //'The Human Wins this Round!';
  }
  else {
    return false;
    //'Computer Wins this Round!';
  }
} 
const updateScore = (winner) => {
  if(humanScore === computerScore || humanScore < computerScore) {
     humanScore += 1;
  }
  else {
    computerScore += 1;
  }
}
