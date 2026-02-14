// User Validation Simulation
// let isValid = false;
// let tries = 0;


// Use do…while to:

// Run at least once

// Stop after 3 tries or when isValid becomes true
let isValid = false;
let tries = 0;

do {
  if (tries === 2) {
    // On the third iteration (0,1,2), set isValid true before tries++ makes it 3
    isValid = true;
  }
  tries++;
} while (!isValid && tries < 3);

console.log(isValid ? "Validated" : "Not validated");
