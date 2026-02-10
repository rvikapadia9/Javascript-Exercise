// Month Name Finder
// let month = 2;


// Exercise:

// 1 → January

// 2 → February

// 3 → March

// Default → Invalid Month

let month = 2;
let monthName;
switch (month) {
    case 1:
        monthName = "January";
        break;
    case 2:
        monthName = "February";
        break;
    case 3:
        monthName = "March";
        break;
    default:    
        monthName = "Invalid Month";
}
console.log(monthName);
