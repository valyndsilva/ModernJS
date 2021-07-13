//INTRODUCTION:
// Single line comment
/* 
Multi-line 
comments 
*/
// alert("Hello World!");

// console.log():
console.log('Hi there!'); // Prints: Hi there!
console.log('Hello there!'); // string
console.log(123); // numbers
console.log(true); // boolean

// String Concatenation and String Interpolation:
// String Concatenation: multiple strings can be concatenated together using the + operator. 
let service = 'credit card';
let month = 'May 30th'; 
let displayText = 'Your ' + service  + ' bill is due on ' +  month + '.';
console.log(displayText); // Prints: Your credit card bill is due on May 30th.

// String interpolation: process of evaluating string literals containing one or more placeholders (expressions, variables, etc).
// It can be performed using template literals: text ${expression} text.
let age = 7;
// String concatenation
'Tommy is ' + age + ' years old.';
// String interpolation
`Tommy is ${age} years old.`;

// Template Literals:
// Template literals are strings that allow embedded expressions, ${expression}. While regular strings use single ' or double " quotes, template literals use backticks instead.
let name1 = "Codecademy";
console.log(`Hello, ${name1}`); 
// Prints: Hello, Codecademy
console.log(`Billy is ${6+8} years old.`); 
// Prints: Billy is 14 years old.

// Value And Variables: 
// Value is either Object Type or Primitive Type (Everything else)
// Variables are used whenever there’s a need to store a piece of data. A variable contains data that can be used in the program elsewhere. Using variables also ensures code re-usability since it can be used to replace the same value in multiple places.

// To declare a variable in JavaScript, any of these three keywords can be used along with a variable name:
// var is used in pre-ES6 versions of JavaScript.
// let is the preferred way to declare a variable when it can be reassigned.
// const is the preferred way to declare a variable with a constant value.

// let Keyword
// let creates a local variable in JavaScript & can be re-assigned. Initialization during the declaration of a let variable is optional. A let variable will contain undefined if nothing is assigned to it.
let count; 
console.log(count); // Prints: undefined
count = 10;
console.log(count); // Prints: 10

// const Keyword
// A constant variable can be declared using the keyword const. It must have an assignment. Any attempt of re-assigning a const variable will result in JavaScript runtime error.
const numberOfColumns = 4;
numberOfColumns = 8;
// TypeError: Assignment to constant variable.

const greeting = 'Hello';
console.log(greeting); // variables
console.log([1, 2, 3, 4]); // arrays
console.log({ a: 1, b: 2 }); // object literals
console.table({ a: 1, b: 2 }); // object in a table(index,value)
console.error('This is some error'); // output an error
console.warn('This is a warning'); // warning output

// .time calculates the time from start to end to execute a script.
console.time('Hello');
console.log('1');
console.log('2');
console.log('3');
console.log('4');
console.log('5');
console.log('6');
console.timeEnd('Hello');

console.clear(); // clears the console

// Variables - var, let and const(ES2015/ES6). In modern JS it's best to use let and const. var is rarely used.
// Variables are used whenever there’s a need to store a piece of data. 
// A variable contains data that can be used in the program elsewhere. 
// Using variables also ensures code re-usability since it can be used to replace the same value in multiple places.
const nameA = 'John Doe';
console.log(nameA);
nameA = 'Steve Smith'; // We can reassign variables with var and let.
console.log(nameA);

// Init var
let greetings; // you can initialize var without a value & assign later.
console.log(greetings);
greetings = 'Hello';
console.log(greetings);
// var and let can include letters, numbers, _, $ but cannot start with a number, reserved variable names 'function' and 'name'.
// Constants are written in uppercase. Ex: let PI = 3.145;

// Mutli-word var
const firstName = 'John'; //  Camel case (Recommended convention)
const first_name = 'Sara'; // Underscore
const FirstName = 'Tom'; // Pascal case (Recommended convention in OOP, constructor functions, ES6 classes)
let firstname; // (Not Recommended)

// Let
let name1 = 'John Doe';
console.log(name1);
name1 = 'Steve Smith'; // We can reassign variables with var and let.
console.log(name1);

// Const
const name2 = 'John Doe'; // We have to assign a value when we define a const variable.
console.log(name2);
// const greeting1; // This won't work.
// name2 = 'Steve Smith'; // We cannot reassign const variables.

const person = {
    name3: 'John', // object literal
    age: 30,
};
console.log(person);
person.name3 = 'Sara';
console.log(person); // we can reassign the variables inside the person object. But we cannot reassign the person object.
person.age = 32;
console.log(person);

const numbers = [1, 2, 3, 4, 5];
console.log(numbers);
numbers.push(6);
console.log(numbers);
// numbers = [1,2,3,4,5,6]; // This won't work.
console.log(numbers);

// Important Note: By default we should use const, unless you need to change the value, initailize, use in an iterator or loop. Using const alerts the developer that the value cannot be re-assigned.
// It can only be mutated if it's an object or an array.

// JS has dynamic typing so you don't need to manually define data types of the value stored in a variable. Instead, datatypes are determined automatically. The value holds the data type and not the variable.

console.clear(); // clears the console

// Data Types: Primitive and Reference Data Types.

