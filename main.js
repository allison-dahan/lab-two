const logic = require("./lab-two");

const readlineSync = require('readline-sync');


function getDayOfTheWeekForUserDate() {
    const dateString =  readlineSync.question("In the form of YYYY-MM-DD, which date would you like to know the day of?");
    const dateStringSplit = dateString.split('-').map(Number);
    const [year, month, day] = dateStringSplit
    let month = 
    if (isNaN(month) || isNaN(day) || isNaN(year)) {
        console.log("Invalid date format. Please input date in the format of YYYY-MM-DD");
    } else {
        const dayOfWeek = logic.getDayOfTheWeek(year,month,day)
       console.log(`The day of the week for ${year}-${month}-${day} is ${dayOfWeek} .`)
    }
};

logic.makeCalendar();


