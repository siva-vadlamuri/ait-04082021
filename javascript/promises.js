// What is Promise

// I promised i will increase my weight by 4kgs by next month (pending state)
// After one Month if i increase 4kgs ( i fullfilled my promise)
// If i was not decreased the weight by 4kgs  I Rejected The Promise

// When you request the data from the server
// After i will give you the data
// If the Server fullfilled its promise we will get the data
// if data base is down, if the server is down it will reject promise

// Promises was introduced on ES6

// const p = new Promise(function (resolve, reject) {
//   let a = 20;
//   if (a == 10) {
//     resolve("You got the data successfully");
//   } else {
//     reject("Your request was rejected");
//   }
// });
// console.dir(p);

// then method will be called when your promise was resolve
// catch method will be called when the promise is rejected

// p.then(function (message) {
//   console.log(message);
// }).catch(function (message) {
//   console.log(message);
// });

// fetch is browser method which is used to make a network (GET,POST,DELETE,PUT)
// return type of fetch is a promise

// 3 states
// 1) Pending
//  2) resolved
//  3) rejected

fetch("https://fakestoreapi.com/products").then(function (res) {
  res.json().then(function (data) {
    console.log(data);
    const result = data;
    displayTheData(data);
  });
});
// console.log(response);

// step-1  https://fakestoreapi.com/products
// Step-2 Make this data as Dynamic HTML
// Step-3 Append Back the Dynamic HTML to front end

// Present the Data on Table Format
