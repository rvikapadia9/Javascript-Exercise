// Print "Login successful" if username and password both are provided.
let username = "admin"; // You can change this value to test different cases
let password = "12345"; // You can change this value to test different cases
if (username !== "" && password !== "") {
    console.log("Login successful");
}           
// If either username or password is empty, nothing will be printed.
// Example Outputs:
// For username = "admin", password = "12345", Output: Login successful
// For username = "", password = "12345", Output: (no output)
// For username = "admin", password = "", Output: (no output)   