// const { cornsilk } = require("color-name");
const btn = document.querySelector(".btn"); //class selector
const input = document.querySelector("input"); //tag selector
const fbCount = document.getElementById("count");
const cars = document.getElementById("cars");

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
// Math.pow(2,10)
// Math.sqrt()
console.log(Math.sqrt(25));
// console.log();

// Math.random()

// Step-1
// create a input field
// a button with name get OTP

// Step-2
// Handle Click event on get OTP
// btn.addEventListener("click", function () {
//   const randomNumber = Math.random() * 100000;
//   input.value = Math.round(randomNumber);
// });

// step-3
// generate a random  number

// step-4
// display in the input field

// Math.random will return a random value from 0-1
// console.log(Math.random());

// setInterval
// setTimeOut

// setTimeOut and setInterval will take two arguments
// first one is a function
// time (milliseconds)
// 1second = 1000 milliseconds
// setTimeout(function () {
//   alert("Pop up");
// }, 5000);

// if

// setInterval(function () {
//   count++;
//   console.log(count);
// }, 2000);

// if (count < 1000) {
//   let countInterval = setInterval(function () {
//     fbCount.innerText = count;
//     count++;
//   }, 1);
//   if (count == 1000) {
//     clearInterval(countInterval);
//   }
// }
// let count = 0;
// setInterval(function () {
//   if (count <= 1000) {
//     fbCount.innerText = count;
//     count++;
//   }
// }, 10);

let teslaCars = [
  "https://images.unsplash.com/photo-1617704548623-340376564e68?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dGVzbGElMjBjYXJ8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1560958089-b8a1929cea89?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dGVzbGElMjBjYXJ8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1606016159991-dfe4f2746ad5?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8dGVzbGElMjBjYXJ8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1620891549027-942fdc95d3f5?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8dGVzbGElMjBjYXJ8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
];

// [0,1,2,3]
let i = 0;
setInterval(function () {
  if (i < teslaCars.length) {
    cars.src = teslaCars[i];
    i++;
  } else {
    i = 0;
  }
}, 2000);

// array of images
// image has to change for 2000

// 10     0.001sec

// setTimeout
