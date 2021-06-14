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

// Listen for delete
document.querySelector('#posts').addEventListener('click', deletePost);

// Listen for edit state: when you click edit it changes the state of the form adding the post you click into the form inputs, and change the button to cancel button.
//Using event delegation:
document.querySelector('#posts').addEventListener('click',enableEdit);


function getPosts(){
    http.get('http://localhost:3000/posts') // since get is an async method it returns a promise.
    .then(data => ui.showPosts(data))
    .catch(err => console.log(err))
}
// Submit Post
function submitPost(){
    const title = document.querySelector('#title').value;
    const body = document.querySelector('#body').value;
    if(title == '' || body === ''){
        ui.showAlert('Please fill in all fields', 'alert alert-danger');
    } else{
            const data = {
            // title: title,
            // body : body
            title, // ES2015 syntax if key and value is same 
            body
             }
        
        //Create post
        http.post('http://localhost:3000/posts', data)
        .then(data => {
            ui.showAlert('Post added', 'alert alert-success');
            ui.clearFields();
            getPosts();
        })
        .catch(err => console.log(err))
    }
}
// Delete Post
function deletePost(e){
    e.preventDefault();
    // console.log('delete');

    // Use event propagation to target the correct post delete link since there are multiple posts
    if(e.target.parentElement.classList.contains('delete')){
        const id = e.target.parentElement.dataset.id; // to get the id in the data-id attribute from ui.js
        if(confirm('Are you sure?')){
            http.delete(`http://localhost:3000/posts/${id}`)
            .then(data => {
                ui.showAlert('Post Removed', 'alert alert-success');
                getPosts();
            })
            .catch(err => console.log(err));
        }
    }
}

// Enable Edit State

function enableEdit(e){
// console.log(e.target); // i tag

    if(e.target.parentElement.classList.contains('edit')){
    const id = e.target.parentElement.dataset.id; //post id
    const title = e.target.parentElement.previousElementSibling.previousElementSibling.textContent;
    const body = e.target.parentElement.previousElementSibling.textContent; 
    
    const data = {
        id,
        title,
        body
    }
    //Fill form with current post
    ui.fillForm(data);
    }

    e.preventDefault();
}