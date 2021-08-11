// DRY Dont Repeat yourself!
// alert("Hello");
// console.log(1);
// console.log(2);
// console.log(3);
// console.log(4);
// console.log(1);
// console.log(1);
// console.log(1);
// console.log(1);

// const { log } = require("node:console");

// Loops -->
// for
// while
// do

// es6
// for in
// for of

// intilization (where to start) 10 9 8
// condtion 100
// increment or decrement

// for(intilization;condtion;increment/decrement){}

// Increment ++ / decrement Operator  --
var a = 10;
// increment is nothing adding one to the varibale
a++;
// console.log(a);

// for (var i = 1; i < 10; i++) {
//   console.log(i);
// }

// while
var someNumber = 10;

// while (someNumber < 100) {
//   console.log(someNumber);
//   someNumber++;
// }
//  do while
for (var i = 1; i <= 100; i++) {
  // all even number
  //   if (i % 2 === 0) {
  //     //   2 * 2 = 4
  //     //  4 * 4 = 16
  //     // 6 * 6 = 36
  //     console.log(2 ** i);
  //   }
  //   console.log(2 ** i);
}

// do while
// var count = 67;
// do {
//   console.log(count);
//   count++;
// } while (count < 100);

// if you want execute your code atleast once if condtion is false
// entry controlled loop (for loop, while)
// exit controlled loop (do while loop)

// for loop --> when you know the intilization part

// var someNumber = 45;
// while (someNumber < 100) {
//   console.log(someNumber);
//   someNumber++;
// }

// Arrays (Data Structures)
// It will store collection of data
// products []
var student = [
  "Phanidhra",
  "Chakrapani",
  "Gurnath",
  "Uday",
  "Shiva",
  "Jahanvi",
];
//                 0      ,   1    ,         2,           3,    4
// array index starts from 0
// console.log(student[0]);

// console.log(student[4]);

// Array Methods
// length
console.log(student.length);
// console.log(student[student.length - 1]);

for (var i = 0; i < student.length; i++) {
  // i =1
  console.log(student[i]);
  //   console.log(student);
  //
}

// Array Methods
// push
// pop
// slice
// splice
// shift
// unshit
var numberArr = [23, 45, 56, 90, 89, 12];
// numberArr.push(78);
// numberArr.push(89);
// numberArr.push(91);
console.log(numberArr);
// Everthing JavaScript is Objects
numberArr.pop();
console.log(numberArr);

// includes (Boolean)
var isStudentPresent = student.includes("Manoj");
console.log(isStudentPresent);
// ("");

// slice extracting some portion
var extractedArray = numberArr.slice(0, 3);
// slice(startingPoint (inclusive),endingPoint)
console.log(extractedArray);

// splice to add or delete the elements

numberArr.unshift(108); // adding an element at starting of the array
console.log(numberArr);
numberArr.shift();
console.log(numberArr);

numberArr.splice(2, 0, 27);
console.log(numberArr);

// What is array
// push,pop,shift,unshift,slice and splice , includes

// indexOf()
// join()
// lastIndexOf()
// reverse()
// toString()
// concat()
//

// indexOf
// [23,56,89,90]

var newArr = [23, 56, 88, 99, 12, 88, 456, 78, 88];
// if the elements is present then it will return that particular index number
// else it will return -1
// return type of indexOf  number
console.log("<------------Index0f------->");
console.log(newArr.indexOf(88, 4));
console.log(newArr.lastIndexOf(88));

// indexOf will search from starting
// lastIndexOf will search last

// reverse
// to the elements
// console.log(newArr);
console.log(newArr);
console.log(newArr.reverse());

// join return new string by joining (concatenating) all the elements in an array

console.log(newArr.join(" "));
console.log(typeof newArr.join(" "));

// toString()
console.log(newArr.toString());

var Movies = ["Dark Knight", "Thor", "Star wars", "End Game"];
console.log(Movies.sort());
var sortMyNumber = [34, 67, 1000, 90, 20];
console.log(sortMyNumber.sort());

// concat --concanating

var firstArr = [34, 89, 78, 12];
var secondArr = [56, 78, 99, 12];

var finalArr = firstArr.concat(secondArr);
console.log(finalArr);

// map, reduce, filter,some,every
// function, callback function,

// String and String Methods

// String --> Sequence Of characters

console.log("I am learning JavaScript");
console.dir("I am learning JavaScript");
var myString = "I am learning JavaScript";
// console.log(myString[1]);
// length
// includes()
console.log(myString.includes("JavaScript"));
// indexOf
// lastIndexOf
// slice
var firstName = "Mr";
var lastName = "Sharma";
var fullName = firstName + lastName;
// replace
// replaceAll
// split
// toLowerCase
// toUpperCase
// trim
// trimStart
// trimEnd

// startsWith
// endsWith

var sentence = "I have a dog and i have a cat also";
// console.log(sentence.replace("have", "had"));
// console.log(sentence.replaceAll("have", "had"));
// console.log(sentence.replaceAll("have", "had"));

var sentenceSplit = sentence.split(" ");
console.log(sentenceSplit);

var fileName = "document.pdf";
var splitedFileName = fileName.split(".");
console.log(splitedFileName);
var extention = splitedFileName[splitedFileName.length - 1];
console.log(extention);
if (extention !== "pdf") {
  alert("please upload a pdf document");
}

// trim removing the spaces from starting and ending
var first = " nameissiva ";
console.log(first.length);
console.log(first.trim());
