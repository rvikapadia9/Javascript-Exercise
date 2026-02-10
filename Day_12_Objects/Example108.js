// Real Automation Scenario (Interview Favorite)
// let apiResponse = {
//   status: 200,
//   data: {
//     id: 101,
//     name: "Invoice"
//   }
// };


// Exercise:

// Freeze the response

// Try modifying:

// status

// data.name

// Explain:

// Which changes are blocked

// Which are allowed
let apiResponse = {
    status: 200,
    data: {
        id: 101,
        name: "Invoice"
    }
};
Object.freeze(apiResponse);
apiResponse.status = 404;
apiResponse.data.name = "Receipt";
console.log(apiResponse); // Output: { status: 200, data: { id: 101, name: "Receipt" } }
// Explanation:
// The change to apiResponse.status is blocked because Object.freeze prevents modifications to the top-level properties of the object. However, the change to apiResponse.data.name is allowed because the nested object (data) is not frozen, so its properties can still be modified.