// Primitive: String, Number, Boolean, Null, Undefined, Symbols (ES6) (Stored on the stack directly in the location the variable accesses)
// Number: Floating point numbers (Used for decimals and integers)
// Strings: Sequence of Characters. (Used for text)
// Boolean: Logical primitive data type that can only be true or false. (Used for taking decisions)
// Undefined: Value taken by a variable that is not defined / empty value.
// Null: Null is a primitive data type. It represents the intentional absence of value. In code, it is represented as null. Ex: let x = null;
// Symbol (ES2015 / ES6): Value that is unique and cannot be changed.
// BigInt (ES2020): Larger integers than Number type can hold.

// Reference Data Types: Arrays, Object literals, Functions, Dates, etc. (accessed by reference. Objects that are stored on the heap. Pointer to a location in memory. ).

// JS is a dynamically typed language. Types are associated with values not variables. The same variable can hold multiple types and we don't need to specify types.
// There are supersets of JS and addons to allow static typing (TypeScript, Flow).

// Primitive Data Types
const name4 = 'John Doe'; // String
console.log(typeof name4);
const age1 = 30; // Number
console.log(typeof age1);
const hasKids = true; // Boolean
console.log(typeof hasKids);
const car = null; // Null
console.log(typeof car);
let test; // Undefined
console.log(typeof test);
const sym = Symbol(); // Symbol
console.log(typeof sym);

// Reference Data Types
const hobbies = ['movies', 'music']; // Array
console.log(typeof hobbies);
const address = {
    // Object literal
    city: 'Boston',
    state: 'MA',
};
console.log(typeof address);
const today = new Date(); // Date
console.log(today);
console.log(typeof today);

console.clear(); // clears the console

// String .length:
// The .length property of a string returns the number of characters that make up the string.
let message = 'good nite';
console.log(message.length); // Prints: 9
console.log('howdy'.length); // Prints: 5


// Type Conversion: Taking a variable and changing the variables data type.
let val;
val = 5; // Number
console.log(val); // Output
console.log(typeof val); // Output Type
console.log(val.length); // length only works on string types as it is a string property.

val = String(55); // Number to string
console.log(val); // Output
console.log(typeof val); // Output Type
console.log(val.length);

val = String(4 + 4); // Expression to string
console.log(val); // Output
console.log(typeof val); // Output Type
console.log(val.length);

val = String(true); // Boolean to string
console.log(val); // Output
console.log(typeof val); // Output Type
console.log(val.length);

val = String(new Date()); // Date to string
console.log(val); // Output
console.log(typeof val); // Output Type
console.log(val.length);

val = String([1, 2, 3, 4]); // Array to string
console.log(val); // Output
console.log(typeof val); // Output Type
console.log(val.length);

// You can convert to string also using .toString() instead.
val = (5).toString(); // Number to string
console.log(val); // Output
console.log(typeof val); // Output Type
console.log(val.length);

val = true.toString(); // Boolean to string
console.log(val); // Output
console.log(typeof val); // Output Type
console.log(val.length);

val = Number('5'); // String to number
console.log(val); // Output
console.log(typeof val); // Output Type
console.log(val.toFixed(1));

val = Number(true); // Boolean to number
console.log(val); // Output
console.log(typeof val); // Output Type
console.log(val.toFixed());

val = Number(null); // null to number
console.log(val); // Output
console.log(typeof val); // Output Type
console.log(val.toFixed());

val = Number('hello'); // string to number
console.log(val); // Output
console.log(typeof val); // Output Type
console.log(val.toFixed());

val = Number([1, 2, 3]); // array to number
console.log(val); // Output
console.log(typeof val); // Output Type
console.log(val.toFixed());

val = parseInt('100'); // string to number
console.log(val); // Output
console.log(typeof val); // Output Type
console.log(val.toFixed());

val = parseInt('100.05'); // string to number
console.log(val); // Output
console.log(typeof val); // Output Type
console.log(val.toFixed());

val = parseFloat('100.053'); // string to number
console.log(val); // Output
console.log(typeof val); // Output Type
console.log(val.toFixed(2));

console.log(typeof null); // Returns an object which is a bug in JS but is not corrected due to legacy reasons. It should be of type null.

console.clear(); // clears the console

// Type Coercion
const val1 = String(5);
const val2 = 6;
const sum = Number(val1 + val2);
console.log(sum);
console.log(typeof sum);

console.clear(); // clears the console

// OPERATORS:

// Arithmetic Operators:
// Addition
5 + 5
// Subtraction
10 - 5
// Multiplication
5 * 10
// Division
10 / 5
// Modulo
10 % 5

// Remainder / Modulo Operator:
// The remainder operator, sometimes called modulo, returns the number that remains after the right-hand number divides into the left-hand number as many times as it evenly can.
// calculates # of weeks in a year, rounds down to nearest integer
const weeksInYear = Math.floor(365/7);
// calcuates the number of days left over after 365 is divded by 7
const daysLeftOver = 365 % 7 ;
console.log("A year has " + weeksInYear + " weeks and " + daysLeftOver + " days");

// Assignment Operators
let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
x -= 4; //x = x - 4 = 9
x *= 4; //x = x * 4 = 100
x /= 3; //x = x / 3 = 5
x++; // x = x + 1
x--;
x--;
console.log(x);

// Logical Operator ||
// The logical OR operator || checks two values and returns a boolean. If one or both values are truthy, it returns true. If both values are falsy, it returns false.
true || false;        // true
10 > 5 || 10 > 20;    // true
false || false;       // false
10 > 100 || 10 > 20;  // false

