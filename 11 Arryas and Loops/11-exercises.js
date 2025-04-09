/* 11b */

function getLastValue(array) {
  const lastIndex = array.length - 1;
  return array[lastIndex];
}
console.log(getLastValue([1, 20, 22, 24, 5]));
console.log(getLastValue(['hi', 'traveler', 'hello', 'hey', 'wandering']));

/* 11c */

function arraySwap(array) {
  const lastIndex = array.length - 1;
  const lastValue = array[lastIndex];
  const firstValue = array[0];

  array[0] = lastValue;
  array[lastIndex] = firstValue;

  return array;
}

console.log(arraySwap([1, 20, 33, 20, 89]));
console.log(arraySwap(['hi', 'bye', 'John', 'Steve']));

/* 11d-11f 

for (let i = 0; i <= 10; i += 2) {
  console.log(i);
}

for (let i = 5; i >= 0; i--) {
  console.log(i);
}

let i = 0;

while (i <= 10) {
  console.log(i);
  i += 2;
}

let i2 = 5;

while (i2 >= 0) {
  console.log(i2);
  i2--;
}
*/

/* 11a + 11g */
const nums = [10, 20, 30];
nums[2] = 99;

console.log(nums);
let addToNums = [];

for (let i = 0; i < nums.length; i++) {
  const num = nums[i];
  addToNums.push(num + 1);
}
console.log(addToNums);


/*11h*/
function addOne(array) {
  let addToArray = [];
  for (let i = 0; i < array.length; i++) {
  const num = array[i];
  addToArray.push(num + 1);
 }
 return addToArray;
}

console.log(addOne([1, 2,3]));
console.log(addOne([-2, -1, 0, 99]));

/*11i*/

function addNum(array, num) {
  let addedArray = [];
  for (let i = 0; i < array.length; i++) {
    const index = array[i];
    addedArray.push(index + num);
  }
  return addedArray;
}
console.log(addNum([1, 2, 3], 2));
console.log(addNum([1, 2, 3], 3));
console.log(addNum([-2, -1, 0, 99], 2))


/*11j*/

function addArrays(array1, array2) {
  let result = [];
  for (i = 0; i < array1.length; i++) {
    result.push(array1[i] + array2[i]);
  }
  
  return result;
}

console.log(addArrays([1, 1, 2], [1, 1, 3]));
console.log(addArrays([1, 2, 3], [4, 5, 6]));

/*11k*/

function countPositive(nums) {
  let positives = 0;
  for (let i = 0; i < nums.length; i++) {
    const index = nums[i];
    if (index >= 0) {
      positives++;
    }
  }

  return positives;
}

console.log(countPositive([1, -3, 5]));
console.log(countPositive([-2, 3, -5, 7, 10]));

/*11o-11q, combined*/

function findIndex(array, word) {
  for(let i = 0; i < array.length; i++) {
    const value = array[i];
    if (value === word) {
      return i;
    }
  }
  return -1;
}

console.log(findIndex(['chips', 'fries', 'milk', 'lettuce'], 'milk'));
console.log(findIndex(['red', 'blue', 'red'], 'red'));
console.log(findIndex(['red', 'blue', 'red'], 'yellow'));

/*11w*/



/*11r-11u*/

function removeEgg(foods) {
  const foodsValues = foods.slice();
  const reversedFoods = foodsValues.reverse();
  const result = [];
  let eggsRemoved = 0;

  for(let i = 0; i < reversedFoods.length; i++) {
    if(reversedFoods[i] === 'egg' && eggsRemoved < 2) {
      eggsRemoved++;
      continue;
    }
    result.push(reversedFoods[i]);
  }
  return result.reverse();
}

const foods = ['egg', 'apple', 'egg', 'egg', 'ham'];
console.log(removeEgg(foods));
console.log(foods);

/*11v*/

for(i = 1; i <= 20; i++) {
  if(i % 3 === 0 && i % 5 === 0) {
    console.log('FizzBuzz');
  } else if(i % 5 === 0) {
    console.log('Buzz');
  } else if(i % 3 === 0) {
    console.log('Fizz');
  } else {
    console.log(i);
  }
}