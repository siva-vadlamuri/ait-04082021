// Selecting The Elements
const btn = document.querySelector(".btn");
const success = document.querySelector("#success");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const number = document.getElementById("number");

const sendTheDataToServer = async function (obj) {
  const response = await fetch("http://localhost:3001/register", {
    method: "POST",
    body: JSON.stringify(obj),
    headers: {
      "Content-Type": "application/json",
    },
  });
  console.log(response);
  const data = await response.text();
  success.innerText = data;
  //   console.log(data);
};

const convertTheDataIntoObject = function (username, email, password, number) {
  let obj = {
    username: username.value,
    email: email.value,
    password: password.value,
    number: number.value,
  };
  console.log(obj);
  sendTheDataToServer(obj);
};

btn.addEventListener("click", function (e) {
  e.preventDefault();

  convertTheDataIntoObject(username, email, password, number);
});

// When The Button is Click (Click Event)
// Collect the Data Of User
// ConvertTheDataIntoObject
