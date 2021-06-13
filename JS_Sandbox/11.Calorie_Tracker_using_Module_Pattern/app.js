// IV. Storage Controller (for local storage)



// I.Item Controller (for local data) (using Module pattern) 
const ItemCtrl = (function(){ //IIFE function
  // 1.Item Constructor
  const Item = function(id, name, calories){
    this.id = id;
    this.name = name;
    this.calories = calories;
  }
    // 2.Data Structure / State
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
          // 21.Create addItem method
          addItem: function(name, calories){
            // console.log(name,calories);

          // 23.Create ID
            let ID;
            if(data.items.length > 0){
              ID = data.items[data.items.length - 1].id + 1;
            } else {
              ID = 0;
            }
      
            // 24.Convert Calories from string to number
            calories = parseInt(calories);
      
            // 25.Create new item (call Item constructor)
            newItem = new Item(ID, name, calories);
      
            // 26.Add to items array
            data.items.push(newItem);
            
            //27. return
            return newItem;
          },
          logData: function(){
          return data; //data can be accessed at this stage through ItemCtrl.logData()
        }
      }
})();


// II. UI Controller (UI functioning (showing, hiding things etc))
const UICtrl = (function(){
  //7.UISelectors
    const UISelectors = { // private 
        itemList: '#item-list', 
        // 12. Add btn
        addBtn: '.add-btn',
        //17. Name the inputs
        itemNameInput: '#item-name',
        itemCaloriesInput: '#item-calories'
      }
      
      // Public methods
      return {
        // 6. Create populateItemList
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
    
          // 8.Insert list items
          document.querySelector(UISelectors.itemList).innerHTML = html;
        },
        //18. get values from the form
        getItemInput: function(){
          return {
            name:document.querySelector(UISelectors.itemNameInput).value,
            calories:document.querySelector(UISelectors.itemCaloriesInput).value
          }
        },
        // 28. Create addListItem
        addListItem: function(item){
          // 33.Show the list
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
        //30. Create clearInput
        clearInput: function(){
          document.querySelector(UISelectors.itemNameInput).value = '';
          document.querySelector(UISelectors.itemCaloriesInput).value = '';
        },
        //32. Create hideList
        hideList: function(){
          document.querySelector(UISelectors.itemList).style.display = 'none';
        },
         // 10.Create public method to access the UISelectors later in AppCtrl
        getSelectors: function(){
          return UISelectors;
      }
    }
})();


// III. App Controller (connect everything, event listeners, init function)
const AppCtrl = (function(ItemCtrl, UICtrl){
    // console.log(ItemCtrl.logData()); //outputs the data

    // 9.Load event listeners
    const loadEventListeners = function(){

      // 11.Get UI selectors
      const UISelectors = UICtrl.getSelectors();
  
      // 13.Add item event
      document.querySelector(UISelectors.addBtn).addEventListener('click', itemAddSubmit);
    }
  
    // 14.Add item submit
    const itemAddSubmit = function(e){
      //16.test
      // console.log('Add');

      // 19.Get form input from UI Controller
      const input = UICtrl.getItemInput();
      // console.log(input);

      //20.Check for name and calorie input
      if(input.name !== '' && input.calories !== ''){
        // 22.Add item
        const newItem = ItemCtrl.addItem(input.name, input.calories);
     
      // 29.Add item to UI list
      UICtrl.addListItem(newItem);

      // 31.Clear fields
      UICtrl.clearInput();
    }
      e.preventDefault();
    }
// Public methods
  return {
    init: function(){
       // 4.Fetch items from data structure
      const items = ItemCtrl.getItems();
      //   console.log(items);

      // 34.Check if any items
      if(items.length === 0){
        UICtrl.hideList();
      } else {
      // 5.Populate list with items
      UICtrl.populateItemList(items);
      }
      // 15.Load event listeners
      loadEventListeners();
    }
  }
  
})(ItemCtrl, UICtrl);

// 3.Initialize App
AppCtrl.init();
