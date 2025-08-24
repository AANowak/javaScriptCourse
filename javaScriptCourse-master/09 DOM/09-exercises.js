/*9a-9b*/
console.log(document.querySelector('.js-9a-button'));

document.querySelector('.js-9b-button')
  .innerHTML = '9b done!';

/*9c*/  
function updateDisplay (choice) {
  document.querySelector('.js-choice-display')
   .innerHTML = `You chose: ${choice}`;
}

/*9d-9e*/
function displayName () {
  const inputElement = document.querySelector('.js-input');
  const name = inputElement.value;

  document.querySelector('.js-show-name')
    .innerHTML = `Your name is ${name}`;
}

function handleSubmitOnKeydown () {
  if (event.key === 'Enter') {
    displayName();
  }
}

/*9h*/
function handleOnkeyup() {
  const inputProjectElement = document.querySelector('.js-9h-input');
  const text = inputProjectElement.value;

  document.querySelector('.js-9h-input-display')
    .innerHTML = `${text}`;
}
