//Document Object Model -
//1.What is DOM?
//Structured representation of an HTML document
//DOM can be thought of as a Tree of nodes/elements created by the browser.
//JS can be used to read/write/manipulate the DOM
//DOM is object oriented. Each node has it's own set of properties and methods.
//The browser gives us a Window Object and inside it we have the Document Object.

// //2.Examining the Document Object:
// let val;
// val = document;
// val = document.all; // displays the html collection
// val = document.all[2];
// val = document.all.length;
// val = document.head;
// val = document.body;
// val = document.doctype;
// val = document.domain;
// val = document.URL;
// val = document.characterSet;
// val = document.contentType;

// val = document.forms;
// val = document.forms[0];
// val = document.forms[0].id;
// val = document.forms[0].method;
// val = document.forms[0].action;

// val = document.links;
// val = document.links[0];
// val = document.links[0].id;
// val = document.links[0].className;
// val = document.links[0].classList[0];

// val = document.images;

// val = document.scripts;
// val = document.scripts[2].getAttribute('src');

// console.log(val);

// //forEach cannot be used by default with a html collection.
// // let scripts = document.scripts;
// // scripts.forEach(function(script) { //You get an error not a function.
// //   console.log(script); //foreach is to be used with Arrays only
// // });

// //But html collections can be turned into an Array so you can use them with forEach.
// let scripts = document.scripts;
// let scriptsArr = Array.from(scripts); //create an array and pass in the html collection
// scriptsArr.forEach(function(script) {
//   console.log(script.getAttribute('src'));
// });

// //3.DOM Selectors for Single Elements
// //Can grab only 1 element and stores only 1 thing.

// //A.document.getElementById();
// const taskTitle = document.getElementById('task-title');
// console.log(taskTitle);

// //B.Get things from the element
// console.log(taskTitle.id);

// //C. Change styling
// taskTitle.style.background = '#333';
// taskTitle.style.color = '#fff';
// taskTitle.style.padding = '5px';
// // taskTitle.style.display = 'none';

// //D. Change the content
// //innerText and textContent do the same thing.
// taskTitle.textContent = 'Task List';
// taskTitle.innerText = 'My Task List';
// taskTitle.innerHTML = '<span style="color:red">Task List</span>';

// //E. document.querySelector();
// console.log(document.querySelector('#task-title'));
// console.log(document.querySelector('.card-title'));
// console.log(document.querySelector('h5')); //if there are multiple h5 it only gets the 1st one.

// document.querySelector('li').style.color = 'red';
// document.querySelector('ul li').style.color = 'blue';
// document.querySelector('li:last-child').style.color = 'red';
// document.querySelector('li:nth-child(3)').style.color = 'yellow';
// document.querySelector('li:nth-child(4)').textContent = 'Hello Valyn';
// //querySelector selects only the 1st element and not multiple elements of a kind..
// document.querySelector('li:nth-child(odd)').style.background = '#ccc';
// document.querySelector('li:nth-child(even)').style.background = '#f4f4f4';

//4.DOM Selectors for Multiple Elements
//Can grab all elements from that selector and return a html collection  or node list.
//Can be converted in arrays very easily.

// //A.document.getElementsByClassName();
// const items = document.getElementsByClassName('collection-item');
// console.log(items); //returns a html collection
// //To access a specific one we can treat it like an array
// console.log(items[0]); //gives the 1st list item
// items[3].style.color = 'green';
// items[0].textContent = 'Hello items';

// const listItems = document
//   .querySelector('ul')
//   .getElementsByClassName('collection-item');
// console.log(listItems);

// //B.document.getElementsByTagName(); //it selects the element tag
// let lis = document.getElementsByTagName('li');
// console.log(lis); //returns a html collection
// console.log(lis[1]);
// lis[3].style.color = 'green';
// lis[0].textContent = 'Hello Lis';
// //Convert html collection to an Array
// lis = Array.from(lis);
// lis.reverse();
// // lis.forEach(function(li) {
// //   console.log(li.className);
// //   li.textContent = 'Hello';
// // });
// //You can add the index as well
// lis.forEach(function(li, index) {
//   console.log(li.className);
//   li.textContent = `${index}:Hello`;
// });
// console.log(lis);

