// Password Strength Check
// let password = "Test@123";


// Exercise:

// If password length ≥ 8

// If contains special character → "Strong Password"

// Else → "Weak Password"

// Else → "Too Short"
let password = "Test@123";
if (password.length >= 8) {
    if (/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
        console.log("Strong Password");
    } else {
        console.log("Weak Password");
    }   
} else {
    console.log("Too Short");
}


