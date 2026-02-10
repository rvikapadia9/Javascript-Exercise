// Bank Withdrawal (Real Scenario)
// let balance = 10000;
// let withdrawAmount = 8000;


// Exercise:

// If balance > 0

// If withdrawAmount ≤ balance → "Withdrawal Successful"

// Else → "Insufficient Balance"

// Else → "Account Empty"
let balance = 10000;
let withdrawAmount = 8000;
if (balance > 0) {
    if (withdrawAmount <= balance) {
        console.log("Withdrawal Successful");   
    } else {    
        console.log("Insufficient Balance");
    }
} else {
    console.log("Account Empty");
}   
    