// // C.document.querySelectorAll(); returns a nodeList
// //A nodeList does not just count elements but also counts text nodes.
// //It also allows to use forEach() and other Array Methods without having to convert it.
// const items = document.querySelectorAll('ul.collection li.collection-item');
// console.log(items); //it outputs a nodeList
// //You don't need to convert a nodeList into an Array.
// items.forEach(function(item, index) {
//   item.textContent = `${index}:Hello`;
// });
// const liOdd = document.querySelectorAll('li:nth-child(odd)');
// liOdd.forEach(function(li, index) {
//   //forEach example
//   li.style.background = '#ccc';
// });
// const liEven = document.querySelectorAll('li:nth-child(even)');
// for (let i = 0; i <= liEven.length; i++) {
//   //for loop example
//   liEven[i].style.background = '#f4f4f4';
// }
// //FOR loops: For loops work on html collections even if you don't convert it into an array.
// //You can also use the length on the html collections and can use the index to access it.
// console.log(items);

//5.Traversing the DOM (Moving around the DOM)
// let val;
// const list = document.querySelector('ul.collection');
// const listItem = document.querySelector('li.collection-item:first-child');
// val = listItem;
// console.log(val);
// val = list;
// console.log(val);

// //A.Get child nodes. childNodes return a NodeList:
// //let val;
// //const list = document.querySelector('ul.collection');
// //const listItem = document.querySelector('li.collection-item:first-child');
// // val = list.childNodes;
// // val = list.childNodes[0];
// // val = list.childNodes[0].nodeName;

// val = list.childNodes; //refer to these nodes for the nodeType
// console.log(val);
// val = list.childNodes[0].nodeType;
// console.log(val); // Outputs 3 since it's a text node
// val = list.childNodes[1].nodeType;
// console.log(val); // Outputs 1 since it's a element node
// val = list.childNodes[3].nodeType;
// console.log(val); // Outputs 8 since it's a comment node

//nodeType value List:
//1 - Element
//2 - Attribute (deprecated)
//3 - Text node //text nodes includes line breaks,comments,text
//8 - Comment
//9 - Document itself
//10 - Doctype

// //B.Get children element nodes. children returns an html collection:
// // In most cases we only require the child elements and not the text nodes.
// //So we can just use the property called children
// let val;
// const list = document.querySelector('ul.collection');
// const listItem = document.querySelector('li.collection-item:first-child');
// val = list.children;
// console.log(val);
// val = list.children[1];
// console.log(val);
// list.children[1].textContent = 'Hello';
// //Children of children
// val = list.children[3].children;
// console.log(val);
// list.children[3].children[0].id = 'test-link';
// val = list.children[3].children[0];
// console.log(val);
// //First Child
// val = list.firstChild; //gives a text node #text
// val = list.firstElementChild; //gives actual element
// console.log(val);
// //Last Child
// val = list.lastChild; //gives a text node #text
// val = list.lastElementChild; //gives actual element
// console.log(val);
// //Get the Count of child elements
// val = list.childElementCount;
// console.log(val);
// //Get parent nodes
// val = listItem.parentNode;
// console.log(val);
// val = listItem.parentElement;
// console.log(val);
// //Parents of parents
// val = listItem.parentElement.parentElement;
// console.log(val);
// //Get next sibling
// val = listItem.nextSibling; //outputs text node #text
// console.log(val);
// val = listItem.nextElementSibling;
// console.log(val);
// val = listItem.nextElementSibling.nextElementSibling;
// console.log(val);
// val = listItem.nextElementSibling.nextElementSibling.previousElementSibling;
// console.log(val);
// //Get previous sibling
// val = listItem.previousSibling; //outputs text node #text
// console.log(val);
// val = listItem.previousElementSibling;
// console.log(val);
// val = listItem.previousElementSibling;
// // console.log(val);

