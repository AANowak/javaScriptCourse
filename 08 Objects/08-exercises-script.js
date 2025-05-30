/*8a - 8d*/
const product1 = {
  name: 'basketball',
  price: 2095,
  ['delivery-date']: '3 days'
};
console.log(product1);

product1.price = product1.price + 500
console.log(product1);

const product2 = {
  name: 'pillow',
  price: 1000,
  ['delivery-time']: '1 day'
};

function comparePrice(product1, product2) {
  if (product1.price > product2.price) {
    return product2
  } else {
    return product1
  }
}

console.log(comparePrice(product1, product2));

/*8e-8f, google or AI was in fact not required...*/ 

function isSameProduct(product1, product2){
  if (product1.name === product2.name && product1.price === product2.product2) {
    return true;
  } else {
    return false;
  }
}

console.log('Good Morning!'.toLowerCase());

console.log('String'.repeat(12));

/*Coin flip*/

const score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  losses: 0
};

function flipCoin(guess) {
  let flip = Math.random();
  let result = '';

  if (flip <= 0.5) {
    result = 'heads';
  } else {
    result = 'tails';
  }

  if (guess === result) {
    score.wins++;
    console.log(`You win. Your guess: ${guess}. Coin landed on: ${result}.`);
  } else {
    score.losses++;
    console.log(`You lost. Your guess: ${guess}. Coin landed on: ${result}.`);
  }

  console.log(score);
  localStorage.setItem('score', JSON.stringify(score));
} 