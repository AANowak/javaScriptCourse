true
false


console.log(3 > 5 - 5);
/*Don't use == or != in JS, as it will treat both values as the same type, use === and !== instead*/
console.log(5 === '5.00'); 

/*If Statements exercises with different conditions*/ 
if (true) {
  console.log('Hello');
} 
else {
  console.log('Else...');
}

const age = 15;

if (age >= 16) {
  console.log('You can drive.');
  console.log('Congrats.');
} 
else if (age >=14) {
  console.log('Almost there!');
}      
else {
  console.log('You can not drive.');
}

/*Logical operators*/
console.log(true && false);
console.log(0.2 >= 0 && 0.2 <1 / 3);

console.log(false || false);
console.log(!true);

/*Truthy and Falsey values*/
if (5) {
  console.log('truthy');
}

const cartQuantity = 5;

if (cartQuantity) {
  console.log('cart has products');
} 

/*If statemenst shortcuts*/

const result = 0 ? 'truthy' : 'falsy'
console.log(result);

false && console.log('hello');

const message = 5 && 'hello';
console.log(message);

const currency = undefined || 'USD';
console.log(currency);
