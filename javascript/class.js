// OOP Object Oriented Programming
//  class based Object Oriented Programming was introduced on es6 (ES2015)
// Class

// car
// color
// modelNumber
// petrolType
// company name

// Methods
// accelaerate
// stop
// start
// Animal

// Object is a real world entity
// Human is an Object
// Bus is Object

// For an Object there will two things
// properties and methods (Behaviour)
// Height
// weight
// color

// Methods (behavior)
// walk
// talk
// eat

class Parent {
  // super
  // extends
  //   properties and methods
  constructor(height, width) {
    console.log(" parent Constructor Called");
    this.height = height;
    this.width = width;
  }
  // Constructor is a special member function which will invoke (call ) when an object is created
  //   it will intilization values

  calculateTheArea() {
    //   this will point to current object
    return this.height * this.width;
  }
}

const obj = new Parent(200, 300);

// console.log(obj.calculateTheArea());

const obj2 = new Parent(1000, 2000);
// console.log(obj2.calculateTheArea());

class Child extends Parent {
  constructor(height, width, radius) {
    console.log(" child Constructor Called");
    super(height, width);
    this.radius = radius;
    // this --> current Object
    // super --> which will invoke parent class constuctor
  }

  getTheCircleArea() {
    //   2pi(r)
    return 2 * Math.PI * this.radius;
  }
  // inheritance
  // Acquiring the propties and methods from parent class
  // reusing the code
  //   height,width,radius;
}

const child1 = new Child(100, 200, 300);
console.log(child1);
console.log(child1.getTheCircleArea());
