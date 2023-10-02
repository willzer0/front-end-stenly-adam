//buatlah 1 fungsi yang menerima 1 input angka dan mengembalikan string apakah angka yang dimasukan adalah bilangan ganjil atau genap
function ganjilGenap(bilangan) {
  if (bilangan % 2 == 0) {
    console.log("angka yang anda masukan adalah genap");
  } else {
    console.log("angka yang anda masukan adalah ganjil");
  }
  return bilangan;
}
let hasil = ganjilGenap(15);
console.log(hasil);
