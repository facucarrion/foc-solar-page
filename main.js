// Mailto

const $form = document.querySelector('#contactform');
const $buttonMailto = document.querySelector('#mailto');

$form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const form = new FormData(this);
  $buttonMailto.setAttribute('href', `mailto:focsolar@gmail.com?subject=${form.get('name')}&body=${form.get('message')}`);
  $buttonMailto.click();
};

// Menu Responsive

const $btnOpen = document.getElementById('open');
const $btnClose = document.getElementById('close');
const $menu = document.querySelector('.header__nav--menu');
const $menuArticle1 = document.querySelector('.header__nav--menu_articulo-1');
const $menuArticle2 = document.querySelector('.header__nav--menu_articulo-2');
const $menuArticle3 = document.querySelector('.header__nav--menu_articulo-3');
const $menuArticle4 = document.querySelector('.header__nav--menu_articulo-4');

$btnOpen.addEventListener('click', () => {
  $btnOpen.style.display = 'none';
  $btnClose.style.display = 'block';
  $menu.style.transform = 'scale(1, 1)';
  $menu.style.transformOrigin = 'right';
});

$btnClose.addEventListener('click', () => {
  $btnOpen.style.display = 'block';
  $btnClose.style.display = 'none';
  $menu.style.transform = 'scale(0, 1)';
  $menu.style.transformOrigin = 'right';
});

window.onresize = () => {
  window.outerWidth < 650 ? $menu.style.transform = 'scale(0, 1)' : $menu.style.transform = 'scale(1, 1)';
};

$menuArticle1.addEventListener('click', () => {
  $btnClose.click();
});

$menuArticle2.addEventListener('click', () => {
  $btnClose.click();
});

$menuArticle3.addEventListener('click', () => {
  $btnClose.click();
});

$menuArticle4.addEventListener('click', () => {
  $btnClose.click();
});

// Smooth Cursor

$(document).ready(function () {
  // Add smooth scrolling to all links
  $("a").on('click', function (event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      const hash = this.hash;
      const hashWidth = document.querySelector(`.header`).scrollHeight;
      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('*').animate({
        scrollTop: $(hash).offset().top - hashWidth
      }, 500, function () {

        // Add hash (#) to URL when done scrolling (default click behavior)
        // window.location.hash = hash;
      });
    }; // End if
  });
});

// Go Up Button

document.getElementById("button-up").addEventListener("click", scrollUp);

function scrollUp() {

  var currentScroll = document.documentElement.scrollTop;

  if (currentScroll > 0) {
    window.requestAnimationFrame(scrollUp);
    window.scrollTo(0, currentScroll - (currentScroll / 7.5));
    buttonUpp.style.transform = "scale(0)";
  }
};

buttonUpp = document.getElementById("button-up");

window.onscroll = function () {
  var scroll = document.documentElement.scrollTop;

  if (scroll > 200) {

    buttonUpp.style.transform = "scale(1)";

  } else if (scroll < 100) {

    buttonUpp.style.transform = "scale(0)";
  }
};