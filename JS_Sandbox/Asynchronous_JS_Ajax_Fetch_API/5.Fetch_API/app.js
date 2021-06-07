document.getElementById('button1').addEventListener('click', getText);

document.getElementById('button2').addEventListener('click', getJson);

document.getElementById('button3').addEventListener('click', getExternal);

// Get local text file data
function getText() {
  fetch('test.txt') //fetch() returns promises. When you get a response from a promise we use '.then()'
    .then(function(res){
        // console.log(res);
        // console.log(res.text()); 
      return res.text(); //from Response prototype > text prototype returns promise
    })
    .then(function(data) {
      console.log(data);
      document.getElementById('output').innerHTML = data;
    })
    .catch(function(err){
      console.log(err);
    });
}


// Get local json data
function getJson() {
  fetch('posts.json')
    .then(function(res){
      return res.json();
    })
    .then(function(data) {
      console.log(data);
      let output = '';
      data.forEach(function(post) {
        output += `<li>${post.title}</li>`;
      });
      document.getElementById('output').innerHTML = output;
    })
    .catch(function(err){
      console.log(err);
    });
}


// Get from external API
function getExternal() {
  fetch('https://api.github.com/users')
    .then(function(res){
      console.log(res.json());
      return res.json(); //from Response prototype > json prototype returns promise
    })
    .then(function(data) {
      console.log(data);
      let output = '';
      data.forEach(function(user) {
        output += `<li>${user.login}</li>`;
      });
      document.getElementById('output').innerHTML = output;
    })
    .catch(function(err){
      console.log(err);
    });
}

// Error Handling With Fetch
// Error handling with fetch is a bit different than with something like Axios or jQuery. 
// If there is an http error, it will not fire off .catch automatically. 
// You have to check the response and throw an error yourself.
function handleErrors(res) {
    if (!res.ok) throw new Error(res.error);
    return res;
  }
   
  fetch('https://devcamper.io/api/v1/bootcamps/34343')
    .then(res => res.json())
    .then(handleErrors)
    .then(res => console.log(res.data))
    .catch(err => console.log(err));