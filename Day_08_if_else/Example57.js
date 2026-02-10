function loginAttemptMessage(attempts) {
    if (attempts === 0) {
        return "Account Locked";
    } else if (attempts >= 1 && attempts <= 2) {
        return "Last Warning";
    } else if (attempts >= 3 && attempts <= 5) {
        return "Try Again";
    } else if (attempts > 5) {
        return "Suspicious Activity";
    } else {
        return "Invalid Attempt Count";
    }
}

// Test
console.log(loginAttemptMessage(7)); // Suspicious Activity
