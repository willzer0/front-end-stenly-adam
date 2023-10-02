// console.log(greeting()); //hoisting memanggil function deluan
// function greeting() {
//   return "hallo semua";
// }

// const age = 13; //Global scope
// const greetings = function (tanggal) {
//   //parameter
//   var nama = "william"; //local scope
//   if (nama === "william") {
//     console.log("hallo pak william"); //block scope
//   }
//   return "selamat pagi tanggal = ", tanggal;
// };

// console.log(greetings(17)); //nilai parameter

// //IIFE (immediately Invoked Function Expression)
// //anonymous function
// (function () {
//   console.log("salam gembira");
// })();

//fungsi yang dipanggil kembali
function createGreetings(name, callback) {
  const greetings = "Hello" + name;
  callback(greetings);
}

createGreetings("john", function (greetings) {
  console.log(greetings);
});
