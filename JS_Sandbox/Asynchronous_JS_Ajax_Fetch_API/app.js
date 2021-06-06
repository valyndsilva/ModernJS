// // I.Blocking code - Synchronous version
// posts = loadPostsSync();
// // ...wait till posts are fetched
// // ...do something with posts

// doTheNextThing(); // Has to wait until posts load

// // II.Asynchronous version
// loadPostsAsync(function(){
// // ...wait till posts are fetched
// // ...do something with posts
// });

// doTheNextThing(); // Doesn't have to wait until other posts load

//Most Async code are part of an API or library: 
//XMLHttpRequest, Fetch
//JQuery Ajax, Axios, other HTTP libraries
//Node.js fs module(filesystem)

//Ways to work with Async code:
//Callbacks
//Promises
//Async/Await

//III. Ajax: Asynchronous JS & XML
//Set of web technologies, send and receive data asynchronously
//Doesn't interfere with current page
//JSON has replaced XML mostly
// Makes async requests in the background
//No page reload/refresh
//Fetch data
//Very interactive
//CORS-Enabled allows cross domain communication (Can make requests to APIs even if we are not on the same domain as them)
//Oauth, LocalData, External APIs

//IV.XHR: XmlHttpRequest Object:
// An API in the form of an object, Provided by browsers JS environment
// Methods transfer data between client / server
//Can be used with other protocols than HTTP
//Can work with data other than XML (mostly deal with JSON, plain text)

//Libraries and other methods:
//Fetch API (part of Vanilla JS), Ajax and XHR(older technologies) Axios, Superagent, JQuery(not recommended for Ajax), Node HTTP

//V.XHR Object Methods: 
document.getElementById('button').addEventListener('click', loadData);

function loadData() {
  // 1.Create an XHR Object
  const xhr = new XMLHttpRequest();

  // 2.Open (this property specifies type of request and URL / filename you want to make the request to)
  xhr.open('GET', 'data.txt', true);
  // console.log('READYSTATE', xhr.readyState); // readyState is 1

  // 5.Optional - Used for spinners/loaders
  xhr.onprogress = function(){
    console.log('READYSTATE', xhr.readyState); // readyState is 3
  }
// 3.Onload
  xhr.onload = function(){
    console.log('READYSTATE', xhr.readyState); // readyState is 4
    if(this.status === 200) {
      // console.log(this.responseText);
      document.getElementById('output').innerHTML = `<h1>${this.responseText}</h1>`;
    }
  }

  // Older property (not used anymore)
  // xhr.onreadystatechange = function() {
  //   console.log('READYSTATE', xhr.readyState); // readyState runs from 1-4
  //   if(this.status === 200 && this.readyState === 4){
  //     console.log(this.responseText);
  //   }
  // }

  //6.Error
  xhr.onerror = function() {
    console.log('Request error...');
  }
//4.Send (To finalize)
  xhr.send();


    // readyState Values
    // 0: request not initialized 
    // 1: server connection established
    // 2: request received 
    // 3: processing request 
    // 4: request finished and response is ready


  // HTTP Statuses
  // 200: "OK"
  // 403: "Forbidden"
  // 404: "Not Found"
}