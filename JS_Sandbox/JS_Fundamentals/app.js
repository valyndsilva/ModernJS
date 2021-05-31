// alert("Hello World!");

/* 
Multi-line 
comments 
*/

//Log to console
console.log("Hello there!"); // string
console.log(123); // numbers
console.log(true); // boolean

var greeting = "Hello";
console.log(greeting); // variables

console.log([1, 2, 3, 4]); // arrays
console.log({ a: 1, b: 2 }); // object literals
console.table({ a: 1, b: 2 }); // object in a table(index,value)
console.error("This is some error"); // output an error
console.warn("This is a warning"); // warning output

// .time calculates the time from start to end to execute a script.
console.time("Hello");
console.log("1");
console.log("2");
console.log("3");
console.log("4");
console.log("5");
console.log("6");
console.timeEnd("Hello");

console.clear(); // clears the console

// Variables - var, let and const(ES2015/ES6). In modern JS it's best to use let and const. var is rarely used.

var name = "John Doe";
console.log(nameA);
nameA = "Steve Smith"; // We can reassign variables with var and let.
console.log(nameA);

// Init var
var greeting; // you can initialize var without a value & assign later.
console.log(greeting);
greeting = "Hello";
console.log(greeting);
// A var name can include letters, numbers, _, $ but cannot start with a number.

//Mutli-word var
var firstName = "John"; //  Camel case (Recommended convention)
var first_name = "Sara"; // Underscore
var FirstName = "Tom"; // Pascal case (Recommended convention in OOP, constructor functions, ES6 classes)
var firstname; //(Not Recommended)

// Let
let name1 = "John Doe";
console.log(name1);
name1 = "Steve Smith"; // We can reassign variables with var and let.
console.log(name1);

// Const
const name2 = "John Doe"; // We have to assign a value when we define a const variable.
console.log(name2);
//const greeting1; // This won't work.
//name2 = 'Steve Smith'; // We cannot reassign const variables.

const person = {
  name3: "John", //object literal
  age: 30,
};
console.log(person);
person.name3 = "Sara";
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
//It can only be mutated if it's an object or an array.

console.clear(); // clears the console

// Data Types: Primitive and Reference Data Types.

//Primitive: String, Number, Boolean, Null, Undefined, Symbols (ES6) (Stored on the stack directly in the location the variable accesses)

//Reference Data Types: Arrays, Object literals, Functions, Dates, etc. (accessed by reference. Objects that are stored on the heap. Pointer to a location in memory. ).

// JS is a dynamically typed language. Types are associated with values not variables. The same variable can hold multiple types and we don't need to specify types. 
// There are supersets of JS and addons to allow static typing (TypeScript, Flow).

//Primitive Data Types
const name4 = "John Doe"; // String
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

//Reference Data Types
const hobbies = ["movies", "music"]; // Array
console.log(typeof hobbies);
const address = {
  // Object literal
  city: "Boston",
  state: "MA",
};
console.log(typeof address);
const today = new Date(); // Date
console.log(today);
console.log(typeof today);

console.clear(); // clears the console

// Type Conversion: Taking a variable and changing the variables data type.

let val;

val = 5; //Number
console.log(val); //Output
console.log(typeof val); //Output Type
console.log(val.length); // length only works on string types as it is a string property.

val = String(55); //Number to string
console.log(val); //Output
console.log(typeof val); //Output Type
console.log(val.length);

val = String(4 + 4); //Expression to string
console.log(val); //Output
console.log(typeof val); //Output Type
console.log(val.length);

val = String(true); //Boolean to string
console.log(val); //Output
console.log(typeof val); //Output Type
console.log(val.length);

val = String(new Date()); //Date to string
console.log(val); //Output
console.log(typeof val); //Output Type
console.log(val.length);

val = String([1, 2, 3, 4]); //Array to string
console.log(val); //Output
console.log(typeof val); //Output Type
console.log(val.length);

