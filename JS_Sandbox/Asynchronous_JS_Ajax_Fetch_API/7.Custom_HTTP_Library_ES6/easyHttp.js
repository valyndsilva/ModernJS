/**
 * EasyHTTP Library using ES6 Classes, Promises, Fetch API
 * Library for making HTTP Requests
 * @version 2.0.0
 * @author Valyn Silva
 * @license MIT
 * 
 */

class easyHTTP {
 // Make an HTTP GET Request
  get(url){
    //Wrap get(url) in a promise and use arrow functions
    return new Promise((resolve, reject) => {
      fetch(url) // fetch returns a promise
      .then(res => res.json())
      .then(data => resolve(data))
      .catch(err => reject(err));
    });
    }
  
   // Make an HTTP POST Request
   post(url, data) {
    //Wrap get(url) in a promise and use arrow functions
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(data) 
      }) // fetch returns a promise
      .then(res => res.json())
      .then(data => resolve(data))
      .catch(err => reject(err));
    });
  }

 // Make an HTTP PUT Request
 put(url, data) {
  //Wrap get(url) in a promise and use arrow functions
  return new Promise((resolve, reject) => {
    fetch(url, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(data) 
    }) // fetch returns a promise
    .then(res => res.json())
    .then(data => resolve(data))
    .catch(err => reject(err));
  });
}

// Make an HTTP DELETE Request
delete(url) {
  //Wrap get(url) in a promise and use arrow functions
  return new Promise((resolve, reject) => {
    fetch(url, {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json'
      }
    }) // fetch returns a promise
    .then(res => res.json())
    .then(() => resolve('Resource Deleted'))
    .catch(err => reject(err));
  });
}
    }
  
  
