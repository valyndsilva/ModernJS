//Constructors & 'this' keyword
//'this' is used to access any properties or methods within a constructor
//case 1: to deal with a single instance or 1 object you can use a object literal
// const selwyn = {
// name:'Selwyn',
// age: 33
// }
// console.log(selwyn);
// console.log(selwyn.name);
// console.log(selwyn.age);

//case 2: for multiple instances of a certain type of object, prototypes, inheritance we need to use constructors
function Person(name, age){ //Person constructor
    this.name = name; // name is the property
    this.age = age;
    console.log(this); //'this' inside a constructor / function scope represents the current instance of the object
}

console.log(this); // 'this' inside a global scope (not inside of a function) gives you the window object

//instantiate an object 
const selwyn = new Person('Selwyn', 33);
console.log(selwyn.age);


// Ex: Method within a constructor
function Person1(name1, dob) {
    this.name1 = name1;
    // this.age = age;
    this.birthday = new Date(dob); 
    //Create a method calculateAge (method: a function inside an object)
    this.calculateAge = function(){ //
      const diff =  Date.now() - this.birthday.getTime();
      const ageDate = new Date(diff);
      return Math.abs(ageDate.getUTCFullYear() - 1970); //Calculate age from a birthday
    }
  }
  const chad = new Person('Brad', '9-10-1981');
  console.log(chad.calculateAge());
  