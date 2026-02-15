// Create a function that:

// Takes a number

// Returns "Even" or "Odd"

function evenOrOdd(num){
    if(num%2===0){
        return "Number is Even";
    }
    else{
        return "Number is Odd";
    }
}
console.log(evenOrOdd(5));

//arrow function example
const evenOrOdd1 = (num)=>num%2===0?"Even":"Odd";
console.log(evenOrOdd1(5));
