// Multiple Independent Closures

// Create two counters:

// const counter1 = createCounter();
// const counter2 = createCounter();

// Exercise:

// Increment both

// Verify they don’t affect each other

function createCounter(){
    let count = 0;
    function inner(){
        count++;
        return count;
    }
    return inner;
}

let counter1 = createCounter();
let counter2 = createCounter();

console.log(counter1());
console.log(counter1());
console.log(counter2());
console.log(counter2());

//Explanation:
// The outer function is called once, and it returns the inner function.
// The inner function has access to the count variable even after the outer function has returned.
// This is because of closure.
// The count variable is persistent and is not garbage collected.