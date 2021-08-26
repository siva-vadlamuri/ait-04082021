// Form Events
// onchange
// focus
// blur when you loose the focus from a particular field
// input

// Step-1 You need to select the input fields which are manditory

const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const password = document.getElementById("password");
const signUp = document.querySelector(".btn");

// Sychronous vs Asychronous

// Step-2 Collect the data from the user and

// Function is a piece code which will perform a specfic task

// function needs to only one task

const validateTheForm = function (fname, lname, email, password) {
  console.log(fname, lname, email, password);
  const emailErr = document.getElementById("emailErr");

  if (fname.length < 4) {
    const firstNameErr = document.getElementById("firstNameErr");
    firstNameErr.innerText = "First Name Should be 4 characters";
  }
  if (lname.length < 4) {
    const lastNameErr = document.getElementById("lastNameErr");
    lastNameErr.innerText = "last Name Should be 4 characters";
  }
  if (password.length < 6) {
    const passwordErr = document.getElementById("passwordErr");
    passwordErr.innerText = "Password Should contain 6 characters";
  }
  if (email.length < 1) {
    emailErr.innerText = "Please Enter your Email";
  }
  // include method will check the specfic character which we passed is present on the particular
  // or not
  // console.log(email.includes("@"));

  // false  !false = true
  else if (!email.includes("@")) {
    emailErr.innerText = "Please Enter valid Email Id";
  } else {
    // const responseMessage = document.getElementById("responseMessage");
    // responseMessage.innerText = "Looks Good";
    console.log(window.location);
    window.location.href = "https://www.achieversit.com/";
  }
};

signUp.addEventListener("click", function (e) {
  //   alert("Signup");
  e.preventDefault();
  const firstNameValue = firstName.value;
  const lastNameValue = lastName.value;
  const emailValue = email.value;
  const passwordValue = password.value;
  // console.log(firstNameValue, lastNameValue, emailValue, passwordValue);
  validateTheForm(firstNameValue, lastNameValue, emailValue, passwordValue);
});

// firstName.addEventListener("change", function () {
//   console.log(firstName.value);
// });
// firstName.addEventListener("input", function () {
//   console.log(firstName.value);
// });
// lastName.addEventListener("focus", function () {
//   lastName.value = "Focus State";
// });
// lastName.addEventListener("blur", function () {
//   lastName.value = "Blur State";
// });

// Keyboard Events

// keydown
// keyup

document.addEventListener("keydown", function (e) {
  //   console.log("Key Down");
  console.log(e.key);
});

// document.addEventListener("keypress", function () {
//   console.log("Keypresed");
// });

// Page events
// resize
// scroll

window.addEventListener("resize", function () {
  // width of window
  // height of the window
  console.log(window.innerHeight);
  console.log(window.innerWidth);
});

window.addEventListener("scroll", function () {
  console.log(window.scrollY);
});
