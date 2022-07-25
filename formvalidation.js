const $formToValidate = document.getElementById('contactform');
const $inputs = document.querySelectorAll('#contactform .contact__input, textarea');

const expresiones = {
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
  textarea: /^[\s\S]{0,220}$/
}

const places = {
  nameInput: false,
  emailInput: false,
  messageInput: false
};

const formValidation = (e) => {
  switch (e.target.name) {
    case 'namee':
      inputValidation(e.target, expresiones.nombre, 'nameInput', '.contname');
    break;

    case "email":
      inputValidation(e.target, expresiones.correo, 'emailInput', '.contmail');
    break;

    case "message":
      inputValidation(e.target, expresiones.textarea, 'messageInput', '.contmen')
    break;
  };
};

const inputValidation = (input, expression, id, clas) => {
  if (expression.test(input.value)) {
    document.getElementById(id).classList.remove('contact__input--incorrect');
    document.getElementById(id).classList.add('contact__input--correct');
    document.querySelector(`${clas} p`).classList.remove('contact__error');
    document.querySelector(`${clas} p`).classList.add('contact__correct');
    places[id] = true;
  }
  else {
    document.getElementById(id).classList.remove('contact__input--correct');
    document.getElementById(id).classList.add('contact__input--incorrect');
    document.querySelector(`${clas} p`).classList.remove('contact__correct');
    document.querySelector(`${clas} p`).classList.add('contact__error');
    places[id] = false;
  }
}

$inputs.forEach((input) => {
  input.addEventListener('keyup', formValidation);
  input.addEventListener('blur', formValidation);
});

$formToValidate.addEventListener('submit', (e) => {
  // e.preventDefault();
  if (places.nameInput && places.emailInput && places.messageInput) {
    document.querySelector(".contact__senderror").style.transform = "scale(0)";
    document.querySelector('.contact__sendcorrect').style.transform = "scale(1)"
    setTimeout(() => {
      document.querySelector('.contact__sendcorrect').style.transform = "scale(0)"
    }, 5000);
    $formToValidate.reset();
  }
  else {
    document.querySelector(".contact__sendcorrect").style.transform = "scale(0)";
    document.querySelector(".contact__senderror").style.transform = "scale(1)"
  }

})