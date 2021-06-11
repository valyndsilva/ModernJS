//V. MEDIATOR PATTERN:
// Creates an interface to communicate with colleagues which are just mediated objects. 
// Ex: Chat room. You can use socket.io to build a project.

// 1. Create a constructor User:
const User = function(name) {
    this.name = name;
    this.chatroom = null;
  }
  
  User.prototype = {
    send: function(message, to) {
      this.chatroom.send(message, this, to);
    },
    recieve: function(message, from) {
      console.log(`${from.name} to ${this.name}: ${message}`);
    }
  }
// 2. Create a constructor Chatroom: 
  const Chatroom = function() {
    let users = {}; // list of users
  
    return {
      register: function(user) {
        users[user.name] = user;
        user.chatroom = this;
      },
      send: function(message, from, to) {
        if(to) {
          // Single user receives message
          to.recieve(message, from);
        } else {
          // Multiple users receive message
          for(key in users) {
            if(users[key] !== from) { //make sure it's not from the user sending the message.
              users[key].recieve(message, from);
            }
          }
        }
      }
    }
  }
  
  const val = new User('Val');
  const jeff = new User('Jeff');
  const sara = new User('Sara');
  
  const chatroom = new Chatroom();
  
  chatroom.register(val);
  chatroom.register(jeff);
  chatroom.register(sara);
  
  val.send('Hello Jeff', jeff);
  sara.send('Hello Valyn, you are the best dev ever!', val);
  jeff.send('Hello Everyone!!!!'); // sends to everyone except himself
  