// Logical Operator &&
// The logical AND operator && checks two values and returns a boolean. If both values are truthy, then it returns true. If one, or both, of the values is falsy, then it returns false.
true && true;      // true
1 > 2 && 2 > 1;    // false
true && false;     // false
4 === 4 && 3 > 1;  // true

// Logical Operator !
// The logical NOT operator ! can be used to do one of the following:
// Invert a Boolean value.
// Invert the truthiness of non-Boolean values.
let lateToWork = true;
let oppositeValue = !lateToWork;
console.log(oppositeValue); 
// Prints: false

// Ternary Operator ? :
// It accepts a condition followed by a ? operator, and then two expressions separated by a :. If the condition evaluates to truthy, the first expression is executed, otherwise, the second expression is executed.
let price = 10.5;
let day = "Monday";
day === "Monday" ? price -= 1.5 : price += 1.5;
console.log(day);
console.log(price);

// Comparison Operators (>, <, >=, <=)
// Comparison operators are used to comparing two values and return true or false depending on the validity of the comparison
1 > 3       // false
3 > 1       // true
250 >= 250  // true
1 === 1     // true
1 === 2     // false
1 === '1'   // false

const now = 2021
const ageVal = now - 1991;
const ageSel = now - 1988;
console.log(ageSel > ageVal); 
console.log(ageSel >= 18);
const isFullAge = ageSel >= 18;
console.log(now - 1991 < now - 1988);

// Important Note: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence
// Operators with higher precedence become the operands of operators with lower precedence.
// multiplication has higher precedence than addition

// CONDITIONALS:

// if Statement:
// An if statement accepts an expression with a set of parentheses:
// If the expression evaluates to a truthy value, then the code within its code body executes.
// If the expression evaluates to a falsy value, its code body will not execute.
const isMailSent = true;
if (isMailSent) {
  console.log('Mail sent to recipient');
}

// else Statement:
// An else block can be added to an if block or series of if-else if blocks. The else block will be executed only if the if condition fails.
const isTaskCompleted = false;
if (isTaskCompleted) {
  console.log('Task completed');
} else {
  console.log('Task incomplete');
}

// else if Clause:
// After an initial if block, else if blocks can each check an additional condition. 
// An optional else block can be added after the else if block(s) to run by default if none of the conditionals evaluated to truthy.
const size = 10;
 
if (size > 100) {
  console.log('Big');
} else if (size > 20) {
  console.log('Medium');
} else if (size > 4) {
  console.log('Small');
} else {
  console.log('Tiny');
}
// Print: Small

// Truthy and Falsy:
// In JavaScript, values evaluate to true or false when evaluated as Booleans.
// Values that evaluate to true are known as truthy
// Values that evaluate to false are known as falsy
// Falsy values include false, 0, empty strings, null undefined, and NaN. All other values are truthy.

// switch Statement
// The switch statements provide a means of checking an expression against multiple case clauses. If a case matches, the code inside that clause is executed.
// The case clause should finish with a break keyword. If no case matches but a default clause is included, the code inside default will be executed.
// Note: If break is omitted from the block of a case, the switch statement will continue to check against case values until a break is encountered or the flow is broken.
const food = 'salad';
switch (food) {
  case 'oyster':
    console.log('The taste of the sea 🦪');
    break;
  case 'pizza':
    console.log('A delicious pie 🍕');
    break;
  default:
    console.log('Enjoy your meal');
}
// Prints: Enjoy your meal

// FUNCTIONS:

// A function is a reusable set of statements to perform a task or calculate a value. Functions can be passed one or more values and can return a value at the end of their execution. In order to use a function, you must define it somewhere in the scope where you wish to call it.

// Defining the function:
function sum(num1, num2) {
  return num1 + num2;
}

// Calling functions:
// Functions can be called, or executed, elsewhere in code using parentheses following the function name. When a function is called, the code inside its function body runs. Arguments are values passed into a function when it is called.

// Calling the function:
sum(3, 6); // 9

// Function Parameters:
// Inputs to functions are known as parameters when a function is declared or defined. Parameters are used as variables inside the function body. When the function is called, these parameters will have the value of whatever is passed in as arguments. It is possible to define a function without parameters.
// The parameter is name
function sayHello(name) {
  return `Hello, ${name}!`;
}

// return Keyword:
// Functions return (pass back) values using the return keyword. return ends function execution and returns the specified value to the location where it was called. A common mistake is to forget the return keyword, in which case the function will return undefined by default.

// With return
function sum(num1, num2) {
  return num1 + num2;
}
 
// Without return, so the function doesn't output the sum
function sum(num1, num2) {
  num1 + num2;
}

// Function Declaration
// Function declarations are used to create named functions. These functions can be called using their declared name. Function declarations are built from:
// The function keyword.
// The function name.
// An optional list of parameters separated by commas enclosed by a set of parentheses ().
// A function body enclosed in a set of curly braces {}.
function add(num1, num2) {
  return num1 + num2;
}

// Anonymous Functions:
// Anonymous functions in JavaScript do not have a name property. They can be defined using the function keyword, or as an arrow function. See the code example for the difference between a named function and an anonymous function.

// Named function
function rocketToMars() {
  return 'BOOM!';
}
 
// Anonymous function
const rocketToMars = function() {
  return 'BOOM!';
}

// Function Expressions:
// Function expressions create functions inside an expression instead of as a function declaration. They can be anonymous and/or assigned to a variable.
const dog = function() {
  return 'Woof!';
}

