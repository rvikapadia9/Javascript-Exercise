// Array Sum

// Create a function that:

// Takes an array of numbers

// Returns the total sum
function arraySum(arr){
    let sum = 0;
    for(let i=0;i<arr.length;i++){
        sum+=arr[i];
    }
    return sum;
}
console.log(arraySum([1,2,3,4,5]));

//arrow function example
const arraySum1 = (arr)=>arr.reduce((a,b)=>a+b);
console.log(arraySum1([1,2,3,4,5]));
    // 
    // Create a function that:

// Takes an array of numbers

// Returns the largest number
function largest(arr){
    let largest = arr[0];
    for(let i=1;i<arr.length;i++){
        if(arr[i]>largest){
            largest = arr[i];
        }
    }
    return largest;
}
console.log(largest([1,2,3,4,5]));

//arrow function example
const largest1 = (arr)=>arr.reduce((a,b)=>a>b?a:b);
console.log(largest1([1,2,3,4,5]));