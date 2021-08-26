//

// Everthing will be executed on the Context
// Global Execution Context
x();
var globalVariable = "I am Global Variable";
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

// function loginUser(username,password){

// }
// loginUser('ait','123456')

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
// anonymous function (A function without a name )
// function with default parameters
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

// Scope
// Difference between var , let and const
// Difference between function declaration and function Expression

// Var keyword was introduced on es5 (2009)

// firstName = "Shiva"

if (true) {
  //   console.log(myName);
  var myName = "Mr John";
  //   Redeclaring
  myName = "Marry";
}

console.log(myName);

// let and const was introduced on es6 (ECMA 2015)
// let and const are block scoped variable
// Scope Accessibility of the data upto where we can access it
// const block scoped variable
// const --> constant
// If you think your data will not change through out the application

// Scope is Accessibility
if (true) {
  let firstName;
  firstName = "Mr";
  //   let firstName = "John";
  //   console.log(firstName);
  const randomAPI = "http://jsonplaceholder.typicode.com/";
  console.log(randomAPI);
}

// When to go for let and when to go for const
// if your data will change after some time (let)
// if your data will not change through out the application (const)

// global Scope (Entire File can acces the data)
// Function Scope (You can access the data within the function)
// Block Scope (We can access the data within the block)

// if you declare a variable with var keyword inside the function then it will function scope
// if you declare a variable with var keyword outside the function then it will global scope
function myFunction() {
  var email = "example@example.com";

  if (true) {
    let myRandomText = "I am random Text";
    console.log(myRandomText);
  }
  //   console.log(myRandomText);
}

// console.log(email);
myFunction();

// Differenc between Function Declaration and Function Expression
// Hoisting

// Function Declaration
// x();
function x() {
  console.log("I am X");
}

// Function Expression

const y = function () {
  console.log("I am Y");
};
y();

// Hoisting : We can access the function declaration before its declaration
// Event
