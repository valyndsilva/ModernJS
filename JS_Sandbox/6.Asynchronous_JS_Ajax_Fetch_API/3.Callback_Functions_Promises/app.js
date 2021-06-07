// // ES5 Callback Function: 
// // Is a function passed in as a parameter to another function and then called within that function.

// // Callback functions can be synchronous or asynchronous.
// // Array.forEach(function()) is a callback function. Here it is synchronous.
// // setTimeout takes in a callback function which is asynchronous.

// const posts = [
//     {title: 'Post One', body: 'This is post one'},
//     {title: 'Post Two', body: 'This is post two'}
//   ];
  
  // // Synchronous method of using Callback functions:
  // function createPost(post) {
  //   setTimeout(function() {
  //     posts.push(post);
  //   }, 2000);
  // }
  
  
  // function getPosts() {
  //   setTimeout(function() {
  //     let output = '';
  //     posts.forEach(function(post){
  //       output += `<li>${post.title}</li>`;
  //     });
  //     document.body.innerHTML = output;
  //   }, 1000);
  // }
  
  // createPost({title: 'Post Three', body: 'This is post three'});
  
  // getPosts();

  // //In the above example it gets the 2 posts first before it could create a new one.
  
  // //Asynchronous method of using Callback functions:
  // function createPost(post, callback) {
  //   setTimeout(function() {
  //     posts.push(post);
  //     callback();
  //   }, 2000);
  // }
  
  
  // function getPosts() {
  //   setTimeout(function() {
  //     let output = '';
  //     posts.forEach(function(post){
  //       output += `<li>${post.title}</li>`;
  //     });
  //     document.body.innerHTML = output;
  //   }, 1000);
  // }
  // //It calls getPosts here along with createPost before the end.
  // createPost({title: 'Post Three', body: 'This is post three'}, getPosts); 

  // ES6 Promises (similar to async cb)
  const posts = [
    {title: 'Post One', body:'This is post one'},
    {title: 'Post Two', body: 'This is post two'}
  ];
  
  function createPost(post) {
    return new Promise(function(resolve, reject){ //resolve:execute once task done , reject: incase of error
      setTimeout(function() {
        posts.push(post);
  
        const error = false;
  
        if(!error) {
          resolve();
        } else {
          reject('Error: Something went wrong');
        }
      }, 2000);
    });
  }
  
  function getPosts() {
    setTimeout(function() {
      let output = '';
      posts.forEach(function(post){
        output += `<li>${post.title}</li>`;
      });
      document.body.innerHTML = output;
    }, 1000);
  }
  
  createPost({title: 'Post Three', body: 'This is post three'})
  .then(getPosts) //when we get a promises response/resolve() we handle it with '.then'
  .catch(function(err) { //when we get a promises reject() we handle it with '.catch'
    console.log(err);
  });