// Arrow Functions (ES6)
// Arrow function expressions were introduced in ES6. These expressions are clean and concise. The syntax for an arrow function expression does not require the function keyword and uses a fat arrow => to separate the parameter(s) from the body.
// There are several variations of arrow functions:
// Arrow functions with a single parameter do not require () around the parameter list.
// Arrow functions with a single expression can use the concise function body which returns the result of the expression without the return keyword.
// Arrow function with two arguments 
const sum = (firstParam, secondParam) => { 
  return firstParam + secondParam; 
}; 
console.log(sum(2,5)); // Prints: 7 
 
// Arrow function with no arguments 
const printHello = () => { 
  console.log('hello'); 
}; 
printHello(); // Prints: hello
 
// Arrow functions with a single argument 
const checkWeight = weight => { 
  console.log(`Baggage weight : ${weight} kilograms.`); 
}; 
checkWeight(25); // Prints: Baggage weight : 25 kilograms.
 
 
// Concise arrow functions
const multiply = (a, b) => a * b; 
console.log(multiply(2, 30)); // Prints: 60 

// SCOPE:
// Scope is a concept that refers to where values and functions can be accessed. Various scopes include:
// Global scope: (a value/function in the global scope can be used anywhere in the entire program)
// File or module scope: (the value/function can only be accessed from within the file)
// Function scope (only visible within the function),
// Code block scope (only visible within a { ... } codeblock)

function myFunction() {
  
  var pizzaName = "Volvo";
  // Code here can use pizzaName
  
}
 
// Code here can't use pizzaName

// Block Scoped Variables:
// const and let are block scoped variables, meaning they are only accessible in their block or nested blocks. In the given code block, trying to print the statusMessage using the console.log() method will result in a ReferenceError. It is accessible only inside that if block.

const isLoggedIn = true;
 
if (isLoggedIn == true) {
  const statusMessage = 'User is logged in.';
}
console.log(statusMessage);  // Uncaught ReferenceError: statusMessage is not defined

// Global Variables:
// JavaScript variables that are declared outside of blocks or functions can exist in the global scope, which means they are accessible throughout a program. Variables declared outside of smaller block or function scopes are accessible inside those smaller scopes.
// Note: It is best practice to keep global variables to a minimum.

// Variable declared globally
const color = 'blue';
 
function printColor() {
  console.log(color);
}
printColor(); // Prints: blue

// ARRAYS:

// Arrays are lists of ordered, stored data. They can hold items that are of any data type. Arrays are created by using square brackets, with individual elements separated by commas.
// An array containing numbers
const numberArray = [0, 1, 2, 3];
 
// An array containing different data types
const mixedArray = [1, 'chicken', false];

// Index:
// Array elements are arranged by index values, starting at 0 as the first element index. Elements can be accessed by their index using the array name, and the index surrounded by square brackets.

// Accessing an array element
const myArray = [100, 200, 300];
 
console.log(myArray[0]); // 100
console.log(myArray[1]); // 200
console.log(myArray[2]); // 300

// Property .length:
// The .length property of a JavaScript array indicates the number of elements the array contains.
const numbers = [1, 2, 3, 4];
 
numbers.length // 4

// Method .push():
// The .push() method of JavaScript arrays can be used to add one or more elements to the end of an array. .push() mutates the original array returns the new length of the array.
// Adding a single element:
const cart = ['apple', 'orange'];
cart.push('pear'); 

// Adding multiple elements:
const numbers = [1, 2];
numbers.push(3, 4, 5);

// Method .pop():
// The .pop() method removes the last element from an array and returns that element.
const ingredients = ['eggs', 'flour', 'chocolate'];
 
const poppedIngredient = ingredients.pop(); // 'chocolate'
console.log(ingredients); // ['eggs', 'flour']

// Mutable Arrays:
// JavaScript arrays are mutable, meaning that the values they contain can be changed.
// Even if they are declared using const, the contents can be manipulated by reassigning internal values or using methods like .push() and .pop().
const names = ['Alice', 'Bob'];
 
names.push('Carl');
// ['Alice', 'Bob', 'Carl']

// LOOPS:
// A loop is a programming tool that is used to repeat a set of instructions. Iterate is a generic term that means “to repeat” in the context of loops. A loop will continue to iterate until a specified condition, commonly known as a stopping condition, is met.

// For Loop
// A for loop declares looping instructions, with three important pieces of information separated by semicolons ;:
// The initialization defines where to begin the loop by declaring (or referencing) the iterator variable
// The stopping condition determines when to stop looping (when the expression evaluates to false)
// The iteration statement updates the iterator each time the loop is completed
for (let i = 0; i < 4; i += 1) {
  console.log(i);
};
// Output: 0, 1, 2, 3

// Reverse Loop:
//A for loop can iterate “in reverse” by initializing the loop variable to the starting value, testing for when the variable hits the ending value, and decrementing (subtracting from) the loop variable at each iteration.

const items = ['apricot', 'banana', 'cherry'];
 
for (let i = items.length - 1; i >= 0; i -= 1) {
  console.log(`${i}. ${items[i]}`);
}
// Prints: 2. cherry
// Prints: 1. banana
// Prints: 0. apricot

// Looping Through Arrays:
// An array’s length can be evaluated with the .length property. This is extremely helpful for looping through arrays, as the .length of the array can be used as the stopping condition in the loop.
for (let i = 0; i < array.length; i++){
  console.log(array[i]);
}
// Output: Every item in the array

