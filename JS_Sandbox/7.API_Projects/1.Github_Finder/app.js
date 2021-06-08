
// Init Github class
const github = new Github;

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
        // Show profile
        console.log(data);
      }
    })
  } else {
    // Clear profile as you delete a character from the username
    
  }
}); 