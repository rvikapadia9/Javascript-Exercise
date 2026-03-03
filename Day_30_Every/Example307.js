// Password Rules
// let passwords = ["Test@123", "12345"];

// Exercise:

// Check if any password is weak

// Check if all passwords are strong

let passwords = ["Test@123", "12345"];

// Check if any password is weak
let anyWeak = passwords.some(password => password.length < 8);
console.log("Any password is weak:", anyWeak);

// Check if all passwords are strong
let allStrong = passwords.every(password => password.length >= 8);
console.log("All passwords are strong:", allStrong);

//Explanation:
// The some() method tests whether at least one element in the array passes the test implemented by the provided function.
// The every() method tests whether all elements in the array pass the test implemented by the provided function.
// The some() method returns true if it finds an element for which the callback function returns true; otherwise, it returns false.
// The every() method returns true if it finds an element for which the callback function returns false; otherwise, it returns false.
// The some() method does not modify the original array.
// The every() method does not modify the original array.