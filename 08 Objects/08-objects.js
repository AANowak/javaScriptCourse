const product = { 
  name: 'socks',
  price: 1090
}

console.log(product);
console.log(typeof product);
console.log(product.name);
console.log(product.price);

product.name = 'blanket';
console.log(product);

product.newProperty = true;
console.log(product);

delete product.newProperty;
console.log(product);

/*Bracket Notation + Nested Objects*/
const product2 = {
  name: 'shirt',
  'delivery-time': '1 day',
  rating: {
    stars: 4.5,
    count: 87
  },
  fun: function function1() {
    console.log('function inside object');
  }
};

console.log(product2.name);
console.log(product2['name']);
console.log(product2['delivery-time']);

/*Accessing nestied objects*/ 
console.log(product2.rating.stars);
/*Method = Functions inside of an object*/
product2.fun();

/*JavaScript to JSON*/
console.log(JSON.stringify(product2));
/*JSON to JavaScript*/
const jsonString = JSON.stringify(product2);
console.log(JSON.parse(jsonString));

/*Auto-Boxing*/
console.log('hello'.length);
console.log('hello'.toUpperCase());

/*Copy by reference*/
const object1 = {
  message: 'hello'
};
const object2 = object1;

object1.message = 'Good job!';
console.log(object1);
console.log(object2);

const object3 = {
  message: 'Good job!'
};
console.log(object3 === object1);
console.log(object2 === object1);

/*shortcuts - destructuring, Shorthand Property, Shorthand Method*/
const object4 = {
  message: 'Good job!',
  price: 799
};

// const message = object4.message;
const {message, price} = object4;
console.log(message);
console.log(price);

const object5 = {
  //message: message
  message,
 // method: function function1() {
 //   console.log('method');
 // }
  method() {
    console.log('method');
  }
};
console.log(object5);
object5.method();
