// // task 1
// function SayHello(Name) {
//     console.log(`hello ${Name}`);
// } 
// SayHello("abood");

// // task 2
// let square = function (num) {
//     return Math.sqrt(num);
// }
// console.log(square(4)); 

// // task 3
// let multiply = (num1, num2) => num1 * num2;
// console.log(multiply(2, 3))

// // task 4
// let car = {
//     make: "toyota",
//     model: "camrey",
//     year: "2020",
//     GetCarInfo: function () {
//         console.log(`${car.make} ${car.model} ${car.year}`)
//     }
// }

// car.GetCarInfo()

// // task 5
// let colors = ['red', 'blue', 'green']
// function PrintArrayContent(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         console.log(`${arr[i]}\n`)
//     }
// }
// PrintArrayContent(colors);

// // task 6
// function StringLength(str) {
//     let counter = 0;
//     for (let i = 0; i < str.length; i++) {
//         counter++
//     }
//     return counter;
// }

// console.log(StringLength("hello"));

// // task 7
// function upper(str) {
//     return str.toUpperCase();
// }
// console.log(upper("hello"));

// // task 8
//  function sub(str, deli) {
//   return str.substr(0, str.indexOf(deli) + 1);
// }

// function deletestr(str, deli) {
//   return str.replace(sub(str, deli), "");
// }

// function checkIfDeli(test, deli) {
//   let check = true;
//   if (test == deli) return check;
//   else {
//     check = false;
//     return check;
//   }
// }

// function trunc(str, delimiter) {
//   let container = [];
//     let splitStr = "";
//     let text = str;
//     let counter = 0;
//   let pos = true;

//     while (pos) {
        
//       for (var i = 0; i < text.indexOf(delimiter); i++) {
//           if (!checkIfDeli(text[i], delimiter))
//               splitStr += text[i];
//       }
         
//         if (splitStr != "")
//             container.push(splitStr);
//         splitStr = "";
         
//       text = deletestr(text, delimiter);
        
//         if (text[i + 1] == undefined)
//             pos = false;
//  }

  

//   return container;
// }

// let str = "    hello my name is  abood    ";
// console.log(trunc(str, " "));


// task 9
// function calculateArea(radius) {
//     return Math.PI * (radius ** 2);
// }
// console.log(calculateArea(5))

// // task 10
// let reverseString = function (str) {
//     let revStr = "";
//     for (let i = str.length - 1; i >= 0; i--) {
//         revStr += str[i];
//     }
//     return revStr;
// }
// // task 11
// let filterEvenNumbers = (arr) => {
//     let result = [];
//     for (let i in arr) {
//         if (!(arr[i] % 2)) 
//             result.push(arr[i])
//     }
//     return result;
// }
// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(filterEvenNumbers(numbers))

// // task 12
// let library = {
//     books: [],
//     addBook: function (title,author) {
//         let book = {
//             title: title,
//             author: author
//         }
//         this.books.push(book)
//     }       
// }

// library.addBook("1984", "George Orwell");
// console.log(library)

// task 13
// let arrayNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// function sumOfArray (arr) {
//     let result = 0;
//     for (let i in arr) {
//         result += arr[i]
//     }
//     return result;
// }
// console.log(sumOfArray(arrayNumbers));

// task 14
// function findVowels(str) {
//     let vowels = ["i", "o", "e", "u", "a"];
//     let result = []
//     for (let i in str) {
//         for (let j in vowels) {
//             if (str[i] == vowels[j]) {
//                 result.push(str[i]);
//             }
//         }
//     }
//     return result;
// }
// console.log(findVowels("hello"))

// task 15
// function capitalizeFirstLetterOfEachWord(str) {
//     return str.split(' ').map(word => {
//         return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
//     }).join(' ');
// }

// task 16
// function reverseWords(arr) {
//     let arr2 = [];
//     for (let i = arr.length - 1; i >= 0; i--) {
//         arr2.push(arr[i]);
//     }
//     return arr2;
// }
// let test = ["hello",'hi']
// console.log(reverseWords(test));


