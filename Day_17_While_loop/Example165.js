// Count Digits

// Given:

// let number = 4587;


// Count how many digits the number has using while.
// Count Digits

let number = 4587;
let count = 0;

while (number > 0) {
    count++;
    number = Math.floor(number / 10);
}

console.log("Total digits:", count);
