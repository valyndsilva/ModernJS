// JSON Server: allows to mimic a complete REST api using a JSON file. Run, stop server, view data etc.
// Can be installed using npm
// https://github.com/typicode/json-server
// Start JSON Server: json-server --watch db.json
// We need a file called db.json

import {http} from "./http";
import {ui} from "./ui";

// Get posts on DOM load
document.addEventListener('DOMContentLoaded', getPosts);

// Listen for add post
document.querySelector('.post-submit').addEventListener('click', submitPost);

function getPosts(){
    http.get('http://localhost:3000/posts') // since get is an async method it returns a promise.
    .then(data => ui.showPosts(data))
    .catch(err => console.log(err))
}

function submitPost(){
    const title = document.querySelector('#title').value;
    const body = document.querySelector('#body').value;
    const data = {
        // title: title,
        // body : body
        title, // ES2015 syntax if key and value is same 
        body
    }

    //Create post
    http.post('http://localhost:3000/posts', data)
    .then(data => {
        getPosts();
    })
    .catch(err => console.log(err))
}