// //6.Creating Elements
// //Example: Add another list item
// //A.document.createElement();
// //Create the element
// const li = document.createElement('li');
// //Add a class
// li.className = 'collection-item';
// //Add an id
// li.id = 'new-item';
// //Add an attribute
// li.setAttribute('title', 'New Item');
// //Append means put an element inside another element.
// // Create a text node and append.
// const textItem = document.createTextNode('Hello Valyn');
// li.appendChild(textItem);
// // console.log(li);
// // Create a link
// const link = document.createElement('a');
// //Add classes
// link.className = 'delete-item secondary-content';
// //Add icon html
// link.innerHTML = '<i class="fa fa-remove"></i>';
// //Append link into li
// li.appendChild(link);
// //Append li as child to ul
// document.querySelector('ul.collection').appendChild(li);
// console.log(li);

// //7.Removing and Replacing Elements
// //A.Replace Elements
// //Create Element
// const newHeading = document.createElement('h2');
// //Add id
// newHeading.id = 'task-title';
// //Add new text node
// const textItem = document.createTextNode('Task List');
// newHeading.appendChild(textItem);
// //Get old heading that you want to replace
// const oldHeading = document.getElementById('task-title');
// //Parent: To replace a child we need to target the parent
// const cardAction = document.querySelector('.card-action');
// console.log(newHeading);
// //Replace element
// cardAction.replaceChild(newHeading, oldHeading);

// //B.Remove element
// const lis = document.querySelectorAll('li');
// const list = document.querySelector('ul');
// //Remove list element
// lis[0].remove;
// //Remove child element
// list.removeChild(lis[2]); //Removes the 3rd list item

// //C.Classes
// const firstLi = document.querySelector('li:first-child');
// console.log(firstLi);
// console.log(firstLi.children[0]);
// const link = firstLi.children[0];

// let val;
// val = link.className;
// console.log(val);
// val = link.classList; //Gives a list and you can use this to access individual classes
// console.log(val);
// val = link.classList[0];
// console.log(val);
// link.classList.add('testClass');
// val = link;
// console.log(val);
// link.classList.remove('testClass');
// console.log(val);

// //Attributes
// val = link.getAttribute('href');
// console.log(val);
// val = link.setAttribute('href', 'http://google.com');
// console.log(val);
// val = link.hasAttribute('href');
// console.log(val);
// link.setAttribute('title', 'Google');
// console.log(val);
// val = link.hasAttribute('title');
// console.log(val);
// link.removeAttribute('title');
// console.log(val);
// val = link;
// console.log(val);

// //8.Event Listeners and the Event Object
// //.addEventListener take in an event and anonymous call back function
// // document.querySelector('.clear-tasks').addEventListener('click', function(e) {
// //   console.log('Hello Valyn');
// //   //e.preventDefault(); //Prevents the default behaviour from taking place
// // });
// //Better to have a named function than an unnamed function Ex:onClick
// document.querySelector('.clear-tasks').addEventListener('click', onClick);
// function onClick(e) {
//   //e is the event listener
//   //   console.log('Clicked');
//   let val;
//   //   val = e;
//   //   console.log(val); //outputs the MouseEvents object.
//   //   //The target shows the element on which the event occurred from.

//   //   //Event target element
//   //   val = e.target;
//   //   console.log(val);
//   //   val = e.target.id;
//   //   console.log(val);
//   //   val = e.target.className;
//   //   console.log(val);
//   //   val = e.target.classList;
//   //   console.log(val);
//   //   e.target.innerText = 'Hello';
//   //   console.log(val);
//   //Event Type
//   val = e.type;
//   console.log(val);
//   //Timestamp
//   val = e.timeStamp;
//   console.log(val);
//   //Coords event relative to the browser window
//   val = e.clientY;
//   console.log(val);
//   val = e.clientX;
//   console.log(val);
//   //Coords event relative to the element it self
//   val = e.offsetY;
//   console.log(val);
//   val = e.offsetX;
//   console.log(val);
// }

