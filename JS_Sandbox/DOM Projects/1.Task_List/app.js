// Define UI Vars
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

// Load all event listeners
loadEventListeners();

// Load all event listeners
function loadEventListeners() {
  // 8. DOM Load event
  document.addEventListener('DOMContentLoaded', getTasks);
  // Add task event
  form.addEventListener('submit', addTask);
  // Remove task event
  taskList.addEventListener('click', removeTask);
  // Clear task event
  clearBtn.addEventListener('click', clearTasks);
  // Filter tasks event
  filter.addEventListener('keyup', filterTasks);
}

// 9. Get Tasks from LS
function getTasks() {
  let tasks;
  if(localStorage.getItem('tasks') === null){
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.forEach(function(task){
    // Create li element
    const li = document.createElement('li');
    // Add class
    li.className = 'collection-item';
    // Create text node and append to li
    li.appendChild(document.createTextNode(task));
    // Create new link element
    const link = document.createElement('a');
    // Add class
    link.className = 'delete-item secondary-content';
    // Add icon html
    link.innerHTML = '<i class="fa fa-remove"></i>';
    // Append the link to li
    li.appendChild(link);

    // Append li to ul
    taskList.appendChild(li);
  });
}

// 1. Add Task
function addTask(e) {
  if(taskInput.value === '') {
    alert('Add a task');
  }

  // Create li element
  const li = document.createElement('li');
  // Add class
  li.className = 'collection-item';
  // Create text node and append to li
  li.appendChild(document.createTextNode(taskInput.value));
  // Create new link element
  const link = document.createElement('a');
  // Add class
  link.className = 'delete-item secondary-content';
  // Add icon html
  link.innerHTML = '<i class="fa fa-remove"></i>';
  // Append the link to li
  li.appendChild(link);

  // Append li to ul
  taskList.appendChild(li);

  // 6. Store in LS
  storeTaskInLocalStorage(taskInput.value);

  // Clear input
  taskInput.value = '';

  e.preventDefault();
}

// 7.Store Task - Persist values to local storage
function storeTaskInLocalStorage(task) {
  let tasks;
  if(localStorage.getItem('tasks') === null){
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.push(task);

  localStorage.setItem('tasks', JSON.stringify(tasks));
}

// 2. Remove Task
function removeTask(e) {
  if(e.target.parentElement.classList.contains('delete-item')) { //parent of the i tag
    if(confirm('Are You Sure?')) {
      e.target.parentElement.parentElement.remove(); //parent of the a tag

      // 10. Remove from LS
      removeTaskFromLocalStorage(e.target.parentElement.parentElement);
    }
  }
}

// 11. Remove from LS
function removeTaskFromLocalStorage(taskItem) {
  let tasks;
  if(localStorage.getItem('tasks') === null){
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.forEach(function(task, index){
    if(taskItem.textContent === task){ //if taskItem text matches the task in the current iteration 
      tasks.splice(index, 1); //delete that 1 task from the index
    }
  });
  //Set the LS again
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

// 3. Clear Tasks
function clearTasks() {
  // taskList.innerHTML = '';

  // Faster way of removing each task (Recommended Method)
  while(taskList.firstChild) { //while there is something in the list
    taskList.removeChild(taskList.firstChild);
  }

  // https://jsperf.com/innerhtml-vs-removechild

  // Clear from LS
  clearTasksFromLocalStorage();
}

// Clear Tasks from LS
function clearTasksFromLocalStorage() {
  localStorage.clear();
}

// 4. Filter Tasks
function filterTasks(e) {
  const text = e.target.value.toLowerCase(); // value entered in the filter input

  document.querySelectorAll('.collection-item').forEach(function(task){
    const item = task.firstChild.textContent;
    if(item.toLowerCase().indexOf(text) != -1){ // Retuns a value of -1 if there is no match
      task.style.display = 'block'; // if it finds a match to the characters typed in the filter input.
    } else {
      task.style.display = 'none';
    }
  });
}