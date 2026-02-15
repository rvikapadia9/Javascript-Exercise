// Create a function that:

// Takes obtained marks and total marks

// Returns the percentage
function percentage(obtainedMarks,totalMarks){
    return (obtainedMarks/totalMarks)*100;
}
console.log(percentage(80,100));

//arrow function example
const percentage1 = (obtainedMarks,totalMarks)=>(obtainedMarks/totalMarks)*100;
console.log(percentage1(80,100));

// Create a function that:

// Takes marks of 5 subjects

// Returns the percentage
function percentage5(a,b,c,d,e){
    return (a+b+c+d+e)/5;
}
console.log(percentage5(80,90,100,70,60));

//arrow function example
const percentage51 = (a,b,c,d,e)=>(a+b+c+d+e)/5;
console.log(percentage51(80,90,100,70,60));