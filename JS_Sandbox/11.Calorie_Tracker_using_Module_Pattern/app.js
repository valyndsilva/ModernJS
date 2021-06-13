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
const StorageCtrl = (function(){

  //public methods
  return{
      storeItem:function(item){// IIFE function
      let items;
      // localStorage only holds a string. 
      // To set a value you use JSON.stringify to convert the array of object to string.
      // To get the value from localStorage you need to convert the string back into an object using JSON.Parse

      //Check if any items in localStorage
      if(localStorage.getItem('items') === null){
          items =  [];
          //Push new item
          items.push(item);
          // Set to localStorage
          localStorage.setItem('items', JSON.stringify(items));
        } else {
          // Get what is already in localStorage 
          items = JSON.parse(localStorage.getItem('items')); //convert string output to object using JSON.parse()

          //Push new item on
          items.push(item);

          // Reset localStorage
          localStorage.setItem('items', JSON.stringify(items));
        }
      },
      getItemsFromStorage: function(){
        let items;
        if(localStorage.getItem('items') === null){
      items = [];
        } else {
          items = JSON.parse(localStorage.getItem('items'));
        }
        return items;
      }

  }
})(); 


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
        // items: [
        //   // {id: 0, name: 'Steak Dinner', calories: 1200},
        //   // {id: 1, name: 'Cookie', calories: 400},
        //   // {id: 2, name: 'Eggs', calories: 300}
        // ],
        items: StorageCtrl.getItemsFromStorage(),
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
          getItemById: function(id){
            let found = null;
            // Loop through items
            data.items.forEach(function(item){
              if(item.id === id){
                found = item;
              }
            });
            return found;
          },
          updateItem: function(name, calories){ //updates item in the data structure. Check ItemCtrl.logData() in console.
            // Convert calories from string to number
            calories = parseInt(calories);
      
            let found = null;
      
            data.items.forEach(function(item){
              if(item.id === data.currentItem.id){
                item.name = name;
                item.calories = calories;
                found = item;
              }
            });
            return found;
          },
          //deleteItem function defined to be used later to delete item from data structure
          deleteItem: function(id){
            //Get ids
            const ids = data.items.map(function(item){
              return item.id;
            });
            //Get index
            const index = ids.indexOf(id);
            //Remove item
            data.items.splice(index, 1);
          },
          clearAllItems: function(){
            data.items = [];
          },
          setCurrentItem: function(item){
            data.currentItem = item;
          },
          getCurrentItem: function(){
            return data.currentItem;
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
        listItems: '#item-list li',
        // Add btn
        addBtn: '.add-btn',
       // Update btn
        updateBtn: '.update-btn',
       // Delete btn
        deleteBtn: '.delete-btn',
       // Back btn
        backBtn: '.back-btn',
        // Clear btn
        clearBtn: '.clear-btn',
        
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
         // Create updateListItem
        updateListItem: function(item){
          let listItems = document.querySelectorAll(UISelectors.listItems); // outputs a node list
    
          // Turn Node list into array
          listItems = Array.from(listItems);
    
          listItems.forEach(function(listItem){
            const itemID = listItem.getAttribute('id');
    
            if(itemID === `item-${item.id}`){
              document.querySelector(`#${itemID}`).innerHTML = `<strong>${item.name}: </strong> <em>${item.calories} Calories</em>
              <a href="#" class="secondary-content">
                <i class="edit-item fas fa-pencil-alt"></i>
              </a>`;
            }
          });
        },
        //Create deleteItemList
        deleteListItem: function(id){
        const itemID = `#item-${id}`;
        const item =document.querySelector(itemID);
        item.remove();
        },
        // Create clearInput
        clearInput: function(){
          document.querySelector(UISelectors.itemNameInput).value = '';
          document.querySelector(UISelectors.itemCaloriesInput).value = '';
        },
        addItemToForm: function(){
          document.querySelector(UISelectors.itemNameInput).value = ItemCtrl.getCurrentItem().name;
          document.querySelector(UISelectors.itemCaloriesInput).value = ItemCtrl.getCurrentItem().calories;
          UICtrl.showEditState();
        },
        // Create removeList
        removeItems: function(){
          let listItems = document.querySelectorAll(UISelectors.listItems); // outputs a node list

          //Convert node list into Array
          listItems = Array.from(listItems);
          listItems.forEach(function(item){
            item.remove();
          });
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
const AppCtrl = (function(ItemCtrl, StorageCtrl, UICtrl){
    // console.log(ItemCtrl.logData()); //outputs the data

    // Load event listeners
    const loadEventListeners = function(){

      // Get UI selectors
      const UISelectors = UICtrl.getSelectors();
  
      // Add item event
      document.querySelector(UISelectors.addBtn).addEventListener('click', itemAddSubmit);

      // Disable submit on clicking Enter button
    document.addEventListener('keypress', function(e){
      if(e.keyCode === 13 || e.which === 13){
        e.preventDefault();
        return false;
      }
    });
     
      // Edit icon click event
    document.querySelector(UISelectors.itemList).addEventListener('click', itemEditClick);
    
    // Update item event
    document.querySelector(UISelectors.updateBtn).addEventListener('click', itemUpdateSubmit);

     // Delete item event
     document.querySelector(UISelectors.deleteBtn).addEventListener('click', itemDeleteSubmit);

     // Back item event
     document.querySelector(UISelectors.backBtn).addEventListener('click', UICtrl.clearEditState);

      // Clear items event
      document.querySelector(UISelectors.clearBtn).addEventListener('click', clearAllItemsClick);

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

      //Store in loacal storage
      StorageCtrl.storeItem(newItem);

      // Clear fields
      UICtrl.clearInput();
    }
      e.preventDefault();
    }

      
  // Click edit item
  const itemEditClick = function(e){
    // console.log('test');

    // Target the edit icon
    if(e.target.classList.contains('edit-item')){
      // console.log('edit-item');
      // Get list item id (item-0, item-1)
      const listId = e.target.parentNode.parentNode.id; // i > a(Parent node) > li(Parent node).id
 // Get a regular id ex: 0 instead of item-0:
      // Break into an array
      const listIdArr = listId.split('-');

      // console.log(listIdArr); [1] holds the id
    
      // Get the actual id
      const id = parseInt(listIdArr[1]);

      // Get item
      const itemToEdit = ItemCtrl.getItemById(id);

      // console.log(itemToEdit);
    
      // Set current item
      ItemCtrl.setCurrentItem(itemToEdit);

      // Add item to form
      UICtrl.addItemToForm();
    }

    e.preventDefault();
  }

  // Update item on submit
  const itemUpdateSubmit = function(e){
    // Get item input
    const input = UICtrl.getItemInput();

    // Update item
    const updatedItem = ItemCtrl.updateItem(input.name, input.calories);

    // Update UI
    UICtrl.updateListItem(updatedItem);

     // Get total calories
     const totalCalories = ItemCtrl.getTotalCalories();

     // Add total calories to UI
     UICtrl.showTotalCalories(totalCalories);

     UICtrl.clearEditState();

    e.preventDefault();
  }

  //Delete button event
  const itemDeleteSubmit = function(e){
    //Get current item
    const currentItem = ItemCtrl.getCurrentItem();

    //Delete item from data structure
    ItemCtrl.deleteItem(currentItem.id);
    // Delete from UI
    UICtrl.deleteListItem(currentItem.id);

    // Get total calories
    const totalCalories = ItemCtrl.getTotalCalories();

    // Add total calories to UI
    UICtrl.showTotalCalories(totalCalories);

    UICtrl.clearEditState();

    e.preventDefault();
  }

  // Clear items event
const clearAllItemsClick = function(){
  //Delete all items from data structure
  ItemCtrl.clearAllItems();

  // Get total calories
  const totalCalories = ItemCtrl.getTotalCalories();

  // Add total calories to UI
  UICtrl.showTotalCalories(totalCalories);

  //Remove from UI
  UICtrl.removeItems();

  //Hide the List (UL)
  UICtrl.hideList();
}


// Public methods
  return {
    init: function(){
      // Clear edit state / set initial set
      UICtrl.clearEditState();

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
  
})(ItemCtrl, StorageCtrl, UICtrl);

// Initialize App
AppCtrl.init();
