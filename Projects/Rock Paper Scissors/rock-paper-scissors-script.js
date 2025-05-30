

let score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  losses: 0,
  ties: 0
};

updateScoreElement();

let isAutoPlaying = false;
let intervalID = '';

function autoPlay() {
  if(!isAutoPlaying) {
    intervalID = setInterval(function() {
      const playerMove = pickComputerMove();
      playGame(playerMove);
    }, 1000);
    isAutoPlaying = true;
  } else {
    clearInterval(intervalID);
    isAutoPlaying = false;
  }
}

function playGame (playerMove) {
  const computerMove = pickComputerMove();

  /*Checking result of the game based on computerMove compared to our choice*/

  let result = '';
  

  if (playerMove === 'scissors') {
    if (computerMove === 'rock') {
      result = 'You lose.';
    } else if (computerMove === 'paper') {
      result = 'You win.';
    } else if (computerMove === 'scissors') {
      result = 'Tie.';
    }

  } else if (playerMove === 'paper') {
    if (computerMove === 'rock') {
      result = 'You win.';
    } else if (computerMove === 'paper') {
      result = 'Tie.';
    } else if (computerMove === 'scissors') {
      result = 'You lose.';
    }

  } else if (playerMove === 'rock') {
    if (computerMove === 'rock') {
      result = 'Tie.';
    } else if (computerMove === 'paper') {
      result = 'You lose.';
    } else if (computerMove === 'scissors') {
      result = 'You win.';
    }

  }

  if (result === 'You win.') {
    score.wins++;
  } else if (result === 'You lose.') {
    score.losses++;
  } else if (result === 'Tie.') {
    score.ties++;
  }

  localStorage.setItem('score', JSON.stringify(score));

  document.querySelector('.js-moves')
    .innerHTML = `You picked ${playerMove}, Computer picked ${computerMove}`;

  document.querySelector('.js-result')
    .innerHTML = result;  

  
  updateScoreElement();        
}

function updateScoreElement () {
  document.querySelector('.js-score')
    .innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}

function pickComputerMove () {
  /*Computer selects random number and uses it to pick computerMove*/
  const randomNumber = Math.random();
  let computerMove = '';

  if (randomNumber >=0 && randomNumber < 1 / 3) {
      computerMove = 'rock';
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
      computerMove = 'paper';
  } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
      computerMove = 'scissors';
  }

  return computerMove;
}