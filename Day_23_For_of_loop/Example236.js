// Validate API Status Codes
// let statuses = [200, 404, 500, 200];

// Exercise:
// Count how many responses are successful (200) using for…of.

let statuses = [200, 404, 500, 200];
let successful = 0;
for(let status of statuses){
    if(status === 200){
        successful++;
    }
}
console.log(successful);

//Explanation:
// The for...of loop is used to iterate over the elements of an array.
// The loop iterates over the elements of the array in order.
// The loop terminates when all elements of the array have been iterated over.