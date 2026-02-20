// Multiplier Function

// Create a function multiplyBy(factor) that:

// Returns a function

// Multiplies input number by factor

// Goal:
// Reusable function factories.

function multiplyBy(factor){
    function inner(number){
        return number * factor;
    }
    return inner;
}

let multiplyByTwo = multiplyBy(2);
console.log(multiplyByTwo(3));

//Explanation:
// The outer function is called once, and it returns the inner function.
// The inner function has access to the factor variable even after the outer function has returned.
// This is because of closure.
// The factor variable is persistent and is not garbage collected.