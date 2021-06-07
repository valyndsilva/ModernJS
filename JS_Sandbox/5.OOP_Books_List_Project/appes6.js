// 1.Book Class
class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}

// 2.UI Class
class UI {
 // 3.Add book to list
  addBookToList(book) {
    const list = document.getElementById('book-list');
    // Create tr element
    const row = document.createElement('tr');
    // Insert cols
    row.innerHTML = `
      <td>${book.title}</td>
      <td>${book.author}</td>
      <td>${book.isbn}</td>
      <td><a href="#" class="delete">X<a></td>
    `;
  
    list.appendChild(row);
  }
// 4.Show Alert
  showAlert(message, className) {
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
  // 5.Delete Book
  deleteBook(target) {
    if(target.className === 'delete') {
      target.parentElement.parentElement.remove();
    }
  }
  // 6.Clear Fields
  clearFields() {
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';
  }
}

// 16.Local Storage Class
class Store {
  static getBooks() {
    let books;
    if(localStorage.getItem('books') === null) {
      books = [];
    } else {
      books = JSON.parse(localStorage.getItem('books')); //parse to get as object
    }

    return books;
  }
// 19.displayBooks()
  static displayBooks() {
    const books = Store.getBooks();

    books.forEach(function(book){
      const ui  = new UI;

      // 21.Add book to UI
      ui.addBookToList(book);
    });
  }
// 18.addBooks()
  static addBook(book) {
    const books = Store.getBooks();

    books.push(book);

    localStorage.setItem('books', JSON.stringify(books));
  }
// 23.removeBooks()
  static removeBook(isbn) {
    // console.log(isbn);
    const books = Store.getBooks();

    books.forEach(function(book, index){
     if(book.isbn === isbn) {
      books.splice(index, 1);
     }
    });

    localStorage.setItem('books', JSON.stringify(books));
  }
}

// 20.DOM Load Event
document.addEventListener('DOMContentLoaded', Store.displayBooks);

// 7.Event Listener for add book
document.getElementById('book-form').addEventListener('submit', function(e){
  // 8.Get form values
  const title = document.getElementById('title').value,
        author = document.getElementById('author').value,
        isbn = document.getElementById('isbn').value

  // 9.Instantiate book
  const book = new Book(title, author, isbn);

  // 10.Instantiate UI
  const ui = new UI();

  console.log(ui);

  // 11.Validate
  if(title === '' || author === '' || isbn === '') {
    // Error alert
    ui.showAlert('Please fill in all fields', 'error');
  } else {
    // Add book to list
    ui.addBookToList(book);

    // 17.Add to Local Storage
    Store.addBook(book);

    // Show success
    ui.showAlert('Book Added!', 'success');
  
    // Clear fields
    ui.clearFields();
  }

  e.preventDefault();
});

// 12.Event Listener for delete
document.getElementById('book-list').addEventListener('click', function(e){

  // 13.Instantiate UI
  const ui = new UI();

  // 14.Delete book
  ui.deleteBook(e.target);

  // 22.Remove from Local Storage
  Store.removeBook(e.target.parentElement.previousElementSibling.textContent); //a>td>previous sibling td textcontent

  // 15.Show message
  ui.showAlert('Book Removed!', 'success');

  e.preventDefault();
});