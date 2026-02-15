// Create a function that:

// Takes username and password

// Returns true if credentials match, otherwise false
function checkCredentials(username,password){
    if(username==="admin" && password==="admin"){
        return true;
    }
    else{
        return false;
    }
}
console.log(checkCredentials("admin","admin"));

//arrow function example
const checkCredentials1 = (username,password)=>username==="admin" && password==="admin"?true:false;
console.log(checkCredentials1("admin","admin"));