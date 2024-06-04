// task 1
function SayHello(Name) {
    console.log(`hello ${Name}`);
} 
SayHello("abood");

// task 2
let square = function (num) {
    return Math.sqrt(num);
}
console.log(square(4)); 

// task 3
let multiply = (num1, num2) => num1 * num2;
console.log(multiply(2, 3))

// task 4
let car = {
    make: "toyota",
    model: "camrey",
    year: "2020",
    GetCarInfo: function () {
        console.log(`${car.make} ${car.model} ${car.year}`)
    }
}

car.GetCarInfo()

// task 5
let colors = ['red', 'blue', 'green']
function PrintArrayContent(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(`${arr[i]}\n`)
    }
}
PrintArrayContent(colors);

// task 6
function StringLength(str) {
    let counter = 0;
    for (let i = 0; i < str.length; i++) {
        counter++
    }
    return counter;
}

console.log(StringLength("hello"));

// task 7
function upper(str) {
    return str.toUpperCase();
}
console.log(upper("hello"));

// task 8
function trunc(str, delimiter) {
    return str.split(delimiter)
}
console.log(trunc("hello my name is abood"," "))