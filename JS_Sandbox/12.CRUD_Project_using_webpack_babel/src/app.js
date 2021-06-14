// JSON Server: allows to mimic a complete REST api using a JSON file. Run, stop server, view data etc.
// Can be installed using npm
// https://github.com/typicode/json-server
// Start JSON Server: json-server --watch db.json
// We need a file called db.json

import {http} from "./http";
import {ui} from "./ui";

// Get posts on DOM load
document.addEventListener('DOMContentLoaded', getPosts);

function getPosts(){
    http.get('http://localhost:3000/posts') // since get is an async method it returns a promise.
    .then(data => ui.showPosts(data))
    .catch(err => console.log(err))
}