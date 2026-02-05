// let statusCode = 404;
// Exercise:

// 200 → "Success"

// 400 → "Bad Request"

// 401 → "Unauthorized"

// 404 → "Not Found"

// Else → "Server Error"
let statusCode = 401; 
if (statusCode === 200) {
    console.log("Success");
}
else if (statusCode === 400) {
    console.log("Bad Request");
}   
else if (statusCode === 401) {          
    console.log("Unauthorized");
}
else if (statusCode === 404) {
    console.log("Not Found");
}
else {
    console.log("Server Error");
}
