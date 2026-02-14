// Keep adding numbers starting from 1 until the sum becomes greater than 50.
let i = 1;
let sum = 0;

do {
    sum = sum + i;
    console.log("before increment," + sum);

    i++;

    console.log("after increment," + sum);

    console.log(sum);

} while (sum <= 50);

