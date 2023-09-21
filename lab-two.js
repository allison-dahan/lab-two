

function isLeapYear(year){
if (year % 4 == 0 && year % 100 !== 0 || year % 400 == 0) {
    return true;
} else {
    return false;
}

}



function whichCentury(year) {
if (Math.trunc(year/100) == 16) {
    monthCode += 6;
} else if (Math.trunc(year/100) == 17) {
    monthCode += 4;
} else if (Math.trunc(year/100) == 18) {
    monthCode += 2;
} else if (Math.trunc(year/100) == 20) {
    monthCode += 6;
} else if (Math.trunc(year/100) == 21) {
    monthCode += 4;
} else if (isLeapYear(year) == true && (month = "January" || "February")) {
    monthCode -= 1;
} else {
    return
} 

};



function monthCode(month) {
    const months = {
        January: 1,
        February: 4,
        March: 4,
        April: 0,
        May: 2,
        June: 5,
        July: 0,
        August: 3,
        September: 6,
        October: 1,
        November: 4,
        December: 6

    };
    if (months.hasOwnProperty(month)) {
        return months[month];
    }
}

function getDayOfTheWeek(year,month, day) {
    const lastTwoDigits = year % 100;

    const amountOfTwelves = Math.floor(lastTwoDigits / 12);

    const remainderByTwelve = lastTwoDigits % 12;

    const byFour = Math.floor(remainderByTwelve / 4);

    const dayCode = {
        0: "Saturday",
        1: "Sunday",
        2: "Monday",
        3: "Tuesday",
        4: "Wednesday",
        5: "Thursday",
        6: "Friday"
    };

    const result =  (amountOfTwelves + remainderByTwelve + byFour + day + monthCode(month)) % 7;

    if (dayCode.hasOwnProperty(result)) { 
        return dayCode[result];
    }
  }
console.log(getDayOfTheWeek(1999, "September", 19));

function makeCalendar(year) {
  
    const daysOfTheWeek = ["Sunday", "Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]

        for (let month = 0; month < 12; month++) {
    // Months start on 0 => January = 0, February = 1,..., December = 11

         const daysOfMonth = new Date(year, month + 1, 0).getDate();

// day 0 refers to the last day of previous month;
// months are a zero-based index, adding 1 to month gets 
// the last day of the month that you input
// .getDate returns the number of the last day of the month 

         for (let day = 1; day <= daysOfMonth; day++) {
   
        const date = new Date(year, month, day);
      
        const dayOfTheWeek = daysOfTheWeek[date.getDay()];
// date.getDay() refers to each day of the week as a number
// The week start with Sunday which is referred to as 0, ... Monday = 1, Tuesday = 2...., Saturday = 6
//by using the number returned from date.getDate as the index for the array daysOfTheWeek
//daysOfTheWeek imitates the way JS represent each day of the week as a number


        console.log(`${month + 1} - ${day} - ${year} is ${dayOfTheWeek}.`)
}
        
}
}


module.exports = {getDayOfTheWeek, makeCalendar};
    
