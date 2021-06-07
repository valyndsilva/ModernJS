// // ES5 Format
// const sayHello = function() {
//   console.log('Hello');
// }

// // Arrow Functions ES6 Format
// const sayHello = () => {
//   console.log('Hello');
// }

// // One line function does not need braces
// const sayHello = () => console.log('Hello');

// // One line returns
// const sayHello = () => 'Hello';

// Same as above ES5
// const sayHello = function() {
//   return 'Hello';
// }

// Return object
// const sayHello = () => ({ msg: 'Hello' });

// Single param does not need parenthesis ()
// const sayHello = name => console.log(`Hello ${name}`);

// Multiple params need parenthesis ()
// const sayHi = (firstName, lastName) => console.log(`Hello ${firstName} ${lastName}`);
// sayHi('Brad', 'Traversy');

//We can also use arrow functions as callbacks: 
const users = ['Nathan', 'John', 'William'];

// Using ES5
// const nameLengths = users.map(function(name) {
//   return name.length;
// });

// Shorter method using Arrow function
// const nameLengths = users.map((name) => {
// return name.length;
// });

// Shortest method using Arrow function
const nameLengths = users.map(name => name.length);
console.log(nameLengths);