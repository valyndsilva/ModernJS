
// II. SINGLETON PATTERN:
// A manifestation of module pattern. 
// A singleton object is an anonymous functions and can only return 1 instance of an object at a time.
// Repeated calls to the constructor will return the same instance. You can never more than one instance.
// Like the module pattern it maintains a private reference which cannot be accessed from the outside.
// Commong uses of singleton pattern is when you want to create 1 user object at a time, 1 logged in user, prevent from having 2 users created at once.
// It gives a global point of access instead of using encapsulation so this pattern is not used among developers as much and is pretty hard to debug.
const Singleton = (function() { //set to IIFE
    let instance;
  
    function createInstance() {
        // const object = new Object('Object instance!!!');
        const object = new Object({name:'Maria'});
      return object;
    }
  
    return {
      getInstance: function() {
        if(!instance){
          instance = createInstance();
        }
        return instance;
      }
    }
  })();
  
  const instanceA = Singleton.getInstance();
  const instanceB = Singleton.getInstance();
  
  console.log(instanceA === instanceB); //true
  
  // console.log(instanceA);
