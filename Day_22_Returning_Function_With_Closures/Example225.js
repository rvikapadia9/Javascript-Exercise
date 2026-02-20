// Create a function passwordChecker(correctPassword) that:

// Returns a function

// Compares input password with stored one

// Returns true or false

// Goal:
// Data hiding with closures.

function passwordChecker(correctPassword){
    function inner(password){
        return password === correctPassword;
    }
    return inner;
}

let checkPassword = passwordChecker("123456");
console.log(checkPassword("123456"));

//Explanation:
// The outer function is called once, and it returns the inner function.
// The inner function has access to the correctPassword variable even after the outer function has returned.
// This is because of closure.
// The correctPassword variable is persistent and is not garbage collected.
