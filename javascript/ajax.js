// AJAX - Asynchronous JavaScript and XML/ JSON

// AJAX is mainly used to get the data from the server without reloading entire page

// synchronous is also called as blocking
// JavaScript is synchronous scripting language
// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }
// console.log("After For loop");
// Food Resturant
// Sychronous Manner

// Asynchronous it is non blocking

// it will run the background

console.log("First Console log");
setTimeout(function () {
  console.log("Second Console Log");
}, 2000);

// If you making a network call (requesting data from server )
// every time we need to go asynchronous code

console.log("Third Console Log");

// AJAX Asynchronous JavaScript And XML/JSON
// JSON --> JavaScript Object Notation

// Synchronous (Blocking Code) and Asychronous
// Get My Data
// post my Data
// update the data

// Asychronous (Non Blocking Code)
// Get My Data
// post my Data
// update the data

// HTTP Methods (CRUD)
// GET  (Get the date from the server)
// PUT  (To update the existing data)
// POST  (To upload the new Data)
// DELETE (Delete the existing data)

// Status Code
// 200+
// Success
// 300+ (Redirection)
// abcd.com
// ab.com

// 400+ (client Side Issue)
// 404 resource not found
// 500+ Server ISSUE
// DOWNTIME

// xhr xmlHTTprequest
// fetch
// promises
// async and await

// AJAX Call using JavaScript
// XHR Object

const home = document.getElementById("home");
const about = document.getElementById("about");
const contact = document.getElementById("contact");
const result = document.getElementById("result");
// DRY Dont Repeat You

const getTheData = function (path) {
  const xhr = new XMLHttpRequest();
  // if()
  if (!path.startsWith("http")) {
    path += ".html";
  }
  xhr.open("GET", `${path}`, true);
  xhr.onload = function () {
    if (xhr.status == 200 && xhr.readyState == 4) {
      result.innerHTML = xhr.responseText;
    }
  };
  xhr.send();
};

about.addEventListener("click", function () {
  getTheData("about");
});
home.addEventListener("click", function () {
  getTheData("home");
});
contact.addEventListener("click", function () {
  getTheData("http://jsonplaceholder.typicode.com/users");
});
