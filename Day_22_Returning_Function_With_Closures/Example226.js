// Create a function retryTracker(maxRetries) that:

// Uses closure to track attempts

// Returns a function that:

// Increments attempts

// Returns "Retrying" or "Max retries reached"

// Goal:
// State persistence across function call

function retryTracker(maxRetries){
    let attempts = 0;
    function inner(){
        attempts++;
        if(attempts <= maxRetries){
            return "Retrying";
        }else{
            return "Max retries reached";
        }
    }
    return inner;
}

let tracker = retryTracker(3);
console.log(tracker());
console.log(tracker());
console.log(tracker());
console.log(tracker());

//Explanation:
// The outer function is called once, and it returns the inner function.
// The inner function has access to the attempts variable even after the outer function has returned.
// This is because of closure.
// The attempts variable is persistent and is not garbage collected.
