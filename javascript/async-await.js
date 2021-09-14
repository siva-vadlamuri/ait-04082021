// ASYNC AWAIT was introduced on ES7

// When we need to write asynchronous code

// ASYNC
// AWAIT await will wait untill the promise either resolved nor rejected

const getData = async () => {
  //   const value = {
  //       promise : 'reject'
  //   };
  const response = await fetch("https://fakestoreapi.com/products");
  console.log(response);
  //   const data = await response.json();
  //   console.log(data);
};
getData();
console.log("Fetching Data From Server");

// rest Operator
//  ...
// Rest Operator (...) you can pass infinte number of arguments

function calcSum(a, b, c) {
  console.log(a + b);
}
calcSum(10, 20);

function sum(...params) {
  //   console.log(a + b + c + d + e + f + g);
  let total = 0;
  for (let value of params) {
    total += value;
  }
  console.log(total);
}
sum(10, 20);

// Spreed (...) Operator

// To Spreed the Elements

let arr = [26, 36, 81881, 88, 12, 78];
// function calcTotal(myArr) {
//   for (let value of myArr) {
//     console.log(value);
//   }
// }
// calcTotal(arr);

// Concat two arrays
let arr2 = [23, 56, 12, 99, 09];
let arr3 = [78, 90, 09, 12, 111];
console.log(...arr2);
console.log(...arr3);
// let arr4 = arr2.push(arr3);
let arr4 = [...arr2, ...arr3];
console.log(arr4);

// console.log(arr);
// console.log(...arr);

const maximumValue = Math.max(...arr);
console.log(maximumValue);
