// Find First Multiple of 7

// Starting from 1, find the first number divisible by 7 using while.

// Find first multiple of 7 starting from 1

let num = 1;

while (true) {
    if (num % 7 === 0) {
        console.log("First multiple of 7 is:", num);
        break;
    }
    num++;
}
