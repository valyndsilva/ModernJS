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


// // IV.Destructuring Assignment
let a, b;
[a, b] = [100, 200];
// Rest pattern
[a, b, c, ...rest] = [100, 200, 300, 400, 500];

({ a, b } = { a: 100, b: 200, c: 300, d: 400, e: 500 });
({ a, b, ...rest} = { a: 100, b: 200, c: 300, d: 400, e: 500 });

// Array Destructuring

// const people = ['John', 'Beth', 'Mike'];

// const [person1, person2, person3] = people;

// console.log(person1, person2, person3);

// Parse array returned from function
// function getPeople() {
//   return ['John', 'Beth', 'Mike'];
// }

// let person1, person2, person3;
// [person1, person2, person3] = getPeople();

// console.log(person1, person2, person3);

// Object Destructuring

const person = {
  name: 'John Doe',
  age: 32,
  city: 'Miami',
  gender: 'Male',
  sayHello: function(){
    console.log('Hello');
  }
}

// Old ES5
// const name = person.name,
//       age = person.age,
//       city = person.city;

// New ES6 Destructuring
const { name, age, city, sayHello } = person;

console.log(name, age, city);

sayHello();