// //9.Mouse Events
// const clearBtn = document.querySelector('.clear-tasks');
// const card = document.querySelector('.card');
// const heading = document.querySelector('h5');

// // //Click
// // clearBtn.addEventListener('click', runEvent);
// // //Double Click
// // clearBtn.addEventListener('dblclick', runEvent);
// // //Mouse Down
// // clearBtn.addEventListener('mousedown', runEvent);
// // //Mouse Up
// // clearBtn.addEventListener('mouseup', runEvent);
// // //Mouseenter
// // card.addEventListener('mouseenter', runEvent);
// // //Mouseleave
// // card.addEventListener('mouseleave', runEvent);
// // //Mouseover
// // card.addEventListener('mouseover', runEvent);
// // //Mouseout
// // card.addEventListener('mouseout', runEvent);
// // //Mousemove
// // card.addEventListener('mousemove', runEvent);

// // //Event Handler
// // function runEvent(e) {
// //   console.log(`Event Type: ${e.type}`);
// // }

// //Example:
// //Find coordinates of mouse as it moves in different locations
// //And change background color

// //Mousemove
// card.addEventListener('mousemove', runEvent);

// //Event Handler
// function runEvent(e) {
//   console.log(`Event Type: ${e.type}`);
//   heading.textContent = `MouseX:${e.offsetX}, MouseY:${e.offsetY}`;
//   document.body.style.backgroundColor = `rgb(${e.offsetX},${e.offsetY},40)`;
// }

// //10.Keyboard and Input Events
// const form = document.querySelector('form');
// const taskInput = document.getElementById('task');
// const heading = document.querySelector('h5');
// const select = document.querySelector('select');
// // //Submit
// // form.addEventListener('submit', runEvent);
// // function runEvent(e) {
// //   console.log(`Event Type:${e.type}`);
// //   //Get input value
// //   console.log(taskInput.value);
// //   e.preventDefault();
// // }

// //Clear input
// taskInput.value = '';
// // //Keydown
// // taskInput.addEventListener('keydown', runEvent);
// // //Keyup
// // taskInput.addEventListener('keyup', runEvent);
// // //Keypress
// // // taskInput.addEventListener('keypress', runEvent);
// // //Focus
// // taskInput.addEventListener('focus', runEvent);
// // //Blur: when you click in and then click out; the blur event fires when clicking out.
// // taskInput.addEventListener('blur', runEvent);
// // //Cut
// // taskInput.addEventListener('cut', runEvent);
// // //Paste
// // taskInput.addEventListener('paste', runEvent);
// // //Input: fires for all types of input
// // taskInput.addEventListener('input', runEvent);
// //Change: to make this work disable materialize css in the html since it needs jquery
// select.addEventListener('change', runEvent);

// function runEvent(e) {
//   console.log(`Event Type:${e.type}`);
//   //Get input value
//   console.log(e.target.value);
//   //   //Assign the target value to the heading
//   //   heading.innerText = e.target.value;
// }

//11.Event Bubbling and Event Delegation
//Event Bubbling: Bubbling up of events upwards through the DOM from the children up to the parents.
// document.querySelector('.card-title').addEventListener('click', function() {
//   console.log('card-title');
// });
// document.querySelector('.card-content').addEventListener('click', function() {
//   console.log('card-content');
// });
// document.querySelector('.card').addEventListener('click', function() {
//   console.log('card');
// });
// document.querySelector('.col').addEventListener('click', function() {
//   console.log('col');
// });
//All the events above fire up if clicked on card-title due to event bubbling

