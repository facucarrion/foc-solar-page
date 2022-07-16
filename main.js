// Mailto

const $form = document.querySelector('#contactform')
const $buttonMailto = document.querySelector('#mailto')

$form.addEventListener('submit', handleSubmit)

function handleSubmit(event) {
  event.preventDefault()
  const form = new FormData(this)
  $buttonMailto.setAttribute('href', `mailto:focsolar@gmail.com?subject=${form.get('name')}&body=${form.get('message')}`)
  $buttonMailto.click()
}

// Menu Responsive

const $btnOpen = document.getElementById('open');
const $btnClose = document.getElementById('close');
const $menu = document.querySelector('.header__nav--menu');

$btnOpen.addEventListener('click', () => {
    $btnOpen.style.display = 'none';
    $btnClose.style.display = 'block';
    $menu.style.transform = 'translateX(0)';
})

$btnClose.addEventListener('click', () => {
  $btnOpen.style.display = 'block';
  $btnClose.style.display = 'none';
  $menu.style.transform = 'translateX(400px)';
})