// Menu Selection (Classic Interview Question)

// Simulate a menu using do…while:

// Show menu options

// Exit when user chooses "exit"

// (No actual input needed—just logic)
let choice = "";

do {
  console.log("1. Login");
  console.log("2. Signup");
  console.log("3. Exit");

  // Simulate user choice
  choice = "3"; // Change to "1" or "2" to test other paths

  if (choice === "1") console.log("Login selected");
  else if (choice === "2") console.log("Signup selected");
  else if (choice === "3") console.log("Exiting...");
  else console.log("Invalid choice");
} while (choice !== "3");
