// //array
// const students = ["sisi", "lala", "popo"];
// const numbers = [1, 2, 3, 4, 5];
// const john = ["john", "doe", 43, true, 2.5];
// console.log(students);
// console.log(numbers);
// console.log(john);

// //index
// console.log(students[2]);
// students[2] = "Bob";
// console.log(students);
// //length
// console.log(students.length);
// console.log(students[students.length - 1]);
// // mengakses seluruh elemen array
// for (let i = 0; i < students.length; i++) {
//   console.log(students);
// }

// //array method
// //toString()
// console.log(john.toString());
// // join
// console.log(john.join(" "));
// // pop
// john.pop();
// console.log(john);
// // push
// john.push("Good morning");
// //shift
// john.shift();
// console.log(john);
// //unshift
// john.unshift("Hello");
// console.log(john);
// //splice
// john.splice(3, 0, true);
// console.log(john);
// //slice
// let john2 = john.slice(2, 4);
// console.log(john2);
// //concat
// let output = john.concat(numbers, john2);
// console.log(output);

// //Object
// let johnny = {
//   firstName: "Jhonny",
//   lastName: "Doe",
//   age: 33,
//   isMarried: true,
//   grade: [80, 90, 100],
//   address: {
//     city: "Manado",
//     province: "Sulawesi utara",
//     postalCode: "95371",
//   },
//   sayGreetings: function () {
//     console.log("Hello my name is " + this.firstName);
//   },
// };

// // Dot notation
// console.log(johnny.firstName);
// console.log(johnny.grade[2]);
// console.log(johnny.address.city);
// console.log(johnny.sayGreetings());
// // bracket notation
// console.log(johnny["firstName"]);
// console.log(johnny["grade"][2]);
// console.log(johnny["address"]["city"]);
// console.log(johnny["sayGreetings"]());

// johnny.job="Teacher"
// console.log(johnny)

//Array object
let students = [
  {
    id: 1,
    name: "john",
  },
  {
    id: 2,
    name: "jacky",
  },
  {
    id: 3,
    name: "juan",
  },
];

// //foreach()
// students.forEach(function(item){
//     console.log(item.name)
// })

// //map()
// let output = students.map(function(item){
//     return item.name
// })
// console.log(output)

// //filter()
// let output = students.filter(function(item){
//     return item.name === "john"
// })
// console.log(output)

// find()
let output = students.find(function (item) {
  return item.name === "john";
});
console.log(output);
