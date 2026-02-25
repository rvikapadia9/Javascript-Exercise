// map + filter → reduce (Interview Gold)
// let nums = [1, 2, 3, 4, 5];

// Exercise:
// Use one reduce() to:

// Double each number

// Keep only numbers greater than 5

let nums = [1, 2, 3, 4, 5];

let result = nums.reduce(function(accumulator, currentValue) {
    let doubledValue = currentValue * 2;
    if (doubledValue > 5) {
        accumulator.push(doubledValue);
    }
    return accumulator;
}, []);

console.log(result);

//Explanation:
// The reduce() method executes a reducer function (that you provide) on each element of the array, resulting in a single output value.
// The reduce() method does not modify the original array.
