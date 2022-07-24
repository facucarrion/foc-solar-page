const $buttonUpp = document.querySelector("#button-up");

$buttonUpp.addEventListener("click", () => {
  window.scrollTo({top: 0, behavior: 'smooth'});
});

window.onscroll = function() {
  let scroll = document.documentElement.scrollTop;
  if (scroll > 200) $buttonUpp.style.transform = "scale(1)";
  else if (scroll < 100) $buttonUpp.style.transform = "scale(0)";
};