// Initialize an array 'users' with role names
let users = ["Admin", "Manager", "User"];

// Initialize counter variable 'i' to 0
let i = 0;

// Start while loop to iterate through each user role
// Logic: Runs as long as 'i' is less than the total number of users (users.length)
while (i < users.length) {
    // Log the validation message for the current role
    // Logic: Uses template literals (` `) to embed the value of users[i] dynamically
    console.log(`Validating role: ${users[i]}`);
    
    // Placeholder for actual validation logic (e.g., checking a dropdown in a test)
    // expect(roleDropdown).toContain(users[i]);
    
    // Increment 'i' to move to the next user in the array
    i++;
}
