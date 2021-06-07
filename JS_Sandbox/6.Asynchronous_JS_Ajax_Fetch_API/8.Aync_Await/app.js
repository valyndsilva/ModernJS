//Async and Await are part of the ES7 or ES2017 standard. Fully compatible with Chrome.
// Best to compile to ES5 for production using Babel, Webpack

// function myFunc(){
//     return 'Hello';
// }
// console.log(myFunc());

// // I.Using just Async
// async function myFunc(){
//     return 'Hello';
// }
// // console.log(myFunc()); //adding async to the beginning of the function returns a promise
// myFunc()
//   .then(res => console.log(res))
//   .catch(err => console.log(err));

// // II.Using Async and Await
// async function myFunc() {
//    // When using 'async' you can also use 'await' here to wait until the task is resolved by 1st creating a new promise.
//    const promise = new Promise((resolve,reject) => {
//     setTimeout(() => resolve('Hello'), 1000);
//   });

//   const error = false;
//   if(!error){
//     const res = await promise; // Wait until promise is resolved and then send response
//     return res;
//   } else {
//     await Promise.reject(new Error('Something went wrong'));
//   }
// }

// myFunc()
//   .then(res => console.log(res))
//   .catch(err => console.log(err));

// III.Using 'async' and 'await' with fetch: (Best Method)
async function getUsers() {
    // await response of the fetch call
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
//   console.log(response);
    // Only proceed once the promise is resolved
    const data = await response.json();
    // only proceed once second promise is resolved
    return data;
  }
  
  getUsers().then(users => console.log(users));