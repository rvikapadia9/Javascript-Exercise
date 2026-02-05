// Production Safety Check 
// let environment = "prod";
// let hasApproval = false;


// Exercise:

// If environment is "prod"

// If approved → "Deploy"

// Else → "Approval Required"

// Else → "Deploy Allowed"


let environment = "prod";
let hasApproval = false;    
if (environment === "prod") {
    if (hasApproval) {
        console.log("Deploy");  
    } else {
        console.log("Approval Required");
    }
} else {
    console.log("Deploy Allowed");
}
    