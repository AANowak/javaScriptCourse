/*7a - 7c*/
      
function greet(name) {
  if (!name) {
    console.log('Hi there!');
  } else {
    console.log(`Hello, ${name}!`);
  }
}

greet();
greet('Adrianna');

/*7d - 7f
function to convert temperatures*/

function convertToFahrenheit(celsius) {
  return (celsius * 9 / 5) + 32;
}

console.log(convertToFahrenheit(40));

function convertToCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
}

console.log(convertToCelsius(86));

function convertTemperature(degree, unit) {
  if (unit === 'C') {
    console.log(convertToFahrenheit(degree));
  } else if (unit === 'F') {
    return convertToCelsius(degree);
  }
}

convertTemperature(25, 'C');
console.log(convertTemperature(86, 'F'));


/*7g - 7i
Function to convert between km, miles, ft*/

function convertLenght(lenght, from, to) {        
  
  if (from !== 'km' && from !== 'miles' && from !== 'ft') {
    return `Invalid unit: ${from}`;
  } else if (to !== 'km' && to !== 'miles' && to !== 'ft') {
    return `Invalid unit: ${to}`;
  }

  if (from === 'km') {
    if (to === 'miles') {
      return lenght / 1.6;
    } else if (to === 'ft') {
        return lenght * 3281;
    } else if (to === 'km') {
        return lenght;
    } 
  } else if (from === 'miles') {
    if (to === 'miles') {
      return lenght;
    } else if (to === 'ft') {
        return lenght * 5280;
    } else if (to === 'km') {
        return lenght * 1.6;
    }
  } else if (from === 'ft') {
    if (to === 'miles') {
      return lenght / 5280;
    } else if (to === 'ft') {
        return lenght;
    } else if (to === 'km') {
        return lenght / 3281;
    }
  }
}

console.log(convertLenght(50, 'miles', 'km'));
console.log(convertLenght(32, 'km', 'miles'));
console.log(convertLenght(50, 'km', 'km'));
console.log(convertLenght(5, 'miles', 'km'));
console.log(convertLenght(5, 'miles', 'ft'));
console.log(convertLenght(5, 'km', 'ft'));
console.log(convertLenght(5, 'lbs', 'lbs'));