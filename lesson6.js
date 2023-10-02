import { fullName } from "./utils6.js";
console.log(fullName);

// synchronus
console.log("satu");
console.log("dua");

// asynchronus parallel
setTimeout(() => {
  console.log("satu");
}, 3000);
setTimeout(() => {
  console.log("dua");
});

// asynchronus concurrent
setTimeout(() => {
  console.log("satu");
  setTimeout(() => {
    console.log("dua");
  });
}, 3000);

// promise
let condition = true;
const newPromise = new Promise((resolve, reject) => {
  if (condition) {
    resolve("berhasil");
  } else {
    reject("gagal");
  }
});

// pakai promise
// 1. then-catch (ES6)
new Promise.then((result) => {
  console.log(result);
}).catch((err) => {
  console.log(err);
});

// 2. async await(ES7)
// async await digunakan pada fungsi

const consumePromise = async () => {
  try {
    let result = await newPromise;
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};
consumePromise();
