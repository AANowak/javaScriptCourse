/*This uses Hoisting, allows to call function before it's written, won't work if function is inside of variable*/
function greeting(name) {
  console.log(`Hello, ${name}`);
}

greeting('Adrianna');

const num = 2;
/*Annonymous function*/
const function1 = function() {
  console.log('hello2');
};

console.log(function1);
console.log(typeof function1);

/*Function is a type of value, can be stored in variables and still be called*/
function1();

const object1 = {
  num: 2, 
  fun: function(){
    console.log('hello3');
  }
};

object1.fun();

function display(param) {
  console.log(param);
}

display(2);

/*Passing a function into a function*/

function run(param) {
  param();
}
run(function() {
  console.log('hello4');
});

/*Build-in function setTimeout(function to run, how long before running in ms), runs function in the future*/
setTimeout(function(){
  console.log('timeout');
  console.log('timeout2');
}, 3000);
/*Asynchronus code -> executes next line without waiting for timer to finish*/
console.log('next line');

/*setInterval(function to run in the future, time in ms), repeats use of function

setInterval(function() {
  console.log('interval')
}, 3000);*/

/*Loop thru array, preffered method*/

[
  'make dinner',
  'wash dishes',
  'watch youtube'
].forEach(function(value, index) {
  console.log(value, index);
});