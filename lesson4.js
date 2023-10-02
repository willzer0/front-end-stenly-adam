//String Literal
//===============
let fullName = "John Doe";
let age = 33;
let address = "Manado";

// //Hallo nama saya John Doe,umur saya 33 tahun dan saya tinggal di Manado
//=========================================================================
// let kalimat5 =
//   "Halo nama saya " +
//   fullName +
//   " umur saya " +
//   age +
//   " alamat saya " +
//   address;
// console.log(kalimat5);

//ES 6
//================================================================
// let kalimat6 = `Hallo nama saya = ${fullName} \n umur saya = ${
//   age + 1
// } \n alamat saya = ${address}`;
// console.log(kalimat6);

//Arrow Function
//=============
const sayGreetings = (nama) => {
  return `Hello ${nama}`;
};

console.log(sayGreetings("John"));

//Implicit Return value
const sayGreetings6 = (nama) => `Hello ${nama}`;
console.log(sayGreetings6("William"));

//IIFE Arrow function
// (
//   () => {
//     console.log("hello");
//   };
// )();

let output1 = (() => `Hello`)();
console.log(output1);

//callback function arrow
let numbers = [1, 2, 3, 4, 5];
let output2 = numbers.map((item) => item);
console.log(output2);

//Default parameter
//=================
const sayGreetings7 = (fullName) => {
  if (fullName === undefined) {
    fullName = "John Doe";
  }
  if (age === undefined) {
    age = 30;
  }
  console.log(`Hello ${fullName} your age = ${age}`);
};

sayGreetings7(); //tidak ada parameter == undifined

const sayGreetings5 = (fullName = "John Doe", age = 50) =>
  console.log(`Hello ${fullName} age = ${age}`);
sayGreetings5();
