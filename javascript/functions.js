//
// Array methods
var arr = [23, 78, 90];
arr.push(88);
// Push
// Pop
// splice
// slice

// login
// register
// addToCart
// removeProductFromTheCart
// payment

// How to declare Function
// function functionName
function greetTheUser(name = "John") {
  //parameters
  // body of the function
  //   console.log(name);
  console.log("Welcome " + name);
}

// how to call/invoking a function
greetTheUser("Phani"); // aruguments
greetTheUser("Marry");
greetTheUser("Shiva");
greetTheUser("Chainya");

// parameters and arguments
// Parameters --> When you declared a function if you pass anything as input
// Arguments --> When you calling a function if you pass anything

// Different type of functions
// function declaration or function statement
// anonomous function (A function without a name )
// function with default paramters
// function with no parameters
// function with parameters
// function expression
// Self Execution Function
// Arrow Functions
// Recursive Function
// Function with return statement

// function with no parameters

// Function Expreesion
// If you are assiging a function to a variable

var myFunc = function (param) {
  //   alert(param);
};
console.log(myFunc);
myFunc('"I am Function Expression"');

// self execution function
// It will call or invoke itself
(function () {
  //   alert("self execution function");
})();

// Either Browser Will Execute you or user will execute the function

var gstCalculation = function (ammount, gst) {
  if (!gst) {
    gst = 18;
  }
  // ammount/gst * 100
  // ammount/gst
  var total = ammount + (ammount / 100) * gst;
  console.log(total);
};

gstCalculation(10000, 20);
gstCalculation(100000);
gstCalculation(18000);
gstCalculation(200000);
