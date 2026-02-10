// API Status Code Handling (QA Favorite)
// let statusCode = 404;


// Exercise:

// 200 → Success

// 400 → Bad Request

// 401 → Unauthorized

// 404 → Not Found

// Default → Server Error

let statusCode = 404;
let statusMessage;
switch (statusCode) {
    case 200:
        statusMessage = "Success";
        break;
    case 400:
        statusMessage = "Bad Request";
        break;
    case 401:
        statusMessage = "Unauthorized";
        break;
    case 404:
        statusMessage = "Not Found";    
        break;
    default:
        statusMessage = "Server Error";
}
    