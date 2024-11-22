const currentDate = moment().format("YYYY-MM-DD");
console.log("current Date : " + currentDate);

const currentDateTime = moment().format("YYYY-MM-DD HH:MM:ss");
console.log("current Date and Time : " + currentDateTime);

const readableDateTime = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
console.log("current Date and Time : " + readableDateTime);

const dateString = moment().format("YYYY-MM-DD HH:MM:ss");
const parsedDate = moment(dateString).format("MMMM Do YYYY, h:mm:ss a");
console.log("Formatted Date:", parsedDate);

const newDateAfterAddingDays = moment().add(5, "days").format("YYYY-MM-DD");
console.log("Date after adding 5 days:", newDateAfterAddingDays);

const newDateAfterSubtractingMonths = moment()
  .subtract(2, "months")
  .format("YYYY-MM-DD");
console.log("Date after subtracting 2 months:", newDateAfterSubtractingMonths);

const startDate = moment("2024-01-01");
const endDate = moment("2024-11-18");

const diffInDays = endDate.diff(startDate, "days");
console.log("Difference in days:", diffInDays);

const diffInMonths = endDate.diff(startDate, "months");
console.log("Difference in months:", diffInMonths);

const date1 = moment("2024-11-18");
const date2 = moment("2024-12-01");

if (date1.isBefore(date2)) {
  console.log("Date1 is before Date2");
} else {
  console.log("Date1 is after Date2");
}

const currentTimeInUTC = moment.utc().format("YYYY-MM-DD HH:mm:ss");
console.log("Current Time in UTC:", currentTimeInUTC);

// const currentTimeInNY = moment
//   .tz("America/New_York")
//   .format("YYYY-MM-DD HH:mm:ss");
// console.log("Current Time in New York:", currentTimeInNY);

const validDate = moment("2024-11-18", "YYYY-MM-DD", true).isValid();
console.log("Is the date valid?", validDate);

const invalidDate = moment("2024-31-18", "YYYY-MM-DD", true).isValid();
console.log("Is the date valid?", invalidDate);
