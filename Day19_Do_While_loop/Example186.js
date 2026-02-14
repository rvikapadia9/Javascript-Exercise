// Count Digits
// let number = 9087;

// Count how many digits the number has using do…while.
let count = 0;
let number = 9087;

do{
    count++;
    number = Math.floor(number / 10);
} while (number > 0);

console.log(count);
//Explanation: 
// 9087 -> 908 -> 90 -> 9 -> 0
// 9087 % 10 = 7
// 9087 / 10 = 908.7 -> Math.floor(908.7) = 908 
// 908 % 10 = 8
// 908 / 10 = 90.8 -> Math.floor(90.8) = 90
// 90 % 10 = 0
// 90 / 10 = 9
// 9 % 10 = 9
// 9 / 10 = 0.9 -> Math.floor(0.9) = 0