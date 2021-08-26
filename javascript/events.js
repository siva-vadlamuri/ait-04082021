const btn = document.querySelector(".btn");
const hover = document.querySelector(".hover");

// btn.onclick = handleClick;

function handleClick() {
  console.log("Button Clicked");
}

// Call back function
// Defination : If you are passing function as an argument to another function that
// function is called call back function

// function processUserInput(cbfunc) {
//   //   console.log(firstValue + secondValue);
//   console.log(cbfunc);
//   const userName = prompt("Enter your name");
//   //   If something happend, then if you want to execute a function that
//   cbfunc(userName);
//   //   greeting("ait");
// }
// function greeting(name) {
//   alert(name);
// }

// processUserInput(greeting);

btn.addEventListener("click", function () {
  alert("Button Clicked");
});

const doubleClick = document.querySelector("[data-double-click]");
console.log(doubleClick);

// dblclick
doubleClick.addEventListener("dblclick", function () {
  console.log("Double Clicked");
});
hover.addEventListener("mouseover", function () {
  hover.style.backgroundColor = "#5ad";
});
hover.addEventListener("mouseleave", function () {
  hover.style.backgroundColor = "lightblue";
});

// Form Events
// onchange
// focus
// blur
// input

// keyboard
// keyup
// keydown
// Page Events
