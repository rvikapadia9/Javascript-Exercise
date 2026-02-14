// Retry Mechanism (QA Favorite)
// let attempt = 1;


// Use do…while to:

// Print Attempt X

// Stop after 3 attempts

// 👉 Shows at-least-once execution
let attempt = 1;
do{
    console.log("Attempt " + attempt);
    attempt++;
} while (attempt <= 3);
console.log("Done");