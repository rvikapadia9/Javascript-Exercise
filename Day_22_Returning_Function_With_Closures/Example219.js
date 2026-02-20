// Create a function outer() that:

// Declares a variable count = 0

// Returns an inner function that increments and returns count

// Goal:
// Understand variable persistence.

function outer(){
    let count = 0;
    function inner(){
        count++;
        return count;
    }
    return inner;
}

let counter = outer();
console.log(counter());
console.log(counter());
console.log(counter());

//Explanation:
// The outer function is called once, and it returns the inner function.
// The inner function has access to the count variable even after the outer function has returned.
// This is because of closure.
// The count variable is persistent and is not garbage collected.