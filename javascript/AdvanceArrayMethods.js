// Arrow function
// Map
// Filter
// forEach

// Arrow function was introduced on ES6
// Modern way writing function  it is very consice way

// this

// const isEvenNumber = (number) => {
//   if (number % 2 == 0) {
//     return true;
//   } else {
//     return false;
//   }
// };

const isEvenNumber = (number) => number % 2 == 0;

// == it will check the value and ignore the data type
//  === it will check both the value and data type
// console.log(10 % 2 == 0);

const result = isEvenNumber(12);
console.log(result);

// forEach
// Array Methods

const arr = [2, 3, 67, 89, 12, 34, 66];
// forEach is an array method i will call the function everytime

// for(let i =0;i<arr.length;i++)

// forEach an array method
// for each and every element if you want to do an specfic task

// document.addEventListener("click", function (e) {});
arr.forEach(function (ele) {
  // 3

  console.log(ele);
});
// for(let i =0)

let products = [
  {
    id: 1,
    name: "Iphone",
    description: "Iphone was desined in Califorina",
    price: 30000,
  },
  {
    id: 2,
    name: "One Plus",
    description: "One Plus Description",
    price: 25000,
  },
  {
    id: 3,
    name: "Redmi",
    description: "One Plus Description",
    price: 10000,
  },
  {
    id: 4,
    name: "One Plus",
    description: "One Plus Description",
    price: 50000,
  },
];

const someNumbers = [12, 34, 56, 78, 90, 56, 33, 67, 99, 15];
// arr.forEach(function (product) {
//   if (product.price > 10000) {
//     console.log(ele);
//   }
// });
let filterForEachProduct = [];
products.forEach(function (product) {
  if (product.price > 25000) {
    filterForEachProduct.push(product);
  }
});

// Fill

const arr2 = new Array(100);
arr2.fill("nemo");
console.log(arr2);

// filter
const filteredValues = someNumbers.filter((ele) => ele % 2 == 0);

// filter is an array method which is used to filter the data

const filteredProductsAgain = products.filter(function (product) {
  if (product.price > 25000) {
    // debugger;
    return product;
  }
});
console.log(filteredProductsAgain);

// const filteredProducts = products.filter(
//   (product) => product.price > 25000 && product.price <= 3000
// );
// console.log(filteredProducts);

// console.log(filteredValues);
// Callback function
// we are passing a function as an argument to another function

// Template Literal

const firstName = "Mr";
const lastName = "Sharma";
// Multile line string are not accep
console.log(
  "My First name is" + firstName + " My Last Name" + lastName + "Sharma "
);

// In ES6 Template Literal

console.log(` My First name is  ${firstName} and last name ${lastName} `);

// for of
// for in

let userObj = {
  firstName: "Mr",
  lastName: "Sharma",
  email: "email@example.com",
  phone: 7777777777777,
  address: "",
};

// for in loop
// for(let i =0;i<10;i++){

// }
console.log(userObj["firstName"]);

for (let value in userObj) {
  // keys and values
  //   console.log(userObj[value]);
  console.log(
    `User ${value} is ${userObj[value] ? userObj[value] : "---------"}`
  );
}

// falsy value
// false
// ''
// 0
// undefined
// null

// true

// for of
// for of loop is used

const techCompanies = [
  "Apple",
  "Tesla",
  "Microsoft",
  "Google",
  "Facebook",
  "Netflix",
  "Amazon",
];

// for (let i = 0; i < techCompanies.length; i++) {
//   console.log(techCompanies[i]);
// }

for (let value of techCompanies) {
  console.log(value);
}

// for of and for in
// How to debug
// falsy values and truthy value

// es 6 concepts
// Array Descruting
// Object Descructuring
// nest Object Descruction
// Optional Chanining
// Scope Chain

// Array Destructuring
// const arr3 = [12, 45, 67, 90, 92];
// const firstValue = arr3[0];
// const secondValue = arr3[1];
// const thirdValue = arr3[2];

const [firstValue, secondValue, , , lastValue] = [12, 45, 67, 90, 92];

const usersObj = {
  UserfirstName: "Mr",
  lastName: "Sharma",
  email: "example@example.com",
  phone: 72828828222,
  address: {
    street: "276 th main road",
    city: "Bangalore",
    location: {
      latitude: "27.89.123",
      longitude: "28.71.312",
    },
  },
};

// console.log(usersObj.address.location.latitude);
// const { UserfirstName, email } = usersObj;

// Nested Object destructuring
const {
  address: {
    location: { latitude, longitude },
  },
} = usersObj;
console.log(latitude, +" " + longitude);

// console.log(`first name is ${firstName} and email is ${email}`);

// console.log(usersObj.firstName);
// console.log(usersObj.lastName);

console.log(
  `first value ${firstValue} and second value ${secondValue} and lastValue ${lastValue}`
);

const Names = {
  firstName: "Alice",
  cat: {
    name: "Dinah",
  },
};
// Optional Chaining
// true? 'It is true' : 'It is false'
console.log(Names?.dog?.name ? Names?.dog?.name : "Data not found");

console.log(
  `first value ${firstValue} and second value ${secondValue} and lastValue ${lastValue}`
);

// Scope Chain
const choclate = "Munch";
function grandParent() {
  // const choclate = "Dairy Mik";
  function parent() {  //States
    // const choclate = "Five Star";
    // lexical envrinonment
    function child() {  
       //city 'Sanfransco state'
      // const choclate = "Perk";
      console.log(choclate);
    }
    child();
  }
  parent();
}
grandParent();

// Mexico 
// 
