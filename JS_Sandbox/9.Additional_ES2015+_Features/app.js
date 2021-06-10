// // // I.Iterator Example
// // function nameIterator(names) {
// //   let nextIndex = 0;

// //   return {
// //     next: function() {
// //       return nextIndex < names.length ?
// //       { value: names[nextIndex++], done: false } :
// //       { done: true }
// //     }
// //   }
// // }

// // // Create an array of names
// // const namesArr = ['Jack', 'Jill', 'John'];
// // // Init iterator and pass in the names array
// // const names = nameIterator(namesArr);

// // console.log(names.next().value);
// // console.log(names.next().value);
// // console.log(names.next().value);
// // console.log(names.next().value);

// // // II.Generator Example: Functions that can return multiple yield values. * makes it a generator
// // function* sayNames() {
// //   yield 'Jack';
// //   yield 'Jill';
// //   yield 'John';
// // }

// // const name = sayNames();

// // console.log(name.next().value);
// // console.log(name.next().value);
// // console.log(name.next().value);
// // console.log(name.next().value);

// // // ID Creator
// function* createIds() {
//     let index = 1;
  
//     while(true) {
//       yield index++;
//     }
//   }
  
//   const gen = createIds();
  
//   console.log(gen.next().value);
//   console.log(gen.next().value);
//   console.log(gen.next().value);
//   console.log(gen.next().value);
//   console.log(gen.next().value);
//   console.log(gen.next().value);

// // // III. Symbols 

// //Create a Symbol:
// // const sym1 = Symbol(); //Symbol() is a primitive value so you don't add 'new' before Symbol()
// // const sym2 = Symbol('sym2');
// // console.log(sym2);
// // console.log(typeof sym2);
// // console.log(Symbol() === Symbol()); // Symbols can never be the same. Returns false.
// // console.log(Symbol('123') === Symbol('123')); // Returns false.
// // console.log(`Hello ${sym1.toString()}`);
// // console.log(`Hello ${String(sym1)}`); //Shorter

// // // Unique Object Keys
// const KEY1 = Symbol();
// const KEY2 = Symbol('sym2');

// // Create an object
// const myObj = {};
// // // myObj.KEY1 = 'Prop1'; // it looks at KEY1 as a normal property if you use .
// myObj[KEY1] = 'Prop1'; // Use [] to look at KEY1 as a variable
// myObj[KEY2] = 'Prop2';
// // console.log(myObj[KEY1]);
// // console.log(myObj[KEY2]);

// myObj.key3 = 'Prop3';
// myObj.key4 = 'Prop4';

// // Symbols are not enumerable in for...in
// // for(let i in myObj) {
// //   console.log(`${i}: ${myObj[i]}`);
// // }

// // Symbols are ignored by JSON.stringify
// console.log(JSON.stringify({key: 'prop'})); // returns a json string - {key: 'prop'}
// console.log(JSON.stringify({[Symbol('sym1')]: 'prop'})); // return empty object - {}


// // // IV.Destructuring Assignment
// let a, b;
// [a, b] = [100, 200];

// // Rest pattern 
// [a, b, c, ...rest] = [100, 200, 300, 400, 500]; // ... is a spread operator
// console.log(b);
// //assigns remaining leftover into an array called rest
// console.log(rest);

// // Expression in ()
// ({ a, b } = { a: 100, b: 200, c: 300, d: 400, e: 500 });
// console.log(a,b);
// ({ a, b, ...rest} = { a: 100, b: 200, c: 300, d: 400, e: 500 });
// console.log(rest);

// // IVa.Array Destructuring

// // const people = ['John', 'Beth', 'Mike'];
// // const [person1, person2, person3] = people;
// // console.log(person1, person2, person3);

// // Parse an array returned from a function
// // function getPeople() {
// //   return ['John', 'Beth', 'Mike'];
// // }
// // let person1, person2, person3;
// // [person1, person2, person3] = getPeople();
// // console.log(person1, person2, person3);

// // IVb.Object Destructuring

// const person = {
//   name: 'John Doe',
//   age: 32,
//   city: 'Miami',
//   gender: 'Male',
//   sayHello: function(){
//     console.log('Hello');
//   }
// }

// // Old ES5
// // const name = person.name,
// //       age = person.age,
// //       city = person.city;

// // New ES6 Destructuring
// const { name, age, city, sayHello } = person;

// console.log(name, age, city);
// sayHello();


// // V. MAPS = key-value pairs - can use ANY type as a key or value

const map1 = new Map();

// Set Keys
const key1 = 'some string',
      key2 = {},
      key3 = function() {};

// Set map values by key
map1.set(key1, 'Value of key1');
map1.set(key2, 'Value of key2');
map1.set(key3, 'Value of key3');

// Get values by key
// console.log(map1.get(key1), map1.get(key2), map1.get(key3));

// Count values
// console.log(map1.size);

// ITERATING MAPS

// Loop using for...of to get keys and values
// for(let [key, value] of map1) {
//   console.log(`${key} = ${value}`);
// }

// Iterate keys only
// for(let key of map1.keys()) {
//   console.log(key);
// }

// Iterate values only
// for(let value of map1.values()) {
//   console.log(value);
// }

// Loop with forEach
// map1.forEach(function(value, key){
//   console.log(`${key} = ${value}`);
// });

// CONVERT TO ARRAYS

// Create an array of the key value pairs
const keyValArr = Array.from(map1);
console.log(keyValArr);

// Create an array of the values
const valArr = Array.from(map1.values());
console.log(valArr);

// Create an array of the keys
const keyArr = Array.from(map1.keys());
console.log(keyArr);