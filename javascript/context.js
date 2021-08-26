// console.log(x, y);
// debugger;
// Global Execution
// When Calling a function a small execution context was created

debugger;
var x = 10;
var y = 20;

addTwoNumber();
// Execution Context
function addTwoNumber() {
  const firstNumber = 100;
  const secondNumber = 200;

  console.log(firstNumber + secondNumber);
}

function subTwoNumbers() {
  console.log(y - x);
}

// At global Execution all the variables are scaned and assigned undefined
// myFunc();
// console.log(API);
const API = "https://www.customerssdata.com/1";
var someNumber = 10;
const myFunc = function (greeting) {
  alert(greeting);
};
// myFunc("Hello Users");

// var myFunc = function (someGreeting) {
//   alert(someGreeting);
// };
// myFunc("Bye User");
