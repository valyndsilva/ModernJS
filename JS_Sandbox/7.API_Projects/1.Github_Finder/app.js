
// Init Github class
const github = new Github;

//Init UI
const ui = new UI;

// UI Vars: Search input
const searchUser = document.getElementById('searchUser');

// Search input event listener
searchUser.addEventListener('keyup', (e) => {
  // Get input text
  const userText = e.target.value;

  if(userText !== ''){
   // Make http call
   github.getUser(userText)
    .then(data => {
      if(data.profile.message === 'Not Found') { //default message from github
        // Show alert
        

      } else {
        // Show profile in DOM and UI
        // console.log(data);
        ui.showProfile(data.profile);
      }
    })
  } else {
    // Clear profile as you delete a character from the username
    
  }
}); 