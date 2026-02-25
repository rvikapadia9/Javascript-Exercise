// API Response Formatting (QA Favorite)
// let response = [
//   { status: 200 },
//   { status: 404 },
//   { status: 500 }
// ];

// Exercise:
// Return an array like:

// ["SUCCESS", "FAIL", "FAIL"]

let response = [
  { status: 200 },
  { status: 404 },
  { status: 500 }
];

let formattedResponse = response.map(function(res) {
    if(res.status === 200){
        return "SUCCESS";
    }
    else{
        return "FAIL";
    }
});

console.log(formattedResponse);

//Explanation:
// The map() method executes a provided function once for each array element.
// The map() method returns a new array.
// The map() method does not modify the original array.
