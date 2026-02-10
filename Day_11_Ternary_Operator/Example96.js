// Automation Scenario (Interview Gold)
// let statusCode = 200;


// Exercise:

// 200 → "Success"

// 400 → "Bad Request"

// 401 → "Unauthorized"

// Else → "Error"

let statusCode = 200;   
let status = (statusCode === 200) ? "Success" :
    (statusCode === 400) ? "Bad Request" :
    (statusCode === 401) ? "Unauthorized" : "Error";
console.log(status);
