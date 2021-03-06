// Menu Responsive //

const $btnOpen = document.getElementById('open');
const $btnClose = document.getElementById('close');
const $menu = document.querySelector('.header__nav--menu');
const $menuArticle = document.querySelectorAll('.header__nav--menu_articulo');
const openMenu = () => {
  $menu.style.transition = "transform 0.3s ease-in-out";
  $btnOpen.style.display = 'none';
  $btnClose.style.display = 'block';
  $menu.style.transform = 'scale(1, 1)';
  $menu.style.transformOrigin = 'right';
};
const closeMenu = () => {
  $btnOpen.style.display = 'block';
  $btnClose.style.display = 'none';
  $menu.style.transform = 'scale(0, 1)';
  $menu.style.transformOrigin = 'right';
};

// Resolution Check

const checkResolution = () => {
  if (window.innerWidth <= 900) {
    closeMenu();
    for (let i = 0; i < $menuArticle.length; i++) {
      $menuArticle[i].addEventListener('click', closeMenu, true);
    };
  }
  else {
    openMenu();
    for (let i = 0; i < $menuArticle.length; i++) {
      $menuArticle[i].removeEventListener('click', closeMenu, true);
    };
  };
};
checkResolution();
$btnOpen.addEventListener('click', () => {
  openMenu();
});
$btnClose.addEventListener('click', () => {
  closeMenu();
});
window.onresize = () => {
  window.outerWidth <= 912 ? $menu.style.transform = 'scale(0, 1)' : $menu.style.transform = 'scale(1, 1)';
  checkResolution();
};

// Smooth Cursor //

$(document).ready(function () {
  $("a").on('click', function (event) {
    if (this.hash !== "") {
      event.preventDefault();
      const hash = this.hash;
      const hashWidth = document.querySelector(`.header`).scrollHeight;
      $('*').animate({
        scrollTop: $(hash).offset().top - hashWidth
      }, 700, function () {
      });
    };
  });
});

// Social Links Hover //

const facebookLink = document.getElementById('facelink');
const facebookIcon = document.getElementById('faceicon');
const igLink = document.getElementById('iglink');
const igIcon = document.getElementById('igicon');
const eventHover = (link, event, icon, color, transition) => {
  link.addEventListener(event, () => {
    icon.style.color = color;
    if (transition == true) icon.style.transition = "color 350ms ease";
  });
};
eventHover(facebookLink, 'mouseover', facebookIcon, "#3b5998", true);
eventHover(facebookLink, 'mouseout', facebookIcon, "rgba(239, 239, 239, 0.6)", false);
eventHover(igLink, 'mouseover', igIcon, "#e23ecc", true);
eventHover(igLink, 'mouseout', igIcon, "rgba(239, 239, 239, 0.6)", false);