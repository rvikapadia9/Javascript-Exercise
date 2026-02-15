// Create a function that:

// Takes a number

// Returns its factorial

function factorial(num){
    if(num===0 || num===1){
        return 1;
    }
    else{
        return num*factorial(num-1);
    }
}
console.log(factorial(5));

//arrow function example
const factorial1 = (num)=>num===0 || num===1?1:num*factorial1(num-1);
console.log(factorial1(5));