//Event Delegation:
//You put the event listener on one parent element and use the logic from the event handler to target the elements that you want
//ED allows you to avoid adding event listeners to specific nodes;
//instead, the event listener is added to one parent.
//That event listener analyzes bubbled events to find a match on child elements.

// const delItem = document.querySelector('.delete-item');
// delItem.addEventListener('click', deleteItem);

// function deleteItem() {
//   console.log('delete item');
// } //Here the event is only applied to the 1st element so we need to fix this with ED

//You need to use event delegation in 2 scenarios:
//A. To apply the event to the parent that finds and applies to all child elements
//B. If you dynamically insert anything into the DOM through JavaScript that was not there when the page loaded

// //Example Using Event Delegation: applies event to all the required elements.
// document.body.addEventListener('click', deleteItem);

// function deleteItem(e) {
//   //   console.log(e.target);
//   // Targeting the remove icon:
//   //   if (e.target.className === 'fa fa-remove') {
//   //     console.log('delete item');
//   //   }
//   // Targeting the remove link tag: (Recommended way)
//   // Here the className requires you to enter all the class names assigned to the element.
//   //   if (e.target.parentElement.className === 'delete-item secondary-content') {
//   //     console.log('delete item');
//   //   }

//   //And if a new class name is added after page load it won't work on that element.
//   //So the BEST RECOMMENDED METHOD to target the links is to use classList instead of className (Recommended Method):
//   if (e.target.parentElement.classList.contains('delete-item')) {
//     console.log('delete item');
//     e.target.parentElement.parentElement.remove(); //targets the li element
//   }
// }
//12.Local & Session Storage:
//In Local storage the data stays until you manually clear it out from your settings or through your program.
//In Session storage the data is lost when the browser is closed.

//Local Storage:
//LS is part of the browser. It allows you to set key value pairs.
//You can save arrays and objects but the key values set need to be as a string.
//This is done using a method called JSON.stringify.
//And the output needs to be parsed using a method called JSON.Parse

// //Set local storage item:
// // localStorage.setItem('name', 'Valyn'); //Run once and comment out for testing
// // localStorage.setItem('age', '27'); //Run once and comment out for testing
// //Open dev tools > Application tab > Storage > Local Storage > localhost

// //Remove from storage
// localStorage.removeItem('name');

// //Get from storage
// const name = localStorage.getItem('name');
// const age = localStorage.getItem('age');
// console.log(name, age);
// //Clear local storage
// localStorage.clear();

document.querySelector('form').addEventListener('submit', function(e) {
  //Ex 1:
  //   const task = document.getElementById('task').value;
  //   console.log(task);
  //   localStorage.setItem('task', task);
  //   alert('Task saved');
  //In the case above you can only store one one task at a time in storage. If you try to add new task the old one gets overwritten.
  //To fix this issue we can create an array of tasks and store that as a string

  //Ex 2:
  const task = document.getElementById('task').value;
  let tasks;
  //Check to see if local storage is empty.
  //If not empty pull the data and add to the tasks.
  //If it's empty set the tasks to an empty array.

  if (localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    // tasks = localStorage.getItem('tasks'); //this outputs a string which you cannot use unless it's parsed so you can use.
    tasks = JSON.parse(localStorage.getItem('tasks')); // Parsing the string output by wrapping into JSON.parse()
  }

  //Next push the new task coming through the form onto the tasks variable
  tasks.push(task);

  //Next you need to Reset the local storage tasks with the new added value.
  //Note: The new value added needs to be stored as a string value
  localStorage.setItem('tasks', JSON.stringify(tasks));
  alert('Task saved');
  e.preventDefault();
});
//localStorage only stores strings. So wrap tasks in a parse now:
const tasks = JSON.parse(localStorage.getItem('tasks'));
tasks.forEach(function(task) {
  console.log(task);
});

//Set session storage item:
sessionStorage.setItem('name', 'Selwyn');
//Open dev tools > Application tab > Storage > Session Storage > localhost
