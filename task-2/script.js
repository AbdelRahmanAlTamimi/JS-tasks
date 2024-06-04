// task 1
// for (let i = 1; i <= 10; i++) {
//     console.log(i);
// }

// task 2
// let i = 1;
// while (i <= 10) {
//     console.log(i);
//     i++;
// }


// // task3
// for (let i = 0; i <= 10; i+=2) {
//     console.log(i);
// }

// task 4
// var result = 0;
// for (let i = 1; i <= 10; i++) {
//     result += i;
// }
// console.log(result)

// task 5
// for (let i = 1; i <= 10; i+=2) {
//     if (i % 2)
//         console.log(i);
// }

// task 6
// var age = prompt("please enter your age");
// if (age > 16)
//     console.log("you are an adult")

// task 7
// var score = prompt("please enter your score");
// if (age <= 50)
//     console.log("you failed")

// task 8
// var Name = prompt("please enter your name");
// if (Name == "John")
//     console.log("hell, john")

// task 9
// var day = prompt("enter the day");
// if (day != "saturday" && day != "friday") 
//     console.log("it's a weekend")

// task 10
// var num = prompt("enter a number");
// if (!(num % 2))
//     console.log("the number is even")

//task 11
// var num = prompt("enter a number");
// if (num > 0)
//     console.log("x is positive number")

// task 12
// var num = prompt("enter a number");
// if (num < 0)
//     console.log("x is negative number")

// task 13
// var gpa = prompt("enter your gpa")
// if (gpa >= 3.0)
//     console.log("Congratulations, you have a good GPA");

// task 14
let num3;
do {
  num3 = Number(prompt("please enter a positive number "));
} while (num3 <= 0);

let isPrime = true;

if (num3 === 1) {
  isPrime = false;
} else {
  for (let i = 2; i <= Math.sqrt(num3); i++) {
    if (num3 % i === 0) {
      isPrime = false;
      break;
    }
  }
}

console.log(isPrime);

let theName = "  Ahmed  ";

console.log(theName);
console.log(theName[1]);
console.log(theName[5]);

console.log(theName.charAt(1));
console.log(theName.charAt(5));

console.log(theName.length);
console.log(theName.trim());

console.log(theName.toUpperCase());
console.log(theName.toLowerCase());

console.log(theName.trim().charAt(2).toUpperCase());






