// Create a function add(x) that:

// Returns a function

// The returned function accepts y and returns x + y

// Usage example:

// const addFive = add(5);
// addFive(3); // ?

function add(x){
    function inner(y){
        return x + y;
    }
    return inner;
}

let addFive = add(5);
console.log(addFive(3));

//Explanation:
// The outer function is called once, and it returns the inner function.
// The inner function has access to the x variable even after the outer function has returned.
// This is because of closure.
// The x variable is persistent and is not garbage collected.
