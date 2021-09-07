// Map , Filter
const arr = [2, 5, 7, 8, 10];
const products = [
  {
    id: 1,
    name: "Shoes",
    price: 500,
    brand: "nike",
  },
  {
    id: 2,
    name: "T-shirt",
    price: 200,
    brand: "alensoly",
  },
  {
    id: 3,
    name: "Apple Iphone",
    price: 50000,
    brand: "Apple",
  },
  {
    id: 4,
    name: "Redmi",
    price: 12000,
    brand: "MI",
  },
  {
    id: 3,
    name: "One plus 5",
    price: 60000,
    brand: "one plus",
  },
];
// console.log(arr.length);

// double the values
// the return type of map is an array

const double = (ele) => ele * 2;
const triple = (ele) => ele * 3;
const doubledValue = arr.map((ele, index) => ele * 2);
// console.log(doubledValue);

// fliter is used to filter the data
const filterdProducts = products.filter((product) => product.price > 20000);
// console.log(filterdProducts);

// es6 loops
// for of  arrays
// for in   Objects

const companies = [
  "Apple",
  "Tesla",
  "Facebook",
  "Google",
  "Twitter",
  "Microsoft",
];

// for (let i = 0; i < companies.length; i++) {
//   console.log(companies[i]);
// }
// for (let value of companies) {
//   console.log(value);
// }

const obj = {
  fb: "Facebook",
  ig: "Instagram",
  yt: "Youtube",
  tw: "Twitter",
  ait: "AchieversIT",
};
// console.log(obj["fb"]);
// falsy values
for (let value in obj) {
  //   console.log(value);
  console.log(`short cut of ${obj[value]} is ${value} `);
}

// false
// undefined
// null
// 0
// ''

//

// function jsx(param){

// }
// jsx([])

// reduce is array method

const arr3 = [34, 56, 78, 99, 200];

arr3.reduce((total, current) => {
  console.log(total);
  return total + current;
}, 0);
// second parameter is intial value
