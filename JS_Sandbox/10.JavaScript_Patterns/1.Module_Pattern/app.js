
// // I. MODULE PATTERN:
// // ES5 has module pattern which allows to breakup parts of the code into self-contained modules with private properties and methods or private variables and functions.

// // Basic structure
// (function() { //IIFE Function - immediately invoked function expresion (IIFE) ()(); - function that invokes automatically
// // Declare private vars and functions (private: cannot access values out of the module)
//   return {
// // Declare public var and functions
//   }
// })();

// Ia. STANDARD MODULE PATTERN
const UICtrl = (function() {
  let text = 'Hello World';

  const changeText = function() {
    const element = document.querySelector('h1');
    element.textContent = text;
  }

  return {
    callChangeText: function() {
      changeText();
      // console.log(text);
    }
  }
})();

UICtrl.callChangeText(); // Hello World
console.log(UICtrl.text); // undefined
// UICtrl.changeText(); // returns error since cannot access the private function from outside


// Ib. REVEALING MODULE PATTERN
// Instead of returning a public function we map an object literal to private functions or methods that you want to reveal.
const ItemCtrl = (function() { //IIFE - function that invokes automatically
    let data = []; //state
  //you can use _ before a variable ex:_data to represent a private variable in advanced projects
    function add(item) {
      data.push(item);
      console.log('Item Added....');
    }
  
    function get(id) {
      return data.find(item => {
        return item.id === id;
      });
    }
  
    return {
      add: add,
      // get: get //if you remove get from here it becomes private and cannot be accessed below.
    }
  })();
  
  ItemCtrl.add({id: 1, name: 'John'});
  console.log(ItemCtrl.get(1));

  ItemCtrl.add({id: 2, name: 'Mark'});
  console.log(ItemCtrl.get(2));
