// Intro to ES2015 Modules
// A module could be a function, an object, an object full of functions etc.

// //Common JS syntax:
// module.exports = { // whatever is added here is available to other files
//     name: 'Val',
//     email: 'test@test.com'
// }

// ES2015 syntax:
export const person ={  // using 'export' lets the person be accessible through other files.
    name: 'Val',
    email: 'test@test.com'
};

export function sayHello(){
    return `Hello ${person.name}`;
}

const greeting = 'Hello World';
export default greeting; // when you use default you don't need to use {} later to import it in somewhere else.