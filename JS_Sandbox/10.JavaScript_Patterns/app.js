// What is a Pattern?
//It's a re-usable solution that can be applied to occurring problems in software design (JS Applications)
//Can also be thought of as programming templates
//ES6 introduced modules in JS that need to be compiled using a compiler like babel and module loader like webpack
//Situations vary significantly:
//Factory and prototype patterns used for object creation
//Module pattern and all of it's variations are used for overall structure
// Software design patterns like MVC (Model View Controller) apply to whole applications or blocks of code
// Different Patterns: Module, Reavealing Module Pattern, Singleton, Factory, Observer, Mediator, State

// // I. MODULE PATTERN:
// // ES5 has module pattern which allows to breakup parts of the code into self-contained modules with private properties and methods or private variables and functions.

// // Basic structure
// (function() { //IIFE Function - immediately invoked function expresion (IIFE) ()(); - function that invokes automatically
// // Declare private vars and functions (private: cannot access values out of the module)
//   return {
// // Declare public var and functions
//   }
// })();

// // Ia. STANDARD MODULE PATTERN
// const UICtrl = (function() {
//   let text = 'Hello World';

//   const changeText = function() {
//     const element = document.querySelector('h1');
//     element.textContent = text;
//   }

//   return {
//     callChangeText: function() {
//       changeText();
//       // console.log(text);
//     }
//   }
// })();

// UICtrl.callChangeText(); // Hello World
// console.log(UICtrl.text); // undefined
// // UICtrl.changeText(); // returns error since cannot access the private function from outside


// // Ib. REVEALING MODULE PATTERN
// // Instead of returning a public function we map an object literal to private functions or methods that you want to reveal.
// const ItemCtrl = (function() { //IIFE - function that invokes automatically
//     let data = []; //state
//   //you can use _ before a variable ex:_data to represent a private variable in advanced projects
//     function add(item) {
//       data.push(item);
//       console.log('Item Added....');
//     }
  
//     function get(id) {
//       return data.find(item => {
//         return item.id === id;
//       });
//     }
  
//     return {
//       add: add,
//       // get: get //if you remove get from here it becomes private and cannot be accessed below.
//     }
//   })();
  
//   ItemCtrl.add({id: 1, name: 'John'});
//   console.log(ItemCtrl.get(1));

//   ItemCtrl.add({id: 2, name: 'Mark'});
//   console.log(ItemCtrl.get(2));


// // II. SINGLETON PATTERN:
// // A manifestation of module pattern. 
// // A singleton object is an anonymous functions and can only return 1 instance of an object at a time.
// // Repeated calls to the constructor will return the same instance. You can never more than one instance.
// // Like the module pattern it maintains a private reference which cannot be accessed from the outside.
// // Commong uses of singleton pattern is when you want to create 1 user object at a time, 1 logged in user, prevent from having 2 users created at once.
// // It gives a global point of access instead of using encapsulation so this pattern is not used among developers as much and is pretty hard to debug.
// const Singleton = (function() { //set to IIFE
//     let instance;
  
//     function createInstance() {
//         // const object = new Object('Object instance!!!');
//         const object = new Object({name:'Maria'});
//       return object;
//     }
  
//     return {
//       getInstance: function() {
//         if(!instance){
//           instance = createInstance();
//         }
//         return instance;
//       }
//     }
//   })();
  
//   const instanceA = Singleton.getInstance();
//   const instanceB = Singleton.getInstance();
  
//   console.log(instanceA === instanceB); //true
  
//   // console.log(instanceA);

  // // III.FACTORY PATTERN:
  // //  A way of creating an interface for creating objects but let subclasses to define which classes to instantiate
  // // Factory methods are used in applications to manage, maintain, manipulate collections of objects that are different but have common characteristics. 
  // Ex: Memberships. Create a MemberFactory that takes a member type and creates a new object based on that type.
  function MemberFactory() {
    this.createMember = function(name, type) { //function expression
      let member;
  
      if(type === 'simple') {
        member = new SimpleMembership(name);
      } else if (type === 'standard') {
        member = new StandardMembership(name);
      } else if (type === 'super') {
        member = new SuperMembership(name);
      }
  
      member.type = type;
  
      member.define =  function() {
        console.log(`${this.name} (${this.type}): ${this.cost}`);
      }
  
      return member;
    }
  }
  
  const SimpleMembership = function(name) {
    this.name = name;
    this.cost = '$5';
  }
  
  const StandardMembership = function(name) {
    this.name = name;
    this.cost = '$15';
  }
  
  const SuperMembership = function(name) {
    this.name = name;
    this.cost = '$25';
  }
  
  const members = [];
  const factory = new MemberFactory();
  
  members.push(factory.createMember('John Doe', 'simple'));
  members.push(factory.createMember('Chris Jackson', 'super'));
  members.push(factory.createMember('Janice Williams', 'simple'));
  members.push(factory.createMember('Tom Smith', 'standard'));
  
  // console.log(members);
  
  members.forEach(function(member) {
    member.define();
  });