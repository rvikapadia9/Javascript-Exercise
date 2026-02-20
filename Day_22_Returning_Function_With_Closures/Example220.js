// Create a function greetUser(name) that:

// Accepts a name

// Returns a function that prints "Hello <name>"

// Goal:
// Closure capturing parameters.

function greetUser(name){
    function greet(){
        console.log("Hello " + name);
    }
    return greet;
}

let greet = greetUser("Ravi");
greet();

//Explanation:
// The outer function is called once, and it returns the inner function.
// The inner function has access to the name variable even after the outer function has returned.
// This is because of closure.
// The name variable is persistent and is not garbage collected.
