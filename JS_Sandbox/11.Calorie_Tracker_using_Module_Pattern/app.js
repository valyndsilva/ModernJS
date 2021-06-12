// Storage Controller (for local storage)



// Item Controller (for local data) (using Module pattern) 
const ItemCtrl = (function(){
  // Item Constructor
  const Item = function(id, name, calories){
    this.id = id;
    this.name = name;
    this.calories = calories;
  }
    // Data Structure / State
    // Private data
    const data = { //(data is private and not directly accessible through Chrome) Ex: ItemCtrl.data returns "Uncaught TypeError:cannot read property data"
        items: [
          {id: 0, name: 'Steak Dinner', calories: 1200},
          {id: 1, name: 'Cookie', calories: 400},
          {id: 2, name: 'Eggs', calories: 300}
        ],
        currentItem: null,
        totalCalories: 0
      }
    
      // Public methods
      return {
        logData: function(){
          return data; //data can be accessed at this stage through ItemCtrl.logData()
        }
      }
})();


// UI Controller (UI functioning (showing, hiding things etc))
const UICtrl = (function(){
    
  // Public methods
  return {

}
})();


// App Controller (connect everything, event listeners, init function)
const AppCtrl = (function(ItemCtrl, UICtrl){
    // console.log(ItemCtrl.logData()); //outputs the data
  
// Public methods
  return {
    init: function(){
      console.log('Initializing App...');
    }
  }
  
})(ItemCtrl, UICtrl);

// Initialize App
App.init();
