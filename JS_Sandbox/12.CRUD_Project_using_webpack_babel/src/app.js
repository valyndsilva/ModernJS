// // app.js gets compiled down to ES5. The output gets saved into a folder 'build'
// const greeting = 'Hello World';
// console.log(greeting);

// // Common JS syntax:
// const person = require('./es2015modules.js');
// console.log(person.name);

// ES2015 Module syntax:
import { person, sayHello } from './es2015modules'; // Destructuring
console.log(person.name);
console.log(sayHello());

//To import evrything without having to specify each one:
import * as mod from './es2015modules'; // * -> all and give a name ex: mod.
console.log(mod.person.name); //you just need to use mod infront of it.
console.log(mod.sayHello());