//Rest & Spread Operator

//Rest Parameter
//Tanpa rest params
// const penjumlahanArray = (a, b, c) => {
//   const array = [a, b, c];
//   let total = 0;
//   array.forEach((item) => {
//     total += item;
//   });
//   console.log(total);
// };

// penjumlahanArray(1, 2, 3);

// // menggunakan rest parameter
// const penjumlahanArray = (a, b, c, ...params) => {
//   let total = 0;
//   params.forEach((item) => {
//     total += item;
//   });
//   console.log(total);
// };
// penjumlahanArray(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

// // //Spread parameter
// // let array1 = [1, 2, 3, 4, 5];
// // // console.log(...array1);
// // // 1, duplikasi array
// // let array2 = [...array1];
// // array1.push(6);
// // console.log(`Array 1 = ${array1}`);
// // console.log(`Array 2 = ${array2}`);

// //menggabungkan Array
// let array1 = [1, 2, 3];
// let array2 = [5, 6, 7];
// let array3 = [8, 9, 10];
// let combineArrays5 = array1.concat(4, array2, array3);
// console.log(combineArrays5);

// let combineArrays6 = [...array1, 4, ...array2, ...array3];
// console.log(combineArrays6);

// // pada objek
// let john = {
//   fullName: "john",
//   age: 30,
//   address: "manado",
// };
// // duplikasi objek
// let student = { ...john };
// john = {
//   ...john,
//   job: "Teacher",
// };

// console.log(john);

// //Menggabungkan objek
// let obj1 = { a: 1, b: 2 };
// let obj2 = { b: 3, c: 4 };
// let combineObj = { ...obj1, ...obj2 };
// console.log(combineObj);

//Destructuring
// Array Destructuring
let buah = ["mangga", "pisang", "anggur"];
let [, , buah3] = buah;
console.log(buah);

//objek Destructing
let william = {
  fullName: "GoeyanaWilliam",
  age: 19,
};

let { fullName, age } = william;
console.log(fullName);
