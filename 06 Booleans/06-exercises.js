/*6a - 6c*/
let hour = Math.round(Math.random() * 24);

if (hour) {

}

const name = 'Adrianna';

if (hour >= 6 && hour <= 12) {
  console.log(`Time: ${hour} Good morning, ${name}!`);
} else if (hour >= 13 && hour <= 17) {
  console.log(`Time: ${hour} Good afternoon, ${name}!`);
} else {
  console.log(`Time: ${hour} Good night, ${name}!`);
}

/*6d - 6e*/
let age = 29;
const isHoliday = true;

if ((age < 6 || age > 65) && !isHoliday) {
  console.log('Discount.');
} else {
  console.log('No discount.')
}
