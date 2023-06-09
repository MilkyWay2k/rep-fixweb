$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

var elements = document.querySelectorAll('#disc');
for (var i = 0; i < elements.length; i++) {
  var element = elements[i];
  var text = element.textContent;

  if (text.length > 500) {
    element.textContent = text.slice(0, 500) + '...';
  }
}

var toggleButtons = document.querySelectorAll('.btn');

toggleButtons.forEach(function(button) {
  var originalButtonText = button.innerHTML;

  button.addEventListener('click', function() {
    var container = button.parentNode;
    var textContainer = container.querySelector('.text-container');
    var shortText = container.querySelector('.short-text');
    var fullText = container.querySelector('.full-text');
    var isOpen = textContainer.classList.contains('open');

    var openContainers = document.querySelectorAll('.text-container.open');
    openContainers.forEach(function(openContainer) {
      if (openContainer !== textContainer) {
        var openShortText = openContainer.querySelector('.short-text');
        var openFullText = openContainer.querySelector('.full-text');
        closeContainer(openContainer, openShortText, openFullText);
        var openButton = openContainer.parentNode.querySelector('.btn');
        openButton.innerHTML = originalButtonText;
      }
    });

    if (isOpen) {
      closeContainer(textContainer, shortText, fullText);
      button.innerHTML = originalButtonText;
    } else {
      openContainer(textContainer, shortText, fullText);
      button.innerHTML = 'Hide';
    }
  });
});

function openContainer(container, shortText, fullText) {
  container.classList.add('open');
  shortText.style.maxHeight = '0';
  fullText.style.maxHeight = fullText.scrollHeight + 'px';
}

function closeContainer(container, shortText, fullText) {
  container.classList.remove('open');
  shortText.style.maxHeight = shortText.scrollHeight + 'px';
  fullText.style.maxHeight = '0';
}

window.onload = function() {
  var changeTitleHeader = document.getElementById('changeTitle');
  var newTitle = changeTitleHeader.textContent;

  var fullTitle = "ITMO UNIVERSITY | " + newTitle;

  document.title = fullTitle;
};

/////////////////////////

var snakeGame = (function () {
  var BOARD_SIZE = 16;
  var CELL_SIZE = 20;

var board;
var snake;
var fruit;
var direction;
var gameLoopInterval;

function init() {
  board = document.querySelector('.game-board');
  board.style.width = (BOARD_SIZE * CELL_SIZE) + 'px';
  board.style.height = (BOARD_SIZE * CELL_SIZE) + 'px';

  snake = [];
  var head = createSnakePart(8, 8);
  snake.push(head);

  fruit = createFruit();

  direction = 'right';

  gameLoopInterval = setInterval(gameLoop, 200);
}

function createSnakePart(x, y) {
  var part = document.createElement('div');
  part.className = 'game-snake';
  part.style.width = (CELL_SIZE - 4) + 'px';
  part.style.height = (CELL_SIZE - 4) + 'px';
  part.style.left = (x * CELL_SIZE) + 'px';
  part.style.top = (y * CELL_SIZE) + 'px';
  board.appendChild(part);
  return part;
}

function createFruit() {
  var x = Math.floor(Math.random() * BOARD_SIZE);
  var y = Math.floor(Math.random() * BOARD_SIZE);
  var fruit = document.createElement('div');
  fruit.className = 'game-fruit';
  fruit.style.width = CELL_SIZE + 'px';
  fruit.style.height = CELL_SIZE + 'px';
  fruit.style.left = (x * CELL_SIZE) + 'px';
  fruit.style.top = (y * CELL_SIZE) + 'px';
  board.appendChild(fruit);
  return fruit;
}

function gameLoop() {
  var head = snake[0];
  var x = parseInt(head.style.left) / CELL_SIZE;
  var y = parseInt(head.style.top) / CELL_SIZE;
  switch (direction) {
      case 'up':
          y--;
          break;
      case 'down':
          y++;
          break;
      case 'left':
          x--;
          break;
      case 'right':
          x++;
          break;
  }

  if (x < 0 || x >= BOARD_SIZE || y < 0 || y >= BOARD_SIZE) {
      gameOver();
      return;
  }

  if (x === parseInt(fruit.style.left) / CELL_SIZE && y === parseInt(fruit.style.top) / CELL_SIZE) {
      var tail = createSnakePart(parseInt(snake[snake.length - 1].style.left) / CELL_SIZE, parseInt(snake[snake.length - 1].style.top) / CELL_SIZE);
      snake.push(tail);
      board.removeChild(fruit);
      fruit = createFruit();
  }

  for (var i = 1; i < snake.length; i++) {
      if (x === parseInt(snake[i].style.left) / CELL_SIZE && y === parseInt(snake[i].style.top) / CELL_SIZE) {
          gameOver();
          return;
      }
  }

  var tail = snake.pop();
  tail.style.left = (x * CELL_SIZE) + 'px';
  tail.style.top = (y * CELL_SIZE) + 'px';
  snake.unshift(tail);
}

function gameOver() {
  clearInterval(gameLoopInterval);
  var gameOverContainer = document.querySelector('.game-over');
  gameOverContainer.style.display = 'flex';
  setTimeout(function() {
      gameOverContainer.style.display = 'none';
      window.location.href = 'https://itmo-history.vercel.app/index.html';
  }, 5000);
}

function changeDirection(newDirection) {
  direction = newDirection;
}

return {
  init: init,
  changeDirection: changeDirection
};

})();
snakeGame.init();

function textStyle1() {
  alert("Поздравляем, Вы нашли нашу пасхалку✨ Желаем Вам хорошего настроения и успехов в учебе🎉");
  window.location.href = "https://itmo-history.vercel.app/game.html";
}
function textStyle2() {
  alert("Поздравлям⭐ Вы нашли нашу пасхалку👏👏 Вы очень внимательно читаете материал!👍");
}
function textStyle3() {
  alert("Поздравлям⭐ Вы нашли нашу пасхалку👏👏 Это удивительно, ведь она была очень хорошо спрятана!👀");
}




