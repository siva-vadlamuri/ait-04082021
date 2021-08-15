// How to select the element in the webpage
// DOM Quries --> The Methods that finds the elements in the DOM Tree Structure
// document.getElementById('')    only one element
// document.getElementsByClassName('') collection Of Items [{},{}]
// getElementsByTagName()            collection Of Items [{},{}]
// getElementsByName()                 collection Of Items [{},{}]
// querySelector()                    only one element
// querySelectorAll()                   collection of items

var heading = document.getElementById("myHeading");
console.log(heading);
console.dir(heading);
// innerText
// innerHTML
heading.innerText = "Custom Text By JavaScript";
heading.style.backgroundColor = "orange";

var items = document.getElementsByClassName("item");
// console.log(items);
var firstItem = items[0];
firstItem.style.color = "#5ad";

// querySelector
// var logo = document.querySelectorAll(".logo");
var logo = document.querySelectorAll(".logo");
// logo.style.backgroundColor = "blue";
console.log(logo);
for (let i = 0; i < logo.length; i++) {
  logo[i].style.backgroundColor = "pink";
}
