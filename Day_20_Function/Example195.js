// Create a function that:

// Takes two numbers

// Returns the larger number
function larger(a,b){
    if(a>b){
        return a;
    }
    else{
        return b;
    }
}
console.log(larger(5,10));

//arrow function example
const larger1 = (a,b)=>a>b?a:b;
console.log(larger1(5,10));

// Create a function that:

// Takes 5 numbers

// Returns the larger number
function larger5(a,b,c,d,e){
    if(a>b && a>c && a>d && a>e){
        return a;
    }
    else if(b>a && b>c && b>d && b>e){
        return b;
    }
    else if(c>a && c>b && c>d && c>e){
        return c;
    }
    else if(d>a && d>b && d>c && d>e){
        return d;
    }
    else{
        return e;
    }
}
console.log(larger5(5,10,15,20,25));

//arrow function example
const larger51 = (a,b,c,d,e)=>a>b && a>c && a>d && a>e?a:b>a && b>c && b>d && b>e?b:c>a && c>b && c>d && c>e?c:d>a && d>b && d>c && d>e?d:e;
console.log(larger51(5,10,15,20,25));