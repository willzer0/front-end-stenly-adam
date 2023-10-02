//buatlah fungsi yang menerima 1 parameter angka
//dan mengembalikan string apakah angka yang dimasukan adalah bilangan
//ganjil atau genap dengan menggunakan bentuk IIFE dan callback function

//IIFE
const angka = 9;
(function () {
  return angka % 2 === 0
    ? console.log("angka yang anda masukan Genap")
    : console.log("angka yang anda masukan Ganjil");
})();

////call back function
// function exercise2(angka, callback) {
//   const ganjilGenap =
//     angka % 2 == 0
//       ? "angka yang anda masukan Genap"
//       : "angka yang anda masukan Ganjil";

//   callback(ganjilGenap);
// }

// exercise2(12, function (ganjilGenap) {
//   console.log(ganjilGenap);
// });
