const score = JSON.parse(localStorage.getItem('score'));

document.querySelector('.js-score').innerHTML = `Player: ${score.player}, Computer: ${score.computer}, Ties: ${score.ties}`;

function reset() {
  score.computer = 0;
  score.player = 0;
  score.ties = 0;
  localStorage.setItem('score', JSON.stringify(score));
  document.querySelector('.js-result').innerHTML = 'Score Reseted';
  document.querySelector('.js-score').innerHTML = `Player: ${score.player}, Computer: ${score.computer}, Ties: ${score.ties}`;
}

function computerMove() {
  let computer = Math.floor(Math.random() * 3);
  return computer;
}

function play(player) {
  let computer = computerMove();
  if (player === 0 && player === computer) {
    score.ties++;
    document.querySelector('.js-result').innerHTML = 'Draw: You <img src="Images/rock-emoji.png" class="image-results"> vs <img src="Images/rock-emoji.png" class="image-results"> Computer';
  } else if (player === 1 && player === computer) {
    score.ties++;
    document.querySelector('.js-result').innerHTML = 'Draw: You <img src="Images/paper-emoji.png" class="image-results"> vs <img src="Images/paper-emoji.png" class="image-results"> Computer';
  } else if (player === 2 && player === computer) {
    score.ties++;
    document.querySelector('.js-result').innerHTML = 'Draw: You <img src="Images/scissors-emoji.png" class="image-results"> vs <img src="Images/scissors-emoji.png" class="image-results"> Computer';
  } else if (player === 0 && computer === 1) {
    score.computer++;
    document.querySelector('.js-result').innerHTML = 'Defeat: You <img src="Images/rock-emoji.png" class="image-results"> vs <img src="Images/paper-emoji.png" class="image-results"> Computer';
  } else if (player === 0 && computer === 2) {
    score.player++;
    document.querySelector('.js-result').innerHTML = 'Victory: You <img src="Images/rock-emoji.png" class="image-results"> vs <img src="Images/scissors-emoji.png" class="image-results"> Computer';
  } else if (player === 1 && computer === 0) {
    score.player++;
    document.querySelector('.js-result').innerHTML = 'Victory: You <img src="Images/paper-emoji.png" class="image-results"> vs <img src="Images/rock-emoji.png" class="image-results"> Computer';
  } else if (player === 1 && computer === 2) {
    score.computer++;
    document.querySelector('.js-result').innerHTML = 'Defeat: You <img src="Images/paper-emoji.png" class="image-results"> vs <img src="Images/scissors-emoji.png" class="image-results"> Computer';
  } else if (player === 2 && computer === 0) {
    score.computer++;
    document.querySelector('.js-result').innerHTML = 'Defeat: You <img src="Images/scissors-emoji.png" class="image-results"> vs <img src="Images/rock-emoji.png" class="image-results"> Computer';
  } else if (player === 2 && computer === 1) {
    score.player++;
    document.querySelector('.js-result').innerHTML = 'Victory: You <img src="Images/scissors-emoji.png" class="image-results"> vs <img src="Images/paper-emoji.png" class="image-results"> Computer';
  }
  document.querySelector('.js-score').innerHTML = `Player: ${score.player}, Computer: ${score.computer}, Ties: ${score.ties}`;
  localStorage.setItem('score', JSON.stringify(score));
}

let autoPlaying;
function autoPlay() {
  const autoPlayElement = document.querySelector('.js-autoplay');
  if (autoPlayElement.classList.contains('off')) {
    autoPlaying = setInterval(function() {
      play(computerMove())
    }, 1000);
    autoPlayElement.classList.remove('off');
    autoPlayElement.classList.add('on');
    autoPlayElement.innerHTML = 'Stop Play';
  } else {
    clearInterval(autoPlaying);
    autoPlayElement.classList.remove('on');
    autoPlayElement.classList.add('off');
    autoPlayElement.innerHTML = 'Auto Play';
  }
}