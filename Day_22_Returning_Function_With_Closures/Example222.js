// Private Counter

// Create a function createCounter() that:

// Uses a private variable count

// Returns a function to increment count

// Goal:
// Data encapsulation using closures.

function createCounter(){
    let count = 0;
    function inner(){
        count++;
        return count;
    }
    return inner;
}

let counter = createCounter();
console.log(counter());
console.log(counter());
console.log(counter());

//Explanation:
// The outer function is called once, and it returns the inner function.
// The inner function has access to the count variable even after the outer function has returned.
// This is because of closure.
// The count variable is persistent and is not garbage collected.
