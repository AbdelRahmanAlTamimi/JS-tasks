// task 1
document.getElementById("header").innerHTML = "Welcome to DOM Manipulation!"

// task 2
let paraClass = document.getElementsByClassName("item");
for (let i = 0; i < paraClass.length; i++) {
  paraClass[i].innerHTML="Class item";
}

// task 3
let paraTag = document.getElementsByTagName("p");
for (let i in paraTag) {
    paraTag[i].innerHTML="Paragraph Element"
}

// task 4
document.querySelector("p").style.backgroundColor = "orange"

// task 5
let allPara = document.querySelectorAll("p");
for (let i = 0; i < allPara.length; i++) {
    allPara[i].style.fontSize = "100px"
}

// task 6
let task6 = document.querySelector("#para");
console.log(task6);
 
// task 7
let task7 = document.querySelectorAll(".className");
console.log(task7);

// task 8
let task8 = document.querySelector(".className  p");
console.log(task8)

// task 9
const elementByCustomAttr = document.querySelector('[src="script.js"]');
console.log(elementByCustomAttr);

// task 10
const allLi = document.getElementsByTagName("li");

for (let i = 0; i < allLi.length; i++) {
  console.log(allLi[i]); 
}