// Nested For Loop:
// A nested for loop is when a for loop runs inside another for loop.
// The inner loop will run all its iterations for each iteration of the outer loop.
for (let outer = 0; outer < 2; outer += 1) {
  for (let inner = 0; inner < 3; inner += 1) {
    console.log(`${outer}-${inner}`);
  }
}
 
/* 
Output:
0-0
0-1
0-2
1-0
1-1
1-2
*/

// While Loop
// The while loop creates a loop that is executed as long as a specified condition evaluates to true. The loop will continue to run until the condition evaluates to false. The condition is specified before the loop, and usually, some variable is incremented or altered in the while loop body to determine when the loop should stop.

while (condition) {
  // code block to be executed
}
 
let i = 0;
 
while (i < 5) {        
  console.log(i);
  i++;
}

// Do…While Statement
// A do...while statement creates a loop that executes a block of code once, checks if a condition is true, and then repeats the loop as long as the condition is true. They are used when you want the code to always execute at least once. The loop ends when the condition evaluates to false.

x = 0
i = 0
 
do {
  x = x + i;
  console.log(x)
  i++;
} while (i < 5); 
// Prints: 0 1 3 6 10

// Break Keyword:
// Within a loop, the break keyword may be used to exit the loop immediately, continuing execution after the loop body.
// Here, the break keyword is used to exit the loop when i is greater than 5.
for (let i = 0; i < 99; i += 1) {
  if (i > 5) {
     break;
  }
  console.log(i)
}
 
// Output: 0 1 2 3 4 5


// Numbers and Math Object:
const num1 = 100;
const num2 = 50;
let val3;

// Simple math with numbers
val3 = num1 + num2;
console.log(val3);
val3 = num1 - num2;
console.log(val3);
val3 = num1 * num2;
console.log(val3);
val3 = num1 / num2;
console.log(val3);
val3 = num1 % num2; // modulus gives the remainder after division
console.log(val3);

// Math Object (Math here is an object which has properties and methods. A property is an attribute while a method is a type of function inside of an object)
val3 = Math.PI;
console.log(val3);
val3 = Math.E; // Eulers number
console.log(val3);
val3 = Math.round(2.8);
console.log(val3);
val3 = Math.round(2.4);
console.log(val3);
val3 = Math.ceil(2.4); // to round up
console.log(val3);
val3 = Math.floor(2.8); // to round down
console.log(val3);
val3 = Math.sqrt(64);
console.log(val3);
val3 = Math.abs(-8);
console.log(val3);
val3 = Math.pow(8, 2);
console.log(val3);
val3 = Math.min(8, 2, 10, -3);
console.log(val3);
val3 = Math.max(8, 2, 10, -3);
console.log(val3);
// The Math.random() function returns a floating-point, random number in the range from 0 (inclusive) up to but not including 1.
val3 = Math.random(); // generates a random decimal number
console.log(val3);

//The Math.floor() function returns the largest integer less than or equal to the given number.
val3 = Math.floor(Math.random() * 20 + 1); 
console.log(val3);
// In this case the max number we want is 20 so we multiply it by 20. 
// And to run the number from 1-20 we add a + 1 to the number. Next we round it down to get the whole number instead of a decimal number.


console.clear(); // clears the console

// String Methods & Concatenation
const yourName = 'William';
const lastName = 'Johnson';
const age3 = 30;

let val4;
val4 = yourName + lastName;

// Concatenation
val4 = `${yourName} ${lastName}`;
console.log(val4);

val4 = `hello, my name is ${yourName} and I am ${age3}`;
console.log(val4);

// concat
val4 = yourName.concat(' ', lastName);
console.log(val4);

// Append
val4 = 'Maria';
console.log(val4);
val4 += ' Silva';
console.log(val4);

// Escaping
val4 = "That's awesome, I can't wait";
console.log(val4);

// Length
val4 = yourName.length;
console.log(val4);

// Change Cases
val4 = yourName.toUpperCase();
console.log(val4);
val4 = yourName.toLowerCase();
console.log(val4);

// To get a character of a string
val4 = yourName[2];
console.log(val4);

// indexOf
val4 = yourName.indexOf('l');
console.log(val4);

// lastIndexOf
val4 = yourName.lastIndexOf('l');
console.log(val4);

// chartAt()
val4 = yourName.charAt('2');
console.log(val4); // if the character your are searching for is not there you get a value -1.

// get last character of a string
val4 = yourName.charAt(yourName.length - 1); // very common formula used in JS
console.log(val4);

// substring()
val4 = yourName.substring(0, 4);
console.log(val4);

// slice (mostly used with arrays and strings)
val4 = yourName.slice(0, 4);
console.log(val4);
val4 = yourName.slice(-3); // slices the last 3
console.log(val4);

// split (it can split a string into an array based on a separator)
const str = 'Hello there my name is Maria.';
val4 = str.split(' '); // splits each word and separates it into an array
console.log(val4);

const tags = 'web dev, web design, architect';
val4 = tags.split(',');
console.log(val4);

// replace
val4 = str.replace('Maria', 'Valyn');
console.log(val4);

// includes()
val4 = str.includes('Hello');
console.log(val4);
val4 = str.includes('Maria');
console.log(val4);
val4 = str.includes('Valyn');
console.log(val4);

console.clear(); // clears the console

// Template Literals
const name5 = 'Jackie';
const age4 = 30;
const job = 'Web Developer';
const city = 'Miami';

