// Object is storage technique
// Which we detail information on user,product,

// Object

var obj = {
  // key : value
  firstName: "Mr",
  lastName: "Sharma",
  email: "sharma@gmail.com",
  phone: "777777777",
  isLogined: true,
};

// retriving the value of the Object
// console.log(obj);
console.log(obj.email);

// Array Of Objects
var courses = [
  {
    courseName: "UI Development Training",
    fees: 25000,
    trainer: "Mr Murali",
    mode: "Online",
  },
  {
    courseName: "React Js",
    fees: 25000,
    trainer: "Mr Murali",
    mode: "Online",
  },
  {
    courseName: "Angular",
    fees: 12000,
    trainer: "Mr Murali",
    mode: "Online",
  },
  {
    courseName: "Vue Js",
    fees: 25000,
    trainer: "Mr Mohan",
    mode: "Offline",
  },
];

// Array how can i access the elements
console.log(courses[0].courseName);
for (var i = 0; i < courses.length; i++) {
  console.log(courses[i].courseName);
}
// console.log(eval('20 + 30'))
let result = eval("20 * 30");
console.log(result);
