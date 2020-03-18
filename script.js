'use strict';

let person = {
    name: "John",
    age: 25,
    isMarried: false,
};

console.log(person["name"]);

let arr = ['plum.png','orange.jpg','apple.bmp'];

console.log(arr[2]);

// let answer = confirm("are u ok?");
// console.log(answer);

// let answer = +prompt("are u ok?", "yes");
// console.log(typeof(answer));

// console.log("arr" + " - object");
// console.log(4 + +" - object");

let incr = 10,
    decr = 10;


console.log(incr++);
console.log(decr--);

console.log(5%2);
console.log("2" === 2);
let isChecked = false,
    isClose = false;

console.log(isChecked || !isClose);    