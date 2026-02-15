// Automation-Style Scenario (Interview Gold)

// Create a function that:

// Takes an API statusCode

// Returns:

// "SUCCESS" for 200

// "NOT FOUND" for 404

// "ERROR" for anything else

function apiStatus(statusCode){
    if(statusCode===200){
        return "SUCCESS";
    }
    else if(statusCode===404){
        return "NOT FOUND";
    }
    else{
        return "ERROR";
    }
}
console.log(apiStatus(200));

//arrow function example
const apiStatus1 = (statusCode)=>statusCode===200?"SUCCESS":statusCode===404?"NOT FOUND":"ERROR";
console.log(apiStatus1(200));