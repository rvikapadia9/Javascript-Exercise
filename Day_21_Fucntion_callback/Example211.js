// Array Processing (Manual HOF)

// Create a function customMap that:

// Accepts an array and a callback

// Returns a new array with callback applied

// (No use of built-in map())

function customMap(arr, callback){
    let result = [];
    for(let i = 0; i < arr.length; i++){
        result.push(callback(arr[i]));
    }
    return result;
}

function double(num){
    return num * 2;
}

console.log(customMap([1, 2, 3, 4, 5], double));

//explanation
// 1. customMap function accepts an array and a callback function.
// 2. It iterates through the array and applies the callback function to each element.
// 3. It returns a new array with the callback function applied to each element.