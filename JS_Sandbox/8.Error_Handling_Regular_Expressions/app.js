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


// // II.Regular expressions
let re;
re = /hello/;
re = /hello/i; // i =  case insensitive
// re = /hello/g; // Global search

// console.log(re);
// console.log(re.source); // just gives the expressins between / /

// // 1.exec() - Return result in an array or null
// const result = re.exec('hello world'); 
// console.log(result); //searches for the word 'hello'
// console.log(result[0]); // returns 'hello'
// console.log(result.index);
// console.log(result.input); // returns the value passed in 'hello world'

// // 2.test() - Returns true or false if there is a match
// const result = re.test('Hello');
// console.log(result); //returns false since it has uppercase H in 'Hello'. you can use flag i for case insensitive to return true.

// // 3.match() - Return result array or null
// const str = 'Hello There';
// const result = str.match(re);
// console.log(result); 

// 4.search() - Returns index of the first match if not found retuns -1
// const str = 'Brad Hello There';
// const result = str.search(re);
// console.log(result);

// 5.replace() - Return new string with some or all matches of a pattern
// const str = 'Hello There';
// const newStr = str.replace(re, 'Hi');
// console.log(newStr);
