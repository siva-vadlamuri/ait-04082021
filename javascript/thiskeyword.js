// this
// for normal Function this keyword will point to Window Object in Browser
// for normal Function this keyword will point to Global Object in Node JS

// for an Object this keyword will point to current Object in Browser and Node Js also
const firstName = "Mr";
// window.alert()
function myFunc() {
  console.log(this);
  console.log(firstName);
}
myFunc();

// Object Literal
const obj = {
  firstName: "Mrs",
  lastName: "Shiva",
  hobbies: ["Coding", "Movies", "Books", "Music"],
  showFirstName() {
    // console.log(this.firstName);
    this.hobbies.forEach(function (hobbie) {
      console.log(hobbie, this.firstName);
    }, this);
  },
};

obj.showFirstName();

// node is runtime Envirnoment (Chrome V8 + cpp)
// 2009

// Function Constructor

// const xhr = new XMLHttpRequest();
// const p = new Promise((resolve, reject) => {});

// Blue Print

// ES6 Object Oriented Programming
const root = document.getElementById("root");
console.log(root);
root.bgColor = "yellow";
function User(firtName, lastName, email) {
  this.firstName = firtName;
  this.lastName = lastName;
  this.email = email;

  this.getTheUserData = function () {
    console.log(
      `Name is ${this.firstName + this.lastName} and Email is ${this.email}`
    );
  };
  //   console.log(`Name is ${this.firstName} and Email is ${this.email}`);
}
// User();
const user1 = new User("Mr", "Sharma", "sharm@gmail.com");
const user2 = new User("Mr", "John", "john@gmail.com");
const user3 = new User("Mr", "Shiva", "shiva@gmail.com");
console.log(user1);
user1.getTheUserData();
console.log(user2);
user2.getTheUserData();
console.log(user3);
user3.getTheUserData();