// without template strings (es5)
html = `<ul><li>Name: ${name5}</li><li>Age: ${age4} </li><li>Job: ${job} </li><li>City: ${city}</li></ul>`;
console.log(html);
document.body.innerHTML = html;

html =
    `${'<ul>' + '<li>Name: '}${name5}</li>` +
    `<li>Age: ${age4} </li>` +
    `<li>Job: ${job} </li>` +
    `<li>City: ${city}</li>` +
    `</ul>`;
console.log(html);
document.body.innerHTML = html;

function hello() {
    return 'hello';
}

// with template strings / template literals (ES6 method)
html = `
<ul>
<li>Name: ${name5}</li>
<li>Age4: ${age4}</li>
<li>Job: ${job}</li>
<li>City: ${city}</li>
<li>${2 + 2}</li>
<li>${hello()}</li>
<li>${age4 > 30 ? 'Over 30' : 'Under 30'}</li>
</ul>
`;
console.log(html);
document.body.innerHTML = html;

console.clear(); // clears the console

// Arrays and Array Methods
const numbers1 = [43, 56, 33, 23, 44, 36, 5];
const numbers2 = new Array(22, 45, 33, 76, 54);
const numbers3 = [43, 56, 33, 23, 44, 36, 5];
const fruit = ['Apple', 'Banana', 'Orange', 'Pear'];
const mixed = [22, 'Hello', true, undefined, null, { a: 1, b: 2 }, new Date()];

let val5;

// get array length
val5 = numbers1.length;
console.log(numbers1);
console.log(val5);

// check if is array
val5 = Array.isArray(numbers1);
console.log(numbers1);
console.log(val5);

// Get single value
val5 = numbers1[3];
console.log(numbers1);
console.log(val5);

// Insert into array
numbers1[2] = 100;
console.log(numbers1);

// Find index of a value
val5 = numbers1.indexOf(36);
console.log(numbers1);
console.log(val5);

// Mutating Arrays
numbers1.push(250); // Add a number to the end
console.log(numbers1);
numbers1.unshift(120); // Add a number to the front
console.log(numbers1);
numbers1.pop(); // Remove a number from the end
console.log(numbers1);
numbers1.shift(); // Remove a number from the front
console.log(numbers1);
numbers1.reverse(); // Reverse the array order
console.log(numbers1);

// Splice values from the arrays (takes in from which index number to start and number of items to remove)
numbers1.splice(1, 2);
console.log(numbers1);

// Concatenate arrays
val5 = numbers1.concat(numbers2);
console.log(val5);

// Sorting arrays
val5 = fruit.sort();
console.log(val5);

console.log(numbers2);
val5 = numbers2.sort(); // not recommended way of sorting numbers as not right always
console.log(numbers2);
console.log(val5);

console.log(numbers1);
val5 = numbers1.sort(); // not recommended way of sorting numbers
console.log(numbers1);
console.log(val5);

// Recommended way of sorting numbers by using "compare function"
val5 = numbers1.sort(
    (x, y) => x - y, // sorts in order
);
console.log(val5);
val5 = numbers1.sort(
    (x, y) => y - x, // gives the reverse sorted order
);
console.log(val5);

// Find
function under50(num) {
    return num < 50;
}
val5 = numbers3.find(under50); // finds the 1st number from the array less than 50
console.log(val5);
function over50(num) {
    return num > 50;
}
val5 = numbers3.find(over50); // finds the 1st number from the array more than 50
console.log(val5);

console.clear(); // Clears the console.

// Object Literals
const person1 = {
    hisName: 'Steve', // properties
    hisLastName: 'Smith',
    hisAge: 35,
    hisEmail: 'steve@aol.com',
    hisHobbies: ['music', 'sports'],
    hisAddress: {
        hisCity: 'Miami',
        hisState: 'FL',
    },
    getBirthYear() {
        return 1987;
    },
    getBirthYear1() {
        return 2017 - this.hisAge; // when inside an object you need to use .this keyword to access the properties. if you don't use .this you get an undefined value.
    },
};
let val6;
val6 = person1;
console.log(val6);
val6 = person1.hisName; // get specific value from the object (Recommended method)
console.log(val6);
val6 = person1.hisName;
console.log(val6);
val6 = person1.hisAge;
console.log(val6);
val6 = person1.hisHobbies[1];
console.log(val6);
val6 = person1.hisAddress.hisState;
console.log(val6);
val6 = person1.hisAddress.city;
console.log(val6);
val6 = person1.getBirthYear();
console.log(val6);
val6 = person1.getBirthYear1();
console.log(val6);

const people = [
    { name: 'John', age: 30 },
    { name: 'Jack', age: 31 },
    { name: 'Jade', age: 32 },
];
for (let i = 0; i < people.length; i++) {
    console.log(people[i].name);
}

console.clear(); // clears console

// Date and Time
let val7;
const today1 = new Date(); // initialize date object (by default its todays date if not instantiated)
val7 = today1;
console.log(typeof val7);
val7 = today1.toString(); // converts to String
console.log(typeof val7);

let birthday = new Date('9-10-2010 11:25:00'); // MM-DD-YYYY
val7 = birthday;
console.log(val7);
birthday = new Date('September 10 2010');
val7 = birthday;
console.log(val7);
birthday = new Date('9/10/2010'); // MM-DD-YYYY
val7 = birthday;
console.log(val7);
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date

