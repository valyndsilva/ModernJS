/*
GAME FUNCTION:
- Player must guess a number between a min and max
- Player gets a certain amount of guesses
- Notify player of guesses remaining
- Notify the player of the correct answer if they loose
- Let player choose to play again
*/

// Game values
let min = 1,
    max = 10,
    winningNum = getRandomNum(min, max),
    guessesLeft = 3;

// UI Elements
const game = document.querySelector('#game'),
      minNum = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num'),
      guessBtn = document.querySelector('#guess-btn'),
      guessInput = document.querySelector('#guess-input'),
      message = document.querySelector('.message');

// 1.Assign UI min and max
minNum.textContent = min;
maxNum.textContent = max;


// 2.Get Winning Number - Hoisting
function getRandomNum(min, max){
  return Math.floor(Math.random()*(max-min+1)+min);
}

// 11.Play again event listener
game.addEventListener('mousedown', function(e){ //avoid click event as it automatically puts the play-again in effect with the mousedown and mouseup action.
  if(e.target.className === 'play-again'){
    window.location.reload();
  }
});
      
// 3.Add event listener to listen for guess
guessBtn.addEventListener('click', function(){
  let guess = parseInt(guessInput.value); // Convert output from string to int to be able to compare
  
  // 4.Validate
  if(isNaN(guess) || guess < min || guess > max){
    setMessage(`Please enter a number between ${min} and ${max}`, 'red');
  }

  // 6.Check if won
  if(guess === winningNum){
    // 8.Correct number: Game over - You won
    gameOver(true, `${winningNum} is correct, YOU WIN!`);

  } else {
    // Wrong number
    guessesLeft -= 1; //guessesLeft = guessesLeft - 1;

    if(guessesLeft === 0){
      // 9.Game over - You lost
      gameOver(false, `Game Over, you lost. The correct number was ${winningNum}`);
    } else {
      // Game continues - if guess is wrong

      // Change border color
      guessInput.style.borderColor = 'red';

      // Clear Input
      guessInput.value = '';

      // Tell user its the wrong number
      setMessage(`${guess} is not correct, ${guessesLeft} guesses left`, 'red');
    }
  }
});

// 7.Game over
function gameOver(won, msg){
  let color;
  won === true ? color = 'green' : color = 'red';
  // Disable input
  guessInput.disabled = true;
  // Change border color
  guessInput.style.borderColor = color;
  // Set text color
  message.style.color = color;
  // Set message
  setMessage(msg);

  // 10.Play Again?
  guessBtn.value = 'Play Again';
  guessBtn.className += 'play-again'; //Append class play-again
}

// 5.Set message
function setMessage(msg, color){
  message.style.color = color;
  message.textContent = msg;
}