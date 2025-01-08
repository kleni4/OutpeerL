let startButton = document.getElementById('start-btn');
let gameContainer = document.getElementById('game-container');
let scoreDisplay = document.getElementById('score');
let timeDisplay = document.getElementById('time');

let score = 0;
let time = 30;
let timerInterval;

function startGame() {
  // Скрыть кнопку "Начать игру"
  startButton.style.display = 'none';

  score = 0;
  time = 30;
  scoreDisplay.textContent = score;
  timeDisplay.textContent = time;

  startTimer();
  spawnItem();
}

function spawnItem() {
  // удалить круг
  const existingItem = document.querySelector('.hidden-item');
  if (existingItem) {
    return;
  }

  const item = document.createElement('div');
  item.classList.add('hidden-item');

  // координаты https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect
  const { width, height } = gameContainer.getBoundingClientRect();
  const x = Math.random() * (width - 50);
  const y = Math.random() * (height - 50);

  item.style.left = `${x}px`;
  item.style.top = `${y}px`;

  item.addEventListener('click', () => {
    score++;
    scoreDisplay.textContent = score;

    // Бонус эффект
    item.classList.add('flash');
    setTimeout(() => {
      item.remove();
      spawnItem();
    }, 100);
  });

  gameContainer.appendChild(item);
}


function startTimer() {
  timerInterval = setInterval(() => {
    time--;
    timeDisplay.textContent = time;

    if (time <= 5) {
      timeDisplay.style.color = 'red';
    }

    if (time <= 0) {
      endGame();
    }
  }, 1000);
}


function endGame() {
  clearInterval(timerInterval);

  const items = document.querySelectorAll('.hidden-item');
  items.forEach(item => item.remove());

if (score <= 5) {
  alert(`Ты можешь лучше! Попробуй снова! Счёт: ${score}`);
}
else if (score >= 30) {
  alert(`Ты чемпион! Счёт: ${score}`);
}
else {
  alert(`Игра окончена! Счёт: ${score}`);
}

  startButton.style.display = 'block';
}

// start
startButton.addEventListener('click', startGame);
