// How to create elements using JavaScript
//
// var body = document.body;
// getElementById('')
var randomText = document.querySelector(".random-text");
// var faqSection = document.querySelector("#faq-section");
console.log(randomText);
var div = document.createElement("div");
var strong = document.createElement("strong");

strong.innerText = "Division 1";
div.append(strong);
randomText.append(div);

// remove the element in a web page
// div.remove();
// strong.remove();
// div.removeChild(strong);

// randomText.append(div);
// append and appendChild

// body.append("Hello World");
// body.appendChild("Hello world");
// For append you append string
// appendChild you cannot append string

// getAttributes (Get an attribute)
// setAttribute  (set an attribute)

console.log(randomText.getAttribute("id"));
console.dir(randomText);

randomText.setAttribute("id", "my-id");
randomText.setAttribute("title", "mySection");

// console.dir()

randomText.classList.add("my-section-heading");
