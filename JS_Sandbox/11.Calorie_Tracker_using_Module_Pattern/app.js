// Step 1: Create UI (HTML)
// Step 2: Create the Controllers and Data Structures
// Step 3: Get and Populate Items
// Step 4: Add Item to Data Structure
// Step 5: Add Item to UI
// Step 6: Add Total Calories
// Step 7: Edit State
// Step 8: Update Items and Total Calories
// Step 9: Delete and Clear Items
// Step 10: Add and Get From Local Storage
// Step 11: Delete and Clear From Local Storage
// Extra Notes: we need Item, UI, App and Local Storage Controllers.
// IV. Storage Controller (for local storage)



// I.Item Controller (for local data) (using Module pattern) 
const ItemCtrl = (function(){ //IIFE function
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
          // {id: 0, name: 'Steak Dinner', calories: 1200},
          // {id: 1, name: 'Cookie', calories: 400},
          // {id: 2, name: 'Eggs', calories: 300}
        ],
        currentItem: null,
        totalCalories: 0
      }
    
      // Public methods
      return {
          getItems:function(){
              return data.items;
          },
          // Create addItem method
          addItem: function(name, calories){
            // console.log(name,calories);

          // Create ID
            let ID;
            if(data.items.length > 0){
              ID = data.items[data.items.length - 1].id + 1;
            } else {
              ID = 0;
            }
      
            // Convert Calories from string to number
            calories = parseInt(calories);
      
            // Create new item (call Item constructor)
            newItem = new Item(ID, name, calories);
      
            // Add to items array
            data.items.push(newItem);
            
            // return
            return newItem;
          },
          getTotalCalories: function(){
            let total = 0;

            // Loop through items and add cals
            data.items.forEach(function(item){
              total += item.calories; //  total = total + item.calories;
            });

            // Set total cal in data structure
            data.totalCalories = total;

            // Return total
            return data.totalCalories;
          },
          logData: function(){
          return data; //data can be accessed at this stage through ItemCtrl.logData()
        }
      }
})();


// II. UI Controller (UI functioning (showing, hiding things etc))
const UICtrl = (function(){ //IIFE function
  // UISelectors
    const UISelectors = { // private 
        itemList: '#item-list', 
        // Add btn
        addBtn: '.add-btn',
       // Update btn
        updateBtn: '.update-btn',
       // Delete btn
        deleteBtn: '.delete-btn',
       // Back btn
        deleteBtn: '.back-btn',
        // inputs
        itemNameInput: '#item-name',
        itemCaloriesInput: '#item-calories',
        totalCalories: '.total-calories'
      }
      
      // Public methods
      return {
        // Create populateItemList
        populateItemList: function(items){
          let html = '';
    
          items.forEach(function(item){
            html += `<li class="collection-item" id="item-${item.id}">
            <strong>${item.name}: </strong> <em>${item.calories} Calories</em>
            <a href="#" class="secondary-content">
              <i class="edit-item fas fa-pencil-alt"></i>
            </a>
          </li>`;
          });
    
          // Insert list items
          document.querySelector(UISelectors.itemList).innerHTML = html;
        },
        // get values from the form
        getItemInput: function(){
          return {
            name:document.querySelector(UISelectors.itemNameInput).value,
            calories:document.querySelector(UISelectors.itemCaloriesInput).value
          }
        },
        // Create addListItem
        addListItem: function(item){
          // Show the list
          document.querySelector(UISelectors.itemList).style.display = 'block';
          // Create li element
          const li = document.createElement('li');
          // Add class
          li.className = 'collection-item';
          // Add ID
          li.id = `item-${item.id}`;
          // Add HTML
          li.innerHTML = `<strong>${item.name}: </strong> <em>${item.calories} Calories</em>
          <a href="#" class="secondary-content">
            <i class="edit-item fas fa-pencil-alt"></i>
          </a>`;
          // Insert item into DOM
          document.querySelector(UISelectors.itemList).insertAdjacentElement('beforeend', li)
        },
        // Create clearInput
        clearInput: function(){
          document.querySelector(UISelectors.itemNameInput).value = '';
          document.querySelector(UISelectors.itemCaloriesInput).value = '';
        },
        // Create hideList
        hideList: function(){
          document.querySelector(UISelectors.itemList).style.display = 'none';
        },
         // Create showTotalCalories
        showTotalCalories: function(totalCalories){
          document.querySelector(UISelectors.totalCalories).textContent = totalCalories;
        },
        // Create clearEditState
        clearEditState: function(){
          UICtrl.clearInput();
          document.querySelector(UISelectors.updateBtn).style.display = 'none';
          document.querySelector(UISelectors.deleteBtn).style.display = 'none';
          document.querySelector(UISelectors.backBtn).style.display = 'none';
          document.querySelector(UISelectors.addBtn).style.display = 'inline';
        },
        //Create showEditState
        showEditState: function(){
          document.querySelector(UISelectors.updateBtn).style.display = 'inline';
          document.querySelector(UISelectors.deleteBtn).style.display = 'inline';
          document.querySelector(UISelectors.backBtn).style.display = 'inline';
          document.querySelector(UISelectors.addBtn).style.display = 'none';
        },
         // Create public method to access the UISelectors later in AppCtrl
        getSelectors: function(){
          return UISelectors;
      }
    }
})();


// III. App Controller (connect everything, event listeners, init function)
const AppCtrl = (function(ItemCtrl, UICtrl){
    // console.log(ItemCtrl.logData()); //outputs the data

    // Load event listeners
    const loadEventListeners = function(){

      // Get UI selectors
      const UISelectors = UICtrl.getSelectors();
  
      // Add item event
      document.querySelector(UISelectors.addBtn).addEventListener('click', itemAddSubmit);
    }
  
    // Add item submit
    const itemAddSubmit = function(e){

      //test
      // console.log('Add');

      // Get form input from UI Controller
      const input = UICtrl.getItemInput();
      // console.log(input);

      //Check for name and calorie input
      if(input.name !== '' && input.calories !== ''){
        // Add item
        const newItem = ItemCtrl.addItem(input.name, input.calories);
     
      // Add item to UI list
      UICtrl.addListItem(newItem);

      // Get total calories
      const totalCalories = ItemCtrl.getTotalCalories();

      // Add total calories to UI
      UICtrl.showTotalCalories(totalCalories);

      // Clear fields
      UICtrl.clearInput();
    }
      e.preventDefault();
    }
// Public methods
  return {
    init: function(){
       // Fetch items from data structure
      const items = ItemCtrl.getItems();
      //   console.log(items);

      // Check if any items
      if(items.length === 0){
        UICtrl.hideList();
      } else {
      // Populate list with items
      UICtrl.populateItemList(items);
      }
      // Get total calories
      const totalCalories = ItemCtrl.getTotalCalories();

      // Add total calories to UI
      UICtrl.showTotalCalories(totalCalories);

      // Load event listeners
      loadEventListeners();
    }
  }
  
})(ItemCtrl, UICtrl);

// Initialize App
AppCtrl.init();
