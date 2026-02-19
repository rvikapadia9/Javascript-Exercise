// Simple Callback

// Create a function greet that:

// Accepts a callback

// Calls the callback to print "Hello User"

function greet(callback){
    callback("Ravi");
    return callback;    
}           

function printHello(name){  
    console.log("Hello " + name);
}

greet(printHello);
