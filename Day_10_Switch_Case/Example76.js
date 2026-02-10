const day = 5;
let dayName;

switch (day) {
    case 1:
        dayName = "monday";
        break;
    case 2:
        dayName = "tuesday";
        break;
    case 3:
        dayName = "wednesday";
        break;
    case 4:
        dayName = "thursday";
        break;
    case 5:
        dayName = "friday";
        break;
    case 6:
        dayName = "saturday";
        break;
    case 7:
        dayName = "sunday";
        break;
    default:
        dayName = "invalid day";
}

console.log(dayName);