const today2 = new Date('12-2-2010'); // MM-DD-YYYY
val7 = today2.getMonth(); // month here is counted from 0-11 so for december it would be 11
console.log(val7);
val7 = today1.getDate();
val7 = today1.getDay();
val7 = today1.getFullYear();
val7 = today1.getHours();
val7 = today1.getMinutes();
val7 = today1.getSeconds();
val7 = today1.getMilliseconds();
val7 = today1.getTime();
console.log(val7);

birthday.setMonth(2);
birthday.setDate(12);
birthday.setFullYear(1985);
birthday.setHours(3);
birthday.setMinutes(30);
birthday.setSeconds(25);
console.log(birthday);

console.clear(); // clears console.

// If statements and comparison operators
/*
if(something){
  do something
}
else{
  do something else
}
*/

const id = '100'; // (assigning operator)
// Equal To ==
if (id == 100) {
    // (== operator is a comparing operator) you should always check for the type and value) (Not Recommended Method)
    console.log('correct');
} else {
    console.log('incorrect');
}

// Equal To Value and Type ===
if (id === 100) {
    // checks if id is of string type and value 100
    // (=== operator check for the type and value (Recommended Method)
    console.log('correct');
} else {
    console.log('incorrect');
}

// Not Equal To !=
if (id != 101) {
    // (Not Recommended Method)
    // (!= operator)
    console.log('correct');
} else {
    console.log('incorrect');
}

// Not Equal To Value and Type !==
if (id !== 100) {
    // checks if id is not of string type and value 100
    // (!== operator check if not of the type and value (Recommended Method)
    console.log('correct');
} else {
    console.log('incorrect');
}

// Test if undefined
const id1 = '100';
// tests if id1 exists or not
if (typeof id1 !== 'undefined') {
    console.log(`The ID is ${id1}`);
} else {
    console.log('No ID');
}
const id2 = 100;
// tests if id2 exists or not
if (typeof id2 !== 'undefined') {
    // you get an error sometimes if you don't use typeof
    console.log(`The ID is ${id2}`);
} else {
    console.log('No ID');
}
// tests if id3 exists or not
if (typeof id3 !== 'undefined') {
    console.log(`The ID is ${id3}`);
} else {
    console.log('No ID');
}

// Greater or Less than
if (id2 > 200) {
    console.log('correct');
} else {
    console.log('incorrect');
}
if (id2 > 100) {
    console.log('correct');
} else {
    console.log('incorrect');
}
if (id2 >= 100) {
    console.log('correct');
} else {
    console.log('incorrect');
}
if (id2 < 200) {
    console.log('correct');
} else {
    console.log('incorrect');
}
if (id2 < 100) {
    console.log('correct');
} else {
    console.log('incorrect');
}
if (id2 <= 100) {
    console.log('correct');
} else {
    console.log('incorrect');
}

// If Else statements
const color = 'yellow';
if (color === 'red') {
    console.log('Color is red');
} else if (color === 'blue') {
    console.log('Color is blue');
} else {
    console.log('Color is not red or blue');
}

// Logical Operators
const name6 = 'Steve';
const age5 = 20;
const age6 = 70;
//  AND && ( both have to be true)
if (age5 > 0 && age5 < 12) {
    console.log(`${name6} is a child`);
} else if (age5 >= 13 && age5 <= 19) {
    console.log(`${name6} is a teenager`);
} else {
    console.log(`${name6} is an adult`);
}

//  OR || ( this or that has to be true)
if (age6 < 16 || age6 > 65) {
    console.log(`${name6} cannot run in the race`);
} else {
    console.log(`${name6} is registered and can run the race`);
}

// ternary operator
const id4 = 100;
console.log(id4 === 100 ? 'correct' : 'incorrect');

// Without Braces (Not Recommeneded but works)
if (id4 === 100) console.log('correct');
else console.log('incorrect');

console.clear(); // Clears console

// Switch Statements
const color1 = 'red';
switch (color1) {
    case 'red':
        console.log('Color is red');
        break;
    case 'blue':
        console.log('Color is blue');
        break;
    default:
        console.log('Color is not red or blue');
        break;
}

let day1;

switch (new Date().getDay()) {
    case 0:
        day1 = 'Sunday';
        break;
    case 1:
        day1 = 'Monday';
        break;
    case 2:
        day1 = 'Tuesday';
        break;
    case 3:
        day1 = 'Wednesday';
        break;
    case 4:
        day1 = 'Thursday';
        break;
    case 5:
        day1 = 'Friday';
        break;
    case 6:
        day1 = 'Saturday';
        break;
}
console.log(`today is ${day1}`);

console.clear(); // clears console.

// Function Declarations
function greet1(firstName1, lastName1) {
    // console.log("hello");
    return `Hello ${firstName1} ${lastName1}`;
}
greet1();
console.log(greet1());
console.log(greet1('John', 'Doe'));

// Function Declarations (setting default value ES5 way)
function greet2(firstName1, lastName1) {
    if (typeof firstName1 === 'undefined') {
        // ES5 way of setting default value
        firstName1 = 'Jackie';
    }
    if (typeof lastName1 === 'undefined') {
        // ES5 way of setting default value
        lastName1 = 'Jill';
    }
    // console.log("hello");
    return `Hello ${firstName1} ${lastName1}`;
}
greet2();
console.log(greet2());
console.log(greet2('John', 'Doe'));

