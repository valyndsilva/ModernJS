// Callback Function: 
//Is a function passed in as a parameter to another function and then called within that function.

//Callback functions can be synchronous or asynchronous.
//Array.forEach(function()) is a callback function. Here it is synchronous.
//setTimeout takes in a callback function which is asynchronous.

const posts = [
    {title: 'Post One', body: 'This is post one'},
    {title: 'Post Two', body: 'This is post two'}
  ];
  
  //Synchronous method of using Callback functions:
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

  //In the above example it gets the 2 posts first before it could create a new one.
  
  //Asynchronous method of using Callback functions:
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
  //It calls getPosts here along with createPost before the end.
  createPost({title: 'Post Three', body: 'This is post three'}, getPosts); 
