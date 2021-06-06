// // Constructors & 'this' keyword
// // 'this' is used to access any properties or methods within a constructor
// // case 1: to deal with a single instance or 1 object you can use a object literal
// const selwyn = {
// name:'Selwyn',
// age: 33
// }
// console.log(selwyn);
// console.log(selwyn.name);
// console.log(selwyn.age);

// //case 2: for multiple instances of a certain type of object, prototypes, inheritance we need to use constructors
// function Person(name, age){ //Person constructor
//     this.name = name; // name is the property
//     this.age = age;
//     console.log(this); //'this' inside a constructor / function scope represents the current instance of the object
// }

// console.log(this); // 'this' inside a global scope (not inside of a function) gives you the window object

// //instantiate an object 
// const selwyn = new Person('Selwyn', 33);
// console.log(selwyn.age);


// // Ex: Method within a constructor
// function Person1(name1, dob) {
//     this.name1 = name1;
//     this.birthday = new Date(dob); 
//     //Create a method calculateAge (method: a function inside an object)
//     this.calculateAge = function(){ //
//       const diff =  Date.now() - this.birthday.getTime();
//       const ageDate = new Date(diff);
//       return Math.abs(ageDate.getUTCFullYear() - 1970); //Calculate age from a birthday
//     }
//   }
//   const chad = new Person('Chad', '12-10-1990');
//   console.log(chad.calculateAge());
  

// // Built-in Constructors: (Not used much)
// // String
// const name1 = 'Jeff';
// // console.log(name1);
// const name2 = new String('Jeff'); //built-in constructor
// console.log(name2); //returns string as an object

// //name2.foo = 'bar';
// // console.log(name2); //returns property of foo with a value bar

// console.log(typeof name1); //string
// console.log(typeof name2); //object

// if(name1 === 'Jeff'){
//     console.log('YES'); //returns YES (value is jeff and type is String)
//   } else {
//     console.log('NO');
//   }

// if(name2 === 'Jeff'){
//   console.log('YES');
// } else {
//   console.log('NO'); //returns NO (value is jeff but type is not String)
// }

// // Number
// const num1 = 5;
// const num2 = new Number(5); //built-in constructor
// console.log(num2); // Returns a number object
// console.log(typeof num2); //object

// // Boolean
// const bool1 = true;
// const bool2 = new Boolean(true); //built-in constructor
// console.log(bool2); //returns a boolean object
// console.log(typeof bool2); //object

// // Function
// const getSum1 = function(x, y){
//   return x + y;
// }
// console.log(getSum1(1,1));

// const getSum2 = new Function('x','y', 'return 1 + 1'); //built-in constructor
// console.log(getSum2(1,1));

// // Object
// const john1 = {name: "John"};
// const john2 = new Object({name: "John"}); //built-in constructor
// console.log(john2);

// // Arrays
// const arr1 = [1,2,3,4];
// const arr2 = new Array(1,2,3,4); //built-in constructor

// // Regular Expressions
// const re1 = /\w+/;
// const re2 = new RegExp('\\w+'); //built-in constructor
// console.log(re2);


// Prototypes:
// Each object in JS has a prototype. A prototype is an object itself. 
// All objects inherit their properties and methods from their prototypes.
// When you use object literals it inherits from Object.prototype
// When you use object created through a constructor ex:Person it inherits from Person.prototype
// Using prototypes helps avoid flooding constructors with too many functions. Instead the functions are stored into the prototype

// Person constructor
function Person(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthday = new Date(dob);
    // this.calculateAge = function(){
    //   const diff =  Date.now() - this.birthday.getTime();
    //   const ageDate = new Date(diff);
    //   return Math.abs(ageDate.getUTCFullYear() - 1970);
    // }
  }

  const john = new Person('John', 'Doe', '8-12-90');
  const mary = new Person('Mary', 'Johnson', 'March 20 1978');
  console.log(mary); 
  // 1st __proto__ is the Person.prototype.
  // 2nd __proto__ is the Object.prototype that has it's own properties and methods. Ex:hasOwnProperty (this returns true or false to confirm if it has a property in it)
  
  // Calculate age using prototype
  Person.prototype.calculateAge = function(){  //calculate age is moved into the prototype
    const diff =  Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }
    console.log(john.calculateAge());

  // Get full name using prototype
  Person.prototype.getFullName = function(){
    return `${this.firstName} ${this.lastName}`;
  }
  console.log(mary.getFullName());

  // Person gets married
  Person.prototype.getsMarried = function(newLastName){
    this.lastName = newLastName;
  }
  mary.getsMarried('Smith');
  console.log(mary.getFullName());
  console.log(mary.hasOwnProperty('firstName'));
  console.log(mary.hasOwnProperty('getFullName'));