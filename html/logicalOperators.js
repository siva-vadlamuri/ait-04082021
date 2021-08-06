// console.log(true && false);

// var username = "ait";
// var password = "123456";

// console.log(username === "ait" && password === "123456");
//   logical or  ||

// if any one one condtion is true it will return true
var isLoginedWithGoogle = false;
var isLoginedWithFacebook = false;
// console.log(isLoginedWithGoogle || isLoginedWithFacebook);

// Logical not !
var password = ""; //false
console.log(!password); //true

// falsy values
// false, 0, undefined, null, ''
// Truthy Value

// Condtional Statements  (Booleans)
//  if, else if , else  switch

// Two variables a, b, c
// if a > b print a
// else if b >a  print b
//  else print c

// Based condtion if you execute some block of code

var a = 10;
var b = 5;
var c = 7;
// if you only two scenarios then go if and else
if (a > b) {
  //true   10 > 5
  console.log("if statement");
  console.log(a);
} else {
  console.log(b);
}

// if you multiple scenarios then go for else if

var temperature = 25;
// if temperature is less than 20 'it too cool'
//  temperature is less than 30 and greater than 25 'it moderate
// if temperature is greater than 35 'little hot'

if (temperature < 20) {
  console.log("it is too cool");
} else if (temperature >= 25 && temperature <= 30) {
  console.log("it moderate");
} else if (temperature >= 35 && temperature <= 40) {
  console.log("little hot");
} else {
  console.log("It is too hot");
}

// switch
// ternary operator

// condtion? statement1 : statement 2

// 10 < 5
//   ? console.log("10 is greater than 5")
//   : console.log("5 is greater than 10");

false ? console.log("it is true") : console.log("it is false");

// Admin --> complete rights
// sub-admin --> he can add some persons
// testPeople --> conduct a test
// user --> You can consume the infromation
// guest -->

var role = "sub-admin";
switch (role) {
  case "admin":
    console.log("You have complete rights");
    break;

  case "sub-admin":
    console.log("You can add the user");
    break;

  case "test":
    console.log("You can conduct the test the users");
    break;

  case "user":
    console.log("you can consume the content of the website");
    break;
  default:
    console.log("You are guest to the website");
}

var username = "ait"; //true   !true = false
var password = "123456"; //true  !true = false
if (!username || !password) {
  console.log("please enter your username or password");
} else {
  console.log("Welcome User");
}
