// task 1
window.localStorage.setItem("string", "hello world!");
let task1 = window.localStorage.getItem("string");
document.getElementById("p1").innerHTML = task1;

// task 2
window.localStorage.setItem("number", 123);
let task2 = window.localStorage.getItem("number");
document.getElementById("p2").innerHTML = task2;

// task 3
window.localStorage.setItem("bool", true);
let task3 = window.localStorage.getItem("bool");
document.getElementById("p3").innerHTML = task3;

// task 4
window.localStorage.removeItem("bool");

// task 5
window.localStorage.clear();

// task 6
function checkItems (item) {
    if (window.localStorage.getItem(item)) {
        console.log("the item is exist")
    }
    else {
        console.log("the item is not exist")
    }
}
checkItems("bool");

// task 7
let arr1 = [1, 2, "3"];
window.localStorage.setItem("array", arr1);
let task7 = window.localStorage.getItem("array");
document.getElementById("p7").innerHTML = task7;

// task 8
let obj = {
    theName: "abood",
    major: "SE",
}
window.localStorage.setItem("object", obj);
let task8 = window.localStorage.getItem("object");
document.getElementById("p8").innerHTML = task8;

// task 9
let a = "a"
let b = "b"
let c = "c"
window.localStorage.setItem("item1", a);
window.localStorage.setItem("item2", b);
window.localStorage.setItem("item3", c);

// task 10
window.localStorage.setItem("item1", "A");

// task 11
window.sessionStorage.setItem("string1", "hello world!");
let task11 = window.sessionStorage.getItem("string1");
document.getElementById("p11").innerHTML = task11;

// task 12
window.sessionStorage.setItem("number2", 123);
let task12 = window.sessionStorage.getItem("number2");
document.getElementById("p12").innerHTML = task12;

// task 13
window.sessionStorage.setItem("bool2", true);
let task13 = window.sessionStorage.getItem("bool2");
document.getElementById("p13").innerHTML = task13;

// task 14
window.sessionStorage.removeItem("bool2");

// task 15
window.sessionStorage.clear();

// task 16
function checkItems (item) {
    if (window.sessionStorage.getItem(item)) {
        console.log("the item is exist")
    }
    else {
        console.log("the item is not exist")
    }
}
checkItems("bool2");

// task 17
let arr2 = [1, 2, "3"];
window.sessionStorage.setItem("array2", arr2);
let task17 = window.sessionStorage.getItem("array2");
document.getElementById("p17").innerHTML = task17;

// task 18
let obj1 = {
    theName: "abood",
    major: "SE",
}
window.sessionStorage.setItem("object2", obj1);
let task18 = window.sessionStorage.getItem("object2");
document.getElementById("p18").innerHTML = task18;

// task 19
let a1= "a"
let b1= "b"
let c1= "c"
window.sessionStorage.setItem("item11", a1);
window.sessionStorage.setItem("item12", b1);
window.sessionStorage.setItem("item13", c1);

// task 20
window.localStorage.setItem("item11", "A1");


    
