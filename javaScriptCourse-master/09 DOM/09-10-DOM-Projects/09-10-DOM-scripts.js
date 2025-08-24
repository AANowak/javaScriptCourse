/*Window and type coercion info*/
console.log(String(330));
console.log('25' - 5);
console.log('25' + 5);

window.document
window.console.log('window');
//window.alert('sweetie')

/*Amazon shipping calculator*/
function handleCostKeydown(event) {
  if (event.key === 'Enter') {
    calculateTotal();
  }
}

function calculateTotal() {
  const inputElement = document.querySelector('.js-cost-input');
  if (inputElement.value < 0) {
    document.querySelector('.js-error-info')
    .innerHTML = `Error: Cost cannot be less than $0`
    return;
  }
  /*Calculate in cents to avoid inaccurate results*/
  let cost = Number(inputElement.value) * 100;

  if (cost < 4000) {
    cost = cost + 1000;
  }

  document.querySelector('.js-total-cost')
    .innerHTML = `$${cost / 100}`;
}

/*YouTube Subscribe button name change*/
function subscribe () {
  const buttonElement = document.querySelector('.js-subscribe-button');

  if (buttonElement.innerText === 'Subscribe') {
      buttonElement.innerText = 'Subscribed';
      buttonElement.classList.add('is-subscribed');
  } else {
      buttonElement.innerText = 'Subscribe';
      buttonElement.classList.remove('is-subscribed');
  }


}
