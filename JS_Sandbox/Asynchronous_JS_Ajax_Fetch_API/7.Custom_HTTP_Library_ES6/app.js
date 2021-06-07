const http = new easyHTTP;

// // Get Users (GET)
// // const users = http.get('https://jsonplaceholder.typicode.com/users');
// // console.log(users); //returns a promise which is not what we want. We need the data from the promise (response).

// http.get('https://jsonplaceholder.typicode.com/users')
// .then(data => console.log(data))
// .catch(err => console.log(err));


// Create User Data
const data = {
  name: 'John Doe',
  username: 'johndoe',
  email: 'jdoe@gmail.com'
}

// // Create User (POST)
// http.post('https://jsonplaceholder.typicode.com/users', data)
// .then(data => console.log(data))
// .catch(err => console.log(err));

// // Update User (PUT)
// http.put('https://jsonplaceholder.typicode.com/users/2', data)
// .then(data => console.log(data))
// .catch(err => console.log(err));

// Delete User (DELETE)
http.delete('https://jsonplaceholder.typicode.com/users/2')
.then(data => console.log(data))
.catch(err => console.log(err));
