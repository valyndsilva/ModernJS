// 1.Book Constructor
function Book(title, author, isbn) {
  this.title = title;
  this.author = author;
  this.isbn = isbn;
}

// 2.UI Constructor
function UI() {}

// 7.Add Book To List
UI.prototype.addBookToList = function(book){
  // console.log(book);
  const list = document.getElementById('book-list');
  // Create tr element
  const row = document.createElement('tr');
  // console.log(row);

  // Insert cols
  row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href="#" class="delete">X<a></td>
  `;

  list.appendChild(row);
}

// Show Alert
UI.prototype.showAlert = function(message, className) {
  // Create div
  const div = document.createElement('div');
  // Add classes
  div.className = `alert ${className}`;
  // Add text
  div.appendChild(document.createTextNode(message));
  // Get parent
  const container = document.querySelector('.container');
  // Get form
  const form = document.querySelector('#book-form');
  // Insert alert
  container.insertBefore(div, form);

  // Timeout after 3 sec
  setTimeout(function(){
    document.querySelector('.alert').remove();
  }, 3000);
}

// Delete Book
UI.prototype.deleteBook = function(target){
  if(target.className === 'delete') {
    target.parentElement.parentElement.remove();
  }
}

// Clear Fields
UI.prototype.clearFields = function() {
  document.getElementById('title').value = '';
  document.getElementById('author').value = '';
  document.getElementById('isbn').value = '';
}

// 3.Event Listener to add book
document.getElementById('book-form').addEventListener('submit', function(e){
  // Get form values
  const title = document.getElementById('title').value,
        author = document.getElementById('author').value,
        isbn = document.getElementById('isbn').value

        // console.log(title,author,isbn);

  // 4.Instantiate book
  const book = new Book(title, author, isbn);

  // 5.Instantiate UI
  const ui = new UI();
  // console.log(ui);

  // Validate
  if(title === '' || author === '' || isbn === '') {
    // Error alert
    ui.showAlert('Please fill in all fields', 'error');
  } else {
    // 6.Add book to list
    ui.addBookToList(book);

    // Show success
    ui.showAlert('Book Added!', 'success');
  
    // 8.Clear fields
    ui.clearFields();
  }

  e.preventDefault();
});

// Event Listener for delete
document.getElementById('book-list').addEventListener('click', function(e){

  // Instantiate UI
  const ui = new UI();

  // Delete book
  ui.deleteBook(e.target);

  // Show message
  ui.showAlert('Book Removed!', 'success');

  e.preventDefault();
});