// // // I.Error Handling with Try and Catch:
// // // Try and catch let you handle errors without stopping the entire script.

// // // Ex 1: without try and cath:
// // myFunc();
// // console.log('Program continues...'); // gives uncaught ReferenceError: myFunc not defined.

// // // Ex 2: uisng try and catch:
// // try{
// //     myFunc();
// // } catch(e) {
// //     console.log(e);
// // }
// // console.log('Program continues...'); //outputs error and console log

// // // Ex 3: 
// const user = {email: 'jdoe@gmail.com'};

// try {
// // try{} produces different types of errors:  
// // 1.Produce a ReferenceError
//   // myFunction();

// // 2.Produces a TypeError
//   // null.myFunction();

//   // // 3.Produces a SyntaxError
//   // eval('Hello World'); // evaluates javascript in a string

//   // // 4.Produces a URIError
//   // decodeURIComponent('%');

//   if(!user.name) {
//     // // throw 'User has no name';
//     throw new SyntaxError('User has no name');
//   }

// } catch(e) {
//   console.log(`User Error: ${e.message}`);
//   // console.log(e); //error
//   // console.log(e.message); // error message
//   // console.log(e.name); // error name
//    // console.log(e instanceof TypeError); // Check if ReferenceError. Returns true
//   // console.log(e instanceof TypeError); // Check if TypeError. Returns false
// } finally {
//   console.log('Finally runs regardless of result...'); // Runs no matter what the results is.
// }

// console.log('Program continues...');


// // II.Regular expressions: Evaluation Functions
// let re;
// re = /hello/;
// re = /hello/i; // i =  case insensitive
// // re = /hello/g; // Global search

// // 1.source()
// console.log(re);
// console.log(re.source); // just gives the expression between /  /

// // 2.exec() - Return result in an array or null
// const result = re.exec('hello world'); 
// console.log(result); //searches for the word 'hello'
// console.log(result[0]); // returns 'hello' the first word
// console.log(result.index);
// console.log(result.input); // returns the value passed in 'hello world'

// // 3.test() - Returns true or false if there is a match
// const result = re.test('Hello');
// console.log(result); //returns false since it has uppercase H in 'Hello'. you can use flag i for case insensitive to return true.

// // 4.match() - Return result array or null
// const str = 'Hello There';
// const result = str.match(re);
// console.log(result); 

// // 5.search() - Returns index of the first match if not found retuns -1
// const str = 'Brad Hello There';
// const result = str.search(re);
// console.log(result);

// // 6.replace() - Return new string with some or all matches of a pattern
// const str = 'Hello There';
// const newStr = str.replace(re, 'Hi');
// console.log(newStr); // returns 'Hi There'

// III.Regular expressions: Metacharacter Symbols
let re;
// Literal Characters
re = /hello/;
re = /hello/i;

// Metacharacter Symbols
re = /^h/i;           // Must start with
re = / world$/i;     // Must ends with
re = /^hello$/i;     // Must begin and end with
re = /h.llo/i;      // Matches any ONE character
re = /h*llo/i;      // Matches any character 0 or more times
re = /gre?a?y/i;    // Optional character
re = /gre?a?y\?/i;    // Escape character 


// Brackets [] - Character Sets
re = /gr[ae]y/i;      // Must be an a or e
re = /[GF]ray/i;      // Must be a G or F
re = /[^GF]ray/i;      // Match anything except a G or F
re = /[A-Z]ray/;      // Match any uppercase letter
re = /[a-z]ray/;      // Match any lowercase letter
re = /[A-Za-z]ray/;   // Match any  letter
re = /[0-9][0-9]ray/;      // Match any digit

// Braces {} - Quantifiers
re = /Hel{2}o/i;      // Must occur exactly {m} amount of times - character before {m}
re = /Hel{2,4}o/i;      // Must occur exactly {m} amount of times
re = /Hel{2,}o/i;      // Must occur at least {m} times

// Paretheses () - Grouping
re = /^([0-9]x){3}$/

// // String to match
// const str = '3x3x3x';

// Shorthand Character Classes
re = /\w/;    // Word character \w is alphanumeric(any letter or number or _)
re = /\w+/;    // + = one or more word character
re = /\W/;    // Non-Word character \W (anything but a letter or number or _)
re = /\d/;    // Match any digit \d
re = /\d+/;    // Match any digit 0 or more times
re = /\D/;      // Match any Non-digit \D
re = /\s/;      // Match whitespace char \s
re = /\S/;      // Match non-whitespace char \S
re = /Hell\b/i; // Word boundary

// Assertions
re = /x(?=y)/;  // Match x only if followed by y
re = /x(?!y)/;  // Match x only if NOT followed by y

// String to match
const str = 'dkjekdxydjekdj';

// Log Results
const result = re.exec(str);
console.log(result);

function reTest(re, str) {
  if(re.test(str)) {
    console.log(`${str} matches ${re.source}`);
  } else {
    console.log(`${str} does NOT match ${re.source}`);
  }
}

reTest(re, str);