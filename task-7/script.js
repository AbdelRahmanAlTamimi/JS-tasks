// task 1
let task1 = [1, 2, 3, 4, 5];
let newtask1 = task1.map((i) => i * i);
console.log(newtask1);

// task 2
let task2 = [10, 20, 30];
let newtask2 = task2.filter((i) => i > 10);
console.log(newtask2)

// task 3
let task3 = ["banana", "apple"];
task3.forEach((element, index) => {
   task3[index] = element.toUpperCase();
 });


console.log(task3);

// task 4
let task4 = [
    { fname: "coco", lname: "ashor", age:20 },
    {fname: "raas", lname:"abu Alabd",age:21}
]
let newtask4 = task4.map((i) => i.lname)
console.log(newtask4);

// task 5
let newtask5 = task4.filter((i) => i.age > 20);
console.log(newtask5);

// task 6
let task6 = [1, 2, 3, 4, 5];
let sum = 0;
task6.forEach((element) => { sum += element });
console.log(sum);

// task 7
let task7 = ["hi", "good"];
let newtask7 = task7.map(reversStr);
console.log(newtask7);

function reversStr(str) {
    let result = "";
    for (let i = str.length -1;i>=0 ; i--) {
        result += str[i];
    }
    return result;
}

// task 8
let task8 = [1, 2, 3, 4, 5, 6, 7, 8, 9,11];
let newtask8 = task8.filter(primeNum)
console.log(newtask8);

function primeNum(num) {
    let isPrime = true;
    if (num == 1)
        isPrime = false;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            isPrime = false;
            break;
        }
            
        
    }
    return isPrime;
}

// task 9
let task9 = [true, "hi", false, "coco"];
task9.forEach(function (element,index) {
    if (typeof (element) == "boolean") {
        console.log(`index: ${index}, value: ${element}`);
    }
})

// task 10
let task10 = [1, 2, 3, 4, 5, 6];
let newtask10 = task10.map((i) => i.toString());
console.log(newtask10);

// task 11
let task11 = [1, 2, 3, 1, 2, 2];
let newtask11 = task11.filter(function (i) {
  let isUnique = true;
  for (let j = 0; j < task11.length; j++) {
    if (i === task11[j] && task11.indexOf(i) !== j) {
      isUnique = false;
      break;
    }
  }
  return isUnique;
});
console.log(newtask11);

// task 12
let task12 = [
    { fname: "amro", lname: "shandaq", age: 27 }
]
task12.forEach(pepole => {
    console.log(`fname ${pepole.fname}\nlname ${pepole.lname}`)
})

// task 13
let task13 = ["ala", "falsheh", 'abood'];
let newtask13 = task13.map((element) => element + task13.indexOf(element))
console.log(newtask13);

// task 14
let task14 = [1, 2, 3, 4, 5, 6, 7, 8];
let newtask14 = task14.filter((i) => i % 2 === 0);
console.log(newtask14);

// task 15
let task15 = [1, 2, 3, 4];
task15.forEach(function (i) {
    console.log(i * 2);
})

// task 16
let task16 = [1, 2, 3];
let newtask16 = task16.map((i) =>i + task16.indexOf(i))
console.log(newtask16);

// task 17
let task17 = [
    {car:"bmw",year:2020},
    {car:"tesla",year:2021},
    {car:"horse",year:4}
]
let newtask17 = task17.filter((obj) => obj.year > 5);
console.log(newtask17);

// task 18
let task18 = ["hi", "bye"];
task18.forEach(function (element) {
    console.log(element.length)
})

// task 19

let task19 = [
  "roaa",
  "mothanna",
  "hesaham",
  "khalfa",
  "rashed",
  "adaileah",
  "amro",
  "awaisheh",
  "amro",
  "rasha",
];
let newtask19 = task19.map((i) => (i = i[0].toUpperCase() + i.slice(1)  ));
console.log(newtask19);

// task 20
let task20 = [2, 4, 3, 6, 2, 6, 3];
let avarage = 0;
for (let i = 0; i < task20.length; i++) {
    avarage += task20[i];

}
avarage = Math.round(avarage / task20.length); // 4

let newtask20 = task20.filter((i) => i > avarage);
console.log(newtask20);

// task 21
let task21 = [1, 2, 3, 4, 5, 6, 7];
task21.forEach((i) => console.log(i / 2));

// task 22
let task22 = [-1.2, -2.5, -3.7, 23.9];
let newtask22 = task22.map((i) => Math.abs(i));
console.log(newtask22);

//task 23

task23 = [
  { fname: "coco", lname: "3ashor", age: null },
  { fname: "raas", lname: null, age: 50 },
  { fname: "abdulaah", lname: "flasheh", age: 20 },
];

let newtask23 = task23.filter((task23) => {
    for (let key in task23) {
    if (task23[key] === null) {
        
        return false;
    }
  }
  return true;
});

console.log(newtask23);

// task 24
let task24 = ['gaga', "hi", "coco", "hashor"];
let counter = 0;
task24.forEach((element) => {
    // console.log(element);
    if (element.indexOf("a") > 0) {
        counter++;
    }
    
})
console.log(counter);

// task 25
let task25 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let newtask25 = task25.map((i) => i % 3);
console.log(newtask25);

// task 26
let task26 = [1, 4, 9, 16, 25, 27];
let newtask26 = task26.filter((i) => Math.sqrt(i) % 1 === 0);
console.log(newtask26);

// task 27





// task 40
function task40 (func, times) {
    return function (num)
    {
        for (let i = 1; i <= times; i++){
            num= func(num);
        }
        return num;
    }
}
const test = (num) => num + 2;
let adder = task40(test,3);
console.log(adder(10));


