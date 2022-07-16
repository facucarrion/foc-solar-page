const $form = document.querySelector('#contactform')
const $buttonMailto = document.querySelector('#mailto')

$form.addEventListener('submit', handleSubmit)

function handleSubmit(event) {
  event.preventDefault()
  const form = new FormData(this)
  $buttonMailto.setAttribute('href', `mailto:focsolar@gmail.com?subject=${form.get('name')}&body=${form.get('message')}`)
  $buttonMailto.click()
}