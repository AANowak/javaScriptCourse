let calculation = JSON.parse(localStorage.getItem('calculation')) || '';
displayCalculation();

function addToCalculation (value) {
  calculation = calculation + value;
  localStorage.setItem('calculation', JSON.stringify(calculation));
  displayCalculation();
}

function displayCalculation() {
  document.querySelector('.js-calculator-display')
    .innerHTML = calculation;
}
