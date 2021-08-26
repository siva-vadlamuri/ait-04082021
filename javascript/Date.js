// const { cornsilk } = require("color-name");

const dt = new Date();
console.dir(dt);
const todayDate = dt.getDate();
const currentYear = dt.getFullYear();
const currentMonth = dt.getMonth() + 1;
const currentDay = dt.getDay();

// 26/08/2021
// Months will start from 0-11

// if else, switch
const getTheCurrentDay = function (day) {
  switch (day) {
    case 1:
      return "Mon";

    case 2:
      return "Tue";
    case 3:
      return "Wed";
    case 4:
      return "Thu";
    case 5:
      return "Fri";
    case 6:
      return "Sat";
    case 7:
      return "Sun";
    default:
      return "Please Enter Correct Date";
  }
};

const completeDate = todayDate + "/" + currentMonth + "/" + currentYear;
// console.log(completeDate);

// console.log(currentDay + "This current Day");
const customCurrentDay = getTheCurrentDay(currentDay);
const completeDateToShow = customCurrentDay + " " + completeDate;
document.write("<p>" + completeDateToShow + "</p>");
// 4 to thursday

// function with return statement
const calcSum = function (firstNumber, secondNumber) {
  const total = firstNumber + secondNumber;
  return total;

  //   you done with execution
  //
};

const result = calcSum(100, 200);
console.log(result);
document.write("<h1>" + result + "</h1>");
// calling, invoking
// AJAX
// JSON

// Math Object
// Max
// Min
// 72.8889
// round
// floor
// ceil
// random

const maxValue = Math.max(20, 69, 89, 99, 12);
console.log(maxValue);
const minValue = Math.min(20, 69, 89, 99, 12);
console.log(minValue);
// 17.89999
const round = Math.round(17.12367);
console.log(round);

// floor

// 15.76
// floor (15)
// ceil (16)
// ceil

console.log(Math.floor(15.66));
console.log(Math.ceil(15.66));
// Math.pow
// Math.sqrt()
consle.log(Math.sqrt(25));

// Math.random()
