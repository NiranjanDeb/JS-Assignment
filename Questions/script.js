// Function to filter numbers divisible by 7
// function divBySeven(arr) {
//     return arr.filter(num => num % 7 === 0); 
// }
// let numbers = [14, 21, 34, 49, 50, 77, 84, 100,126];
// let divisible = divBySeven(numbers);
// console.log("Numbers divisible by 7:", divisible);



// A class is a template for creating objects. It defines the properties (attributes) and behaviors (methods) that the objects created from the class will have.

// class Person {
//     constructor(name, age) {
//       this.name = name; 
//       this.age = age; 
//     }
  
//     // Method to display information
//     displayInfo() {
//       console.log(`Name:${this.name},Age:${this.age}`);
//     }
//   }


// A class variable is a variable that is shared among all instances of the class.Class variables are defined using the static keyword, and they belong to the class itself rather than to any specific object.
// class Circle {
//     static pi = 3.14; // Class variable
  
//     constructor(radius) {
//       this.radius = 20; // Instance variable
//     }
  
//     // Method to calculate the area of the circle
//     calculateArea() {
//       return Circle.pi * this.radius * this.radius;
//     }
//   }
  
//   console.log(Circle.pi); // Accessing class variable directly using class name
  
  
// An object is an instance of a class. It represents a specific entity with properties and behaviors defined by the class. When you create an object, you allocate memory to hold the object's state (property values) and methods.

// Creating an instance (object) of the Person class
// let person1 = new Person("ABC", 25);
// person1.displayInfo(); 

// An interface is a way to define a contract that specifies which properties and methods a class must implement, without providing the implementation details. Interfaces are commonly used in languages like Java and TypeScript to enforce certain structures and to promote polymorphism and multiple inheritance.

// JavaScript (ES6+) does not have native interfaces, but they can be simulated using TypeScript, or by simply using objects as contracts.

// function printVehicleDetails(vehicle) {
//     if (
//         typeof vehicle.brand === "string" &&
//         typeof vehicle.model === "string" &&
//         typeof vehicle.start === "function" &&
//         typeof vehicle.stop === "function"
//     ) {
//         console.log(`Brand: ${vehicle.brand}, Model: ${vehicle.model}`);
//         vehicle.start();
//         vehicle.stop();
//     } else {
//         console.log("Invalid vehicle object passed.");
//     }
// }

// const car = {
//     brand: "Toyota",
//     model: "Camry",
//     start: function () {
//         console.log("Car is starting...");
//     },
//     stop: function () {
//         console.log("Car is stopping...");
//     },
// };

// printVehicleDetails(car);


// const invalidCar = {
//     brand: "Toyota",
//     year: 2020,
// };

// printVehicleDetails(invalidCar);




// Function to swap elements in the list
// function swapElements(list, pos1, pos2) {
//     let index1 = pos1 - 1;
//     let index2 = pos2 - 1;

//     let temp = list[index1];
//     list[index1] = list[index2];
//     list[index2] = temp;

//     return list;
// }

// let List = [23, 65, 19, 90];
// let pos1 = 1;
// let pos2 = 3;

// let swappedList = swapElements(List, pos1, pos2);
// console.log("List after swapping:", swappedList);


// Function to convert a number to Roman numeral
// function convertToRoman(num) {
//     const romanNumerals = [
//       { value: 10, symbol: "X" },
//       { value: 9, symbol: "IX" },
//       { value: 5, symbol: "V" },
//       { value: 4, symbol: "IV" },
//       { value: 1, symbol: "I" },
//     ];
  
//     let result = "";
//     for (let i = 0; i < romanNumerals.length; i++) {
//       while (num >= romanNumerals[i].value) {
//         result += romanNumerals[i].symbol;
//         num -= romanNumerals[i].value;
//       }
//     }
//     return result;
//   }
  
//   // Print Roman numerals for numbers from 1 to 40
//   for (let i = 1; i <= 40; i++) {
//     console.log(`${i} -> ${convertToRoman(i)}`);
//   }
  

// Function to square all numbers in an array using map
// function squareArray(arr) {
//     return arr.map(num => num * num);
//   }
  
//   const numbers = [1, 2, 3, 4, 5];
//   const squaredNumbers = squareArray(numbers);
  
//   console.log(squaredNumbers); 
  


  