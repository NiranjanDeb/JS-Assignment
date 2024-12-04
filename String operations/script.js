// function reverseString(str){
//     let splitString = str.split("");
//     console.log(splitString);
//     let reverseArr = splitString.reverse();
//     console.log(reverseArr);
//     let joinArr = reverseArr.join("");
//     console.log(joinArr);
    
    
    

//     return(str);
// }
// reverseString("Guwahati");


// Q1. solution :

// function reverseString(str){
//     return str.split("").reverse().join("");
// }
// let newString = reverseString("NIRANJAN");
// console.log(newString);

// Q2. solution:

// function newStr(str){
//     return str.toUpperCase();
// }
// let upperStr = newStr("niranjan")
// console.log(upperStr);

// Q3. solution:

// function newStr(str){
//     return str.toLowerCase();
// }
// let lowerStr = newStr("NIRANJAN")
// console.log(lowerStr);

// Q4. solution:

// let str = "we love our motherland";
// let subStr = "mother";
// console.log(str.includes(subStr));

// Q5. solution:

// let str = "She loves reading because reading opens new worlds."
// let newStr = str.replace(/reading/g, 'travelling');
// console.log(newStr);

// Q7. solution:
// let str = "Extracting the first word";
// let word = str.split(' ');
// let lastWord = word.pop();
// console.log(lastWord);

// Q8. solution:
 
// let text1 = "     Hello World!     ";
// let text2 = text1.trimStart();
// console.log(text2);
// console.log(text1.length);
// console.log(text2.length);

// Q9. solution:

// let countVowels = (str) =>{
//     let count = 0;
//     for (let val of str){
//         if (val === "a" || val === "e" || val === "i" || val === "o " || val === ""){
//             count++
//         }
//     }
//     return count;
// }
// let vowels = countVowels("niranjan");
// console.log(vowels);

// Q10. solution:
let str = 15751;
const relVal = () =>{
    myStrVal = str.toString();
    myRelVal = str.toString().split(" ").reverse().join(" ");
    
    if( myStrVal === myRelVal){
        console.log("It is Palindrome");
        
        } else{
            console.log("it is not Palindrome");
            
        }
}
relVal(); 



