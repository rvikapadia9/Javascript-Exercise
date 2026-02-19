// Retry Mechanism with Callback

// Create a function retryAction that:

// Accepts a callback and max retries

// Executes callback until it returns true

// Stops when retries are exhausted

// (No async needed—logic only)

function retryAction(callback, maxRetries){
    let retries = 0;
    while(retries < maxRetries){
        if(callback()){
            return true;
        }
        retries++;
    }
    return false;
}

function checkCondition(){
    return Math.random() > 0.5;
}

console.log(retryAction(checkCondition, 3));

//explanation
// 1. retryAction function accepts a callback function and max retries.
// 2. It iterates through the array and applies the callback function to each element.
// 3. It returns a new array with the callback function applied to each element.