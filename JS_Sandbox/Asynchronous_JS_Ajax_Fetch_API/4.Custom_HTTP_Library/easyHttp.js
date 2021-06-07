function easyHTTP() {
    this.http = new XMLHttpRequest();
  }
  
  // Make an HTTP GET Request
  easyHTTP.prototype.get = function(url, callback) {
    this.http.open('GET', url, true);
  
    let self = this;
    this.http.onload = function() {
      if(self.http.status === 200) {
          //'this' here is undefined within a function in ES5. Use let self = this;
          //'this'' does work within the function if you use ES6 arrow functions as it uses a lexical 'this'
        //   console.log(this.http.responseText); 
        callback(null, self.http.responseText); // cb(error, responsePosts)
      } else {
        callback('Error: ' + self.http.status);
      }
    }
  
    this.http.send();
  }
  

// Make an HTTP POST Request
easyHTTP.prototype.post = function(url, data, callback) {
    this.http.open('POST', url, true);
    this.http.setRequestHeader('Content-type', 'application/json');
  
    let self = this;
    this.http.onload = function() {
        //don't need to check status since we are doing a POST request
      callback(null, self.http.responseText); // new post will have an id of 101 since the jsonplaceholder already has 100 posts.
    }
  
    this.http.send(JSON.stringify(data)); //send data as a JSON string
  }
  
  
  // Make an HTTP PUT Request
  easyHTTP.prototype.put = function(url, data, callback) {
    this.http.open('PUT', url, true);
    this.http.setRequestHeader('Content-type', 'application/json');
  
    let self = this;
    this.http.onload = function() {
      callback(null, self.http.responseText);
    }
  
    this.http.send(JSON.stringify(data));
  }
  
  // Make an HTTP DELETE Request
  easyHTTP.prototype.delete = function(url, callback) {
    this.http.open('DELETE', url, true);
  
    let self = this;
    this.http.onload = function() {
      if(self.http.status === 200) {
        callback(null, 'Post Deleted');
      } else {
        callback('Error: ' + self.http.status);
      }
    }
  
    this.http.send();
  }
  
  