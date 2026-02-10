// environment Based Execution (Interview Gold)
// let env = "staging";


// Exercise:

// "dev" → Run Dev Tests

// "staging" → Run Regression

// "prod" → Smoke Tests Only

// Default → Invalid Environment
let env = "staging";
let testSuite;
switch (env) {  
    case "dev":
        testSuite = "Run Dev Tests";
        break;
    case "staging":
        testSuite = "Run Regression";
        break;
    case "prod":
        testSuite = "Smoke Tests Only";
        break;
    default:
        testSuite = "Invalid Environment";
}
console.log(testSuite);
    