// Function Declarations (setting default value ES6 way)
function greet(firstName1 = 'Jackie', lastName1 = 'Jill') {
    // console.log("hello");
    return `Hello ${firstName1} ${lastName1}`;
}
greet();
console.log(greet());
console.log(greet('John', 'Doe'));

// Function Expressions
const square = function (x = 3) {
    return x * x;
};
console.log(square());
console.log(square(8));

// IFFEs (immediately invokable function expressions) define anonymous function in (). Module Patterns make use of IFFEs.
(function () {
    console.log('IFFE Ran...');
})();

(function (xyz) {
    console.log(`Hello ${xyz}!`);
})('Maria');

// Property Methods (functions can be added inside of objects and are known as methods)
const todo = {
    add() {
        console.log('Add todo..');
    },
    edit(id5) {
        console.log(`Edit todo ${id5}`);
    },
};
todo.add();
todo.edit(2);
// You can also define functions for the object outside the loop
todo.delete = function () {
    console.log('delete todo..');
};
todo.delete();

console.clear(); // clears console

// General Loops
// For Loop
for (let i = 0; i <= 10; i++) {
    console.log(`Number ${i}`);
}
// Break out of the for loop example
for (let i = 0; i <= 10; i++) {
    if (i === 2) {
        console.log('2 is my lucky number');
    }
    if (i === 3) {
        console.log('3 is my favorite number');
        continue; // using continue lets execute the next number directly
    }
    if (i === 6) {
        console.log('Stop the loop');
        break;
    }
    console.log(`Number ${i}`);
}

// While Loop
let i = 0;
while (i < 10) {
    console.log(`Number ${i}`);
    i++;
}

// Do While Loop (its always going to run once no matter what)
let j = 100;
do {
    console.log(`Number ${j}`);
    j++;
} while (j < 10);

let k = 0;
do {
    console.log(`Number ${k}`);
    k++;
} while (k < 10);

// Loop through arrays easily using for and forEach loop
const cars = ['Ford', 'Mazda', 'Honda', 'Toyota'];
for (let i = 0; i < cars.length; i++) {
    console.log(cars[i]);
}
// forEach Loop (Recommended Method)
cars.forEach((car) => {
    console.log(car);
});

cars.forEach((car, index) => {
    console.log(`${index}:${car}`);
});

cars.forEach((car, index, array) => {
    console.log(`${index}:${car}`);
    console.log(array);
});

// Map (returns a different array)
const users = [
    { id: 1, name: 'Jack' },
    { id: 2, name: 'Jill' },
    { id: 3, name: 'Jacob' },
];
const ids = users.map((user) => user.id);
console.log(ids);

// For in Loop
const user = {
    firstName2: 'Jackie',
    lastName2: 'Doe',
    age2: 40,
};
for (const x in user) {
    console.log(`${x}:${user[x]}`);
}

console.clear(); // clears console

// Window Methods / Windows Object / Windows Properties
// type window in  to see the different options

// console.log(123);

// Alert
// alert('Hi there!');

// Prompt
// const input = prompt();
// alert(input);

// Confirm
/*
if (confirm("Are you sure?")) {
  console.log("yes");
} else {
  console.log("no");
}
*/

let val8;
// Outer height and width of browser
val8 = window.outerHeight;
console.log(val8);
val8 = window.outerWidth;
console.log(val8);

// Inner height and width of browser
val8 = window.innerHeight;
console.log(val8);
val8 = window.innerWidth;
console.log(val8);

// Scroll points
val8 = window.scrollY; // (vertical scroll)
console.log(val8);
val8 = window.scrollX; // (horizontal scroll)
console.log(val8);

// Location object
val8 = window.location;
console.log(val8);
val8 = window.location.hostname;
console.log(val8);
val8 = window.location.port;
console.log(val8);
val8 = window.location.href;
console.log(val8);
val8 = window.location.search; // shows you the query string at the end of the url.
console.log(val8);

// Redirect
// val8 = window.location.href = "http://google.com";

// Reload
// window.location.reload(); //Normally used within a function

// History object
// window.history.go(); // surf through random urls and then add in a value example: .go(-1)
val8 = history.length;
console.log(val8);

// Navigator Object (deals with the browser itself)
val8 = window.navigator;
val8 = window.navigator.appName;
val8 = window.navigator.appVersion;
val8 = window.navigator.userAgent;
val8 = window.navigator.platform;
val8 = window.navigator.vendor;
val8 = window.navigator.language;
console.log(val8);

console.clear(); // clears console

// Block Scope with let and const
// var has a function scope and affects the output easily
// let and const has a block level scope

// Global Scope
var a = 1;
const b = 2;
const c = 3;

function test1() {
    const a = 4;
    const b = 5;
    const c = 6;
    console.log('Function Scope:', a, b, c);
}

console.log('Global Scope:', a, b, c);

if (true) {
    // Block Scope
    var a = 4; // var gets affected by block scope value
    const b = 5; // let and const don't get affected by block scope value in output
    const c = 6;
    console.log('If Block Scope:', a, b, c); // 4,5,6
}

console.log('Global Scope:', a, b, c); // 4,2,3

for (let a = 0; a < 10; a++) {
    console.log(`loop:${a}`);
}

console.log('Global Scope:', a, b, c); // 4,2,3

for (var a = 0; a < 5; a++) {
    console.log(`loop:${a}`);
}

console.log('Global Scope:', a, b, c); // 10,2,3
