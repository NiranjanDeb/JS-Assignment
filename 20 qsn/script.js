// JS program to show "Hello, World!" 
// console.log("Hello, World!");

// ......................................................................................

// JS program to print the sum of two numbers

// let num1 = 10;
// let num2 = 20;

// let sum = num1 + num2;
// console.log(`The sum of ${num1} and ${num2} is ${sum}`);

// ......................................................................................

// JavaScript program to compare two numbers  using if-else
// let a = 15;
// let b = 20;


// if (a > b) {
//     console.log(a + " is greater than " + b);
// } else if (a < b) {
//     console.log(a + " is less than " + b);
// } else {
//     console.log(a + " is equal to " + b);
// }

// ......................................................................................

// JavaScript program to print numbers using switch case

// let number = 3;

// switch (number) {
//     case 1:
//         console.log("Number is 1");
//         break;
//     case 2:
//         console.log("Number is 2");
//         break;
//     case 3:
//         console.log("Number is 3");
//         break;

//     default:
//         console.log("Number is out of range");
// }

// ......................................................................................

// Program to print all even numbers using a while loop

// let limit = 20; 
// let num = 1;

// while (num <= limit) {
//     if (num % 2 === 0) {
//         console.log(num); 
//     }
//     num++; 
// }


// ......................................................................................

// JS program to print the pattern

// let n = 3; 

// for (let i = 1; i <= n; i++) {
//     if (i === 2) {
//         console.log("**");
//     } else {
//         console.log("*");  
//     }
// }


// ......................................................................................

// JavaScript program to print the pattern

// let n = 3; 

// for (let i = n; i > 0; i--) {
   
//     console.log(" ".repeat(i - 1) + "*");
// }

// ......................................................................................

// JavaScript program to convert a string to lowercase and uppercase

// let str = "Hello, World!";
// let lowerCaseStr = str.toLowerCase();
// console.log("Lowercase: " + lowerCaseStr);
// let upperCaseStr = str.toUpperCase();
// console.log("Uppercase: " + upperCaseStr);

// ...................................................................................

// break : The break keyword is used to exit the loop entirely. When the break statement is encountered, the loop is immediately terminated.

// continue Keyword:The continue keyword is used to skip the current iteration of the loop and move to the next one. It doesn't terminate the loop but instead moves to the next iteration immediately.

// ......................................................................................

// An object in JavaScript is a collection of key-value pairs. It can store various types of data, including strings, numbers, booleans, arrays, and even other objects. The keys in an object are typically strings or symbols, and the values can be of any data type.

// Arrays are index-based, which means each element has a index starting from 0. Arrays are generally used when you need to store a list of values (such as numbers, strings, objects, or a mix of these).

// ......................................................................................

// In JavaScript, we can convert a string to an integer using several methods. they are 
// parseInt()
// Number()

// ......................................................................................





// ......................................................................................

// JavaScript program to concatenate a string and a number

// let str = "The number is: ";
// let num = 42;

// let result = str + num;
// console.log(result); 

// ......................................................................................

// JavaScript program to compare two strings by length or value

// let str1 = "hello";
// let str2 = "world";

// // Check if they are equal by value or by length
// if (str1 === str2 || str1.length === str2.length) {
//     console.log("equal");
// } else {
//     console.log("not equal");
// }

// ......................................................................................

// Given array of strings
// let arr = ["ramesh", "mukta", "satchi", "rabi", "sunandan", "ayan", "biswadeep"];


// let i = 0;
// let newArr = [];

// while (i < arr.length) {
//     if (arr[i].includes("an")) {
//         console.log(arr[i]); 
//         newArr.push(arr[i]);
//     }
//     i++;
// }

// console.log("New array:", newArr);


// ......................................................................................


// A function is a block of code designed to perform a particular task. It allows you to enter logic and reuse it throughout the program. Functions can accept inputs and return a value as output.

// Function to calculate age from the date of birth
// function calculateAge(dob) {
//     let currentDate = new Date();
    
//     let birthDate = new Date(dob);
    
//     let age = currentDate.getFullYear() - birthDate.getFullYear();


//     return age;
// }

// let dob = "1990-04-15";
// let age = calculateAge(dob);

// console.log("The person's age is: " + age);


// ......................................................................................

// A recursive function is a function that calls itself to solve a smaller instance of the problem until it reaches a base case (a condition to stop the recursion). It is often used to break down complex problems into simpler ones.

// Function to find factorial using a for loop
// function factorialForLoop(n) {
//     let result = 1;

//     // Loop from 1 to n
//     for (let i = 1; i <= n; i++) {
//         result *= i; 
//     }

//     return result;
// }

// let number = 5;
// console.log("Factorial of " + number + " using for loop is: " + factorialForLoop(number));

// Function to find factorial using recursion
// function factorialRecursive(n) {
   
//     if (n === 0 || n === 1) {
//         return 1;
//     }

//     return n * factorialRecursive(n - 1);
// }
// let number = 5;

// console.log("Factorial of " + number + " using recursion is: " + factorialRecursive(number));


// ......................................................................................

// Function to find square root
// function findSquareRoot(num) {
//     return Math.sqrt(num);
// }

// // Function to find square
// function findSquare(num) {
//     return num * num;
// }

// // Function to find ceiling
// function findCeiling(num) {
//     return Math.ceil(num);
// }

// // Function to round number
// function roundNumber(num) {
//     return Math.round(num);
// }

// // Function to find floor
// function findFloor(num) {
//     return Math.floor(num);
// }

// // Function to find power of 3
// function powerOfThree(num) {
//     return Math.pow(num, 3);
// }
// let number1 = 16;
// console.log("Square root of " + number1 + " is: " + findSquareRoot(number1));

// let number2 = 4;
// console.log("Square of " + number2 + " is: " + findSquare(number2));

// let decimalNumber1 = 4.3;
// console.log("Ceiling of " + decimalNumber1 + " is: " + findCeiling(decimalNumber1));

// let decimalNumber2 = 4.6;
// console.log("Rounded value of " + decimalNumber2 + " is: " + roundNumber(decimalNumber2));

// let decimalNumber3 = 4.8;
// console.log("Floor of " + decimalNumber3 + " is: " + findFloor(decimalNumber3));

// let number3 = 2;
// console.log("Power of 3 of " + number3 + " is: " + powerOfThree(number3));

// ......................................................................................

// Function to find all permutations of a string
// function permute(str, l, r) {

//     if (l === r) {
//         console.log(str);
//     } else {
     
//         for (let i = l; i <= r; i++) {
      
//             str = swap(str, l, i);
       
//             permute(str, l + 1, r);
          
//             str = swap(str, l, i);
//         }
//     }
// }


// function swap(str, i, j) {
//     let charArray = str.split(''); 
//     let temp = charArray[i]; 
//     charArray[i] = charArray[j]; 
//     charArray[j] = temp;
//     return charArray.join(''); 
// }


// let str = "suj";
// let n = str.length;
// console.log("All permutations of the string '" + str + "':");
// permute(str, 0, n - 1);

// .........................................................................

// Function to return the square of all numbers in an array 

// let numbers = [1, 2, 3, 4, 5];
// function squareNumbers(arr) {
//     return arr.map(num => num * num); 
// }

// let squaredNumbers = squareNumbers(numbers);

// console.log("Squared numbers using map:", squaredNumbers);

