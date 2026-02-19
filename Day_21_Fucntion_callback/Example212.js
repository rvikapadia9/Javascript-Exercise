// Filter Using Callback

// Create a function customFilter that:

// Accepts an array and a callback

// Returns elements that pass the condition

function customFilter(arr, callback){
    let result = [];
    for(let i = 0; i < arr.length; i++){
        if(callback(arr[i])){
            result.push(arr[i]);
        }
    }
    return result;
}

function isEven(num){
    return num % 2 === 0;
}

console.log(customFilter([1, 2, 3, 4, 5], isEven));

//explanation
// 1. customFilter function accepts an array and a callback function.
// 2. It iterates through the array and applies the callback function to each element.
// 3. It returns a new array with the callback function applied to each element.