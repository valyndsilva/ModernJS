// Callback Function: 
//Is a function passed in as a parameter to another function and then it's ran inside the function body. 

//Callback functions can be synchronous or asynchronous.
//Array.forEach(function()) is a callback function. Here it is synchronous.
//setTimeout takes in a callback function which is asynchronous.

const posts = [
    {title: 'Post One', body: 'This is post one'},
    {title: 'Post Two', body: 'This is post two'}
  ];
  
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
  
  function createPost(post, callback) {
    setTimeout(function() {
      posts.push(post);
      callback();
    }, 2000);
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
  
  createPost({title: 'Post Three', body: 'This is post three'}, getPosts);