//You can convert to string also using .toString() instead.
val = (5).toString(); // Number to string
console.log(val); //Output
console.log(typeof val); //Output Type
console.log(val.length);

val = true.toString(); //Boolean to string
console.log(val); //Output
console.log(typeof val); //Output Type
console.log(val.length);

val = Number("5"); //String to number
console.log(val); //Output
console.log(typeof val); //Output Type
console.log(val.toFixed(1));

val = Number(true); //Boolean to number
console.log(val); //Output
console.log(typeof val); //Output Type
console.log(val.toFixed());

val = Number(null); //null to number
console.log(val); //Output
console.log(typeof val); //Output Type
console.log(val.toFixed());

val = Number("hello"); //string to number
console.log(val); //Output
console.log(typeof val); //Output Type
console.log(val.toFixed());

val = Number([1, 2, 3]); //array to number
console.log(val); //Output
console.log(typeof val); //Output Type
console.log(val.toFixed());

val = parseInt("100"); // string to number
console.log(val); //Output
console.log(typeof val); //Output Type
console.log(val.toFixed());

val = parseInt("100.05"); // string to number
console.log(val); //Output
console.log(typeof val); //Output Type
console.log(val.toFixed());

val = parseFloat("100.053"); // string to number
console.log(val); //Output
console.log(typeof val); //Output Type
console.log(val.toFixed(2));

console.clear(); // clears the console

// Type Coercion
const val1 = String(5);
const val2 = 6;
const sum = Number(val1 + val2);
console.log(sum);
console.log(typeof sum);

console.clear(); // clears the console

// Numbers and Math Object
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
val3 = num1 % num2; //modulus gives the remainder after division
console.log(val3);

//Math Object (Math here is an object which has properties and methods. A property is an attribute while a method is a type of function inside of an object)
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
val3 = Math.random(); // generates a random decimal number
console.log(val3);
val3 = Math.floor(Math.random() * 20 + 1); // to generate a random whole number we use the random() method. In this case the max number we want is 20 we multiply it by 20. And to run the number from 1-20 we add a + 1 to the number. Next we round it down to get the whole number instead of a decimal number.
console.log(val3);

console.clear(); // clears the console

//String Methods & Concatenation
const yourName = "William";
const lastName = "Johnson";
const age3 = 30;

let val4;
val4 = yourName + lastName;

//Concatenation
val4 = yourName + " " + lastName;
console.log(val4);

val4 = "hello, my name is " + yourName + " and I am " + age3;
console.log(val4);

// concat
val4 = yourName.concat(" ", lastName);
console.log(val4);

//Append
val4 = "Maria";
console.log(val4);
val4 += " Silva";
console.log(val4);

//Escaping
val4 = "That's awesome, I can't wait";
console.log(val4);

//Length
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

//indexOf
val4 = yourName.indexOf("l");
console.log(val4);

//lastIndexOf
val4 = yourName.lastIndexOf("l");
console.log(val4);

// chartAt()
val4 = yourName.charAt("2");
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
const str = "Hello there my name is Maria.";
val4 = str.split(" "); // splits each word and separates it into an array
console.log(val4);

const tags = "web dev, web design, architect";
val4 = tags.split(",");
console.log(val4);

// replace
val4 = str.replace("Maria", "Valyn");
console.log(val4);

// includes()
val4 = str.includes("Hello");
console.log(val4);
val4 = str.includes("Maria");
console.log(val4);
val4 = str.includes("Valyn");
console.log(val4);

console.clear(); // clears the console

// Template Literals
const name5 = "Jackie";
const age4 = 30;
const job = "Web Developer";
const city = "Miami";

// without template strings (es5)
html =
  "<ul><li>Name: " +
  name5 +
  "</li><li>Age: " +
  age4 +
  " </li><li>Job: " +
  job +
  " </li><li>City: " +
  city +
  "</li></ul>";
console.log(html);
document.body.innerHTML = html;

