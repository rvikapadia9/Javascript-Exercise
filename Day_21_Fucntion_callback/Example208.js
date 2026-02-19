// Simple Callback

// Create a function greet that:

// Accepts a callback

// Calls the callback to print "Hello User"

function greet(callback){
    callback();
}

function printHello(){
    console.log("Hello Ravi");
}

greet(printHello);
