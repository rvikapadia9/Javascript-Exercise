// API Test Validator (Interview Gold)

// Create a function statusValidator(expectedStatus) that:

// Returns a function

// Takes actual status code

// Returns true if matched, else false

// Goal:
// Reusable assertion logic.

function statusValidator(expectedStatus){
    function inner(actualStatus){
        return actualStatus === expectedStatus;
    }
    return inner;
}

let validator = statusValidator(200);
console.log(validator(200));
console.log(validator(404));

//Explanation:
// The outer function is called once, and it returns the inner function.
// The inner function has access to the expectedStatus variable even after the outer function has returned.
// This is because of closure.
// The expectedStatus variable is persistent and is not garbage collected.