html =
  "<ul>" +
  "<li>Name: " +
  name5 +
  "</li>" +
  "<li>Age: " +
  age4 +
  " </li>" +
  "<li>Job: " +
  job +
  " </li>" +
  "<li>City: " +
  city +
  "</li>" +
  "</ul>";
console.log(html);
document.body.innerHTML = html;

function hello() {
  return "hello";
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
<li>${age4 > 30 ? "Over 30" : "Under 30"}</li>
</ul>
`;
console.log(html);
document.body.innerHTML = html;

console.clear(); // clears the console

// Arrays and Array Methods
const numbers1 = [43, 56, 33, 23, 44, 36, 5];
const numbers2 = new Array(22, 45, 33, 76, 54);
const numbers3 = [43, 56, 33, 23, 44, 36, 5];
const fruit = ["Apple", "Banana", "Orange", "Pear"];
const mixed = [22, "Hello", true, undefined, null, { a: 1, b: 2 }, new Date()];

let val5;

//get array length
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

//Insert into array
numbers1[2] = 100;
console.log(numbers1);

// Find index of a value
val5 = numbers1.indexOf(36);
console.log(numbers1);
console.log(val5);

//Mutating Arrays
numbers1.push(250); // Add a number to the end
console.log(numbers1);
numbers1.unshift(120); // Add a number to the front
console.log(numbers1);
numbers1.pop(); // Remove a number from the end
console.log(numbers1);
numbers1.shift(); // Remove a number from the front
console.log(numbers1);
numbers1.reverse(); //Reverse the array order
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
val5 = numbers1.sort(function (x, y) {
  return x - y; // sorts in order
});
console.log(val5);
val5 = numbers1.sort(function (x, y) {
  return y - x; // gives the reverse sorted order
});
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
  hisName: "Steve", // properties
  hisLastName: "Smith",
  hisAge: 35,
  hisEmail: "steve@aol.com",
  hisHobbies: ["music", "sports"],
  hisAddress: {
    hisCity: "Miami",
    hisState: "FL",
  },
  getBirthYear: function () {
    return 1987;
  },
  getBirthYear1: function () {
    return 2017 - this.hisAge; // when inside an object you need to use .this keyword to access the properties. if you don't use .this you get an undefined value.
  },
};
let val6;
val6 = person1;
console.log(val6);
val6 = person1.hisName; // get specific value from the object (Recommended method)
console.log(val6);
val6 = person1["hisName"];
console.log(val6);
val6 = person1.hisAge;
console.log(val6);
val6 = person1.hisHobbies[1];
console.log(val6);
val6 = person1.hisAddress.hisState;
console.log(val6);
val6 = person1.hisAddress["city"];
console.log(val6);
val6 = person1.getBirthYear();
console.log(val6);
val6 = person1.getBirthYear1();
console.log(val6);

const people = [
  { name: "John", age: 30 },
  { name: "Jack", age: 31 },
  { name: "Jade", age: 32 },
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

let birthday = new Date("9-10-2010 11:25:00"); // MM-DD-YYYY
val7 = birthday;
console.log(val7);
birthday = new Date("September 10 2010");
val7 = birthday;
console.log(val7);
birthday = new Date("9/10/2010"); // MM-DD-YYYY
val7 = birthday;
console.log(val7);
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date

const today2 = new Date("12-2-2010"); // MM-DD-YYYY
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

const id = "100"; //(assigning operator)
// Equal To ==
if (id == 100) {
  // (== operator is a comparing operator) you should always check for the type and value) (Not Recommended Method)
  console.log("correct");
} else {
  console.log("incorrect");
}

// Equal To Value and Type ===
if (id === 100) {
  // checks if id is of string type and value 100
  // (=== operator check for the type and value (Recommended Method)
  console.log("correct");
} else {
  console.log("incorrect");
}

// Not Equal To !=
if (id != 101) {
  // (Not Recommended Method)
  // (!= operator)
  console.log("correct");
} else {
  console.log("incorrect");
}

// Not Equal To Value and Type !==
if (id !== 100) {
  // checks if id is not of string type and value 100
  // (!== operator check if not of the type and value (Recommended Method)
  console.log("correct");
} else {
  console.log("incorrect");
}

// Test if undefined
const id1 = "100";
// tests if id1 exists or not
if (typeof id1 !== "undefined") {
  console.log(`The ID is ${id1}`);
} else {
  console.log("No ID");
}
const id2 = 100;
// tests if id2 exists or not
if (typeof id2 !== "undefined") {
  // you get an error sometimes if you don't use typeof
  console.log(`The ID is ${id2}`);
} else {
  console.log("No ID");
}
// tests if id3 exists or not
if (typeof id3 !== "undefined") {
  console.log(`The ID is ${id3}`);
} else {
  console.log("No ID");
}

// Greater or Less than
if (id2 > 200) {
  console.log("correct");
} else {
  console.log("incorrect");
}
if (id2 > 100) {
  console.log("correct");
} else {
  console.log("incorrect");
}
if (id2 >= 100) {
  console.log("correct");
} else {
  console.log("incorrect");
}
if (id2 < 200) {
  console.log("correct");
} else {
  console.log("incorrect");
}
if (id2 < 100) {
  console.log("correct");
} else {
  console.log("incorrect");
}
if (id2 <= 100) {
  console.log("correct");
} else {
  console.log("incorrect");
}

// If Else statements
const color = "yellow";
if (color === "red") {
  console.log("Color is red");
} else if (color === "blue") {
  console.log("Color is blue");
} else {
  console.log("Color is not red or blue");
}

// Logical Operators
const name6 = "Steve";
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
console.log(id4 === 100 ? "correct" : "incorrect");

// Without Braces (Not Recommeneded but works)
if (id4 === 100) console.log("correct");
else console.log("incorrect");

console.clear(); // Clears console

// Switch Statements
const color1 = "red";
switch (color1) {
  case "red":
    console.log("Color is red");
    break;
  case "blue":
    console.log("Color is blue");
    break;
  default:
    console.log("Color is not red or blue");
    break;
}

let day1;

switch (new Date().getDay()) {
  case 0:
    day1 = "Sunday";
    break;
  case 1:
    day1 = "Monday";
    break;
  case 2:
    day1 = "Tuesday";
    break;
  case 3:
    day1 = "Wednesday";
    break;
  case 4:
    day1 = "Thursday";
    break;
  case 5:
    day1 = "Friday";
    break;
  case 6:
    day1 = "Saturday";
    break;
}
console.log(`today is ${day1}`);

console.clear(); // clears console.

// Function Declarations
function greet(firstName1, lastName1) {
  // console.log("hello");
  return "Hello " + firstName1 + " " + lastName1;
}
greet();
console.log(greet());
console.log(greet("John", "Doe"));

// Function Declarations (setting default value ES5 way)
function greet(firstName1, lastName1) {
  if (typeof firstName1 === "undefined") {
    // ES5 way of setting default value
    firstName1 = "Jackie";
  }
  if (typeof lastName1 === "undefined") {
    // ES5 way of setting default value
    lastName1 = "Jill";
  }
  // console.log("hello");
  return "Hello " + firstName1 + " " + lastName1;
}
greet();
console.log(greet());
console.log(greet("John", "Doe"));

// Function Declarations (setting default value ES6 way)
function greet(firstName1 = "Jackie", lastName1 = "Jill") {
  // console.log("hello");
  return "Hello " + firstName1 + " " + lastName1;
}
greet();
console.log(greet());
console.log(greet("John", "Doe"));

// Function Expressions
const square = function (x = 3) {
  return x * x;
};
console.log(square());
console.log(square(8));

// IFFEs (immediately invokable function expressions) define anonymous function in (). Module Patterns make use of IFFEs.
(function () {
  console.log("IFFE Ran...");
})();

(function (xyz) {
  console.log("Hello " + xyz + "!");
})("Maria");

//Property Methods (functions can be added inside of objects and are known as methods)
const todo = {
  add: function () {
    console.log("Add todo..");
  },
  edit: function (id5) {
    console.log(`Edit todo ${id5}`);
  },
};
todo.add();
todo.edit(2);
// You can also define functions for the object outside the loop
todo.delete = function () {
  console.log("delete todo..");
};
todo.delete();

console.clear(); // clears console

// General Loops
//For Loop
for (let i = 0; i <= 10; i++) {
  console.log("Number " + i);
}
//Break out of the for loop example
for (let i = 0; i <= 10; i++) {
  if (i === 2) {
    console.log("2 is my lucky number");
  }
  if (i === 3) {
    console.log("3 is my favorite number");
    continue; // using continue lets execute the next number directly
  }
  if (i === 6) {
    console.log("Stop the loop");
    break;
  }
  console.log("Number " + i);
}

//While Loop
let i = 0;
while (i < 10) {
  console.log("Number " + i);
  i++;
}

//Do While Loop (its always going to run once no matter what)
let j = 100;
do {
  console.log("Number " + j);
  j++;
} while (j < 10);

let k = 0;
do {
  console.log("Number " + k);
  k++;
} while (k < 10);

// Loop through arrays easily using for and forEach loop
const cars = ["Ford", "Mazda", "Honda", "Toyota"];
for (let i = 0; i < cars.length; i++) {
  console.log(cars[i]);
}
//forEach Loop (Recommended Method)
cars.forEach(function (car) {
  console.log(car);
});

cars.forEach(function (car, index) {
  console.log(`${index}:${car}`);
});

cars.forEach(function (car, index, array) {
  console.log(`${index}:${car}`);
  console.log(array);
});

//Map (returns a different array)
const users = [
  { id: 1, name: "Jack" },
  { id: 2, name: "Jill" },
  { id: 3, name: "Jacob" },
];
const ids = users.map(function (user) {
  return user.id;
});
console.log(ids);

// For in Loop
const user = {
  firstName2: "Jackie",
  lastName2: "Doe",
  age2: 40,
};
for (let x in user) {
  console.log(`${x}:${user[x]}`);
}

console.clear(); // clears console

// Window Methods / Windows Object / Windows Properties
//type window in  to see the different options

//console.log(123);

//Alert
//alert('Hi there!');

//Prompt
//const input = prompt();
//alert(input);

//Confirm
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

//Scroll points
val8 = window.scrollY; //(vertical scroll)
console.log(val8);
val8 = window.scrollX; //(horizontal scroll)
console.log(val8);

//Location object
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

//Redirect
//val8 = window.location.href = "http://google.com";

//Reload
//window.location.reload(); //Normally used within a function

//History object
//window.history.go(); // surf through random urls and then add in a value example: .go(-1)
val8 = history.length;
console.log(val8);

//Navigator Object (deals with the browser itself)
val8 = window.navigator;
val8 = window.navigator.appName;
val8 = window.navigator.appVersion;
val8 = window.navigator.userAgent;
val8 = window.navigator.platform;
val8 = window.navigator.vendor;
val8 = window.navigator.language;
console.log(val8);

console.clear(); // clears console

//Block Scope with let and const
//var has a function scope and affects the output easily
//let and const has a block level scope

//Global Scope
var a = 1;
let b = 2;
const c = 3;

function test1() {
  var a = 4;
  let b = 5;
  const c = 6;
  console.log("Function Scope:", a, b, c);
}

console.log("Global Scope:", a, b, c);

if (true) {
  //Block Scope
  var a = 4; // var gets affected by block scope value
  let b = 5; // let and const don't get affected by block scope value in output
  const c = 6;
  console.log("If Scope:", a, b, c); //4,5,6
}

console.log("Global Scope:", a, b, c); //4,2,3

for (let a = 0; a < 10; a++) {
  console.log(`loop:${a}`);
}

console.log("Global Scope:", a, b, c); //4,2,3

for (var a = 0; a < 5; a++) {
  console.log(`loop:${a}`);
}

console.log("Global Scope:", a, b, c); //10,2,3
