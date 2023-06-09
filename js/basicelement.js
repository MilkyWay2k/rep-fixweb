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

var snakeGame = (function() {
  var gameBoard;
  var snake;
  var fruit;
  var direction;
  var gameLoopInterval;
  var currentSpeed;
  var score;
  var scoreElement;

  function init() {
      gameBoard = document.querySelector('.game-board');
      snake = [{x: 10, y: 10}];
      fruit = {x: 5, y: 5};
      direction = 'right';
      currentSpeed = 200;
      score = 0;

      scoreElement = document.createElement('div');
      scoreElement.className = 'score';
      scoreElement.textContent = 'Score: ' + score;
      document.body.appendChild(scoreElement);
  }

  function createSnake() {
      for (var i = 0; i < snake.length; i++) {
          var snakeElement = document.createElement('div');
          snakeElement.className = 'game-snake';
          snakeElement.style.left = snake[i].x * 10 + 'px';
          snakeElement.style.top = snake[i].y * 10 + 'px';
          gameBoard.appendChild(snakeElement);
      }
  }

  function createFruit() {
      var fruitElement = document.createElement('div');
      fruitElement.className = 'game-fruit';
      fruitElement.style.left = fruit.x * 10 + 'px';
      fruitElement.style.top = fruit.y * 10 + 'px';
      gameBoard.appendChild(fruitElement);

      score++;
  }

  function moveSnake() {
      var head = {x: snake[0].x, y: snake[0].y};

      switch (direction) {
          case 'up':
              head.y--;
              break;
          case 'left':
              head.x--;
              break;
          case 'right':
              head.x++;
              break;
          case 'down':
              head.y++;
              break;
      }

      snake.unshift(head);
      snake.pop();
  }

  function checkCollision() {
      var head = snake[0];

      // Проверка на столкновение с границами поля
      if (head.x < 0 || head.x >= 32 || head.y < 0 || head.y >= 32) {
          return true;
      }

      // Проверка на столкновение со своим телом
      for (var i = 1; i < snake.length; i++) {
          if (head.x === snake[i].x && head.y === snake[i].y) {
              return true;
          }
      }

      // Проверка на столкновение с фруктом
      if (head.x === fruit.x && head.y === fruit.y) {
          snake.push({});
          createFruit();
      }

      return false;
  }

  function updateGameBoard() {
      while (gameBoard.firstChild) {
          gameBoard.firstChild.remove();
      }

      createSnake();
      createFruit();

      if (checkCollision()) {
          gameOver();
      }
  }

  function gameOver() {
      clearInterval(gameLoopInterval);
      document.querySelector('.game-over-text').textContent = 'Вы проиграли! Очки: ' + score;
      document.querySelector('.game-over').style.display = 'flex';
  }

  function changeDirection(newDirection) {
      if (
          (direction === 'up' && newDirection === 'down') ||
          (direction === 'down' && newDirection === 'up') ||
          (direction === 'left' && newDirection === 'right') ||
          (direction === 'right' && newDirection === 'left')
      ) {
          return;
      }

      direction = newDirection;
  }

  function start() {
      init();
      updateGameBoard();

      gameLoopInterval = setInterval(function() {
          moveSnake();
          updateGameBoard();
      }, currentSpeed);
  }

  return {
      changeDirection: changeDirection,
      start: start
  };
})();

snakeGame.start();

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




