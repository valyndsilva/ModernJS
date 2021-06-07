const http = new easyHTTP;

// // Get Posts
// http.get('https://jsonplaceholder.typicode.com/posts', function(err, responsePosts) {
//   if(err) {
//     console.log(err);
//   } else {
//     console.log(responsePosts);
//   }
// });

// // Get Single Post
// http.get('https://jsonplaceholder.typicode.com/posts/1', function(err, responsePosts) {
//   if(err) {
//     console.log(err);
//   } else {
//     console.log(responsePosts);
//   }
// });

// Create Data
const data = {
    title: 'Custom Post',
    body: 'This is a custom post'
  };
  
  // Create Post
  // http.post('https://jsonplaceholder.typicode.com/posts', data, function(err, responsePosts) {
  //   if(err) {
  //     console.log(err);
  //   } else {
  //     console.log(responsePosts);
  //   }
  // });
  
  // Update Post
  // http.put('https://jsonplaceholder.typicode.com/posts/5', data, function(err, responsePosts) {
  //   if(err) {
  //     console.log(err);
  //   } else {
  //     console.log(responsePosts);
  //   }
  // });
  
  // Delete Post
  http.delete('https://jsonplaceholder.typicode.com/posts/1', function(err, responsePosts) {
    if(err) {
      console.log(err);
    } else {
      console.log(responsePosts);
    }
  });