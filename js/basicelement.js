// jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

// Closes the Responsive Menu on Menu Item Click
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

    // Закрыть предыдущий открытый блок
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

    // Открыть/закрыть текущий блок
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
  // Получаем элемент h3 с id "changeTitle"
  var changeTitleHeader = document.getElementById('changeTitle');

  // Получаем содержимое заголовка h3
  var newTitle = changeTitleHeader.textContent;

  // Добавляем префикс к новому заголовку
  var fullTitle = "БАРХАТНЫЕ ТЯГИ | " + newTitle;

  // Устанавливаем новый заголовок страницы
  document.title = fullTitle;
};







