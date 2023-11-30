function getById(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`got id ${id}`);
      resolve(id);
    }, 2000);
  });
}

// arr.forEach((value) => {
//   getById(value);
// });

// (async function () {
//   const arr = [4, 5, 6, 7, 8, 4, 3];
//   //   for (let id of arr) {
//   //     await getById(id);

//   arr.forEach((value) => {
//     getById(value);
//   });
// })();

//Reason sometimes we do not use forEach is that  you can not break out of it and for async function it bring everything at the same time

const names = ["Alice", "Bob", "Tiff", "Bruce", "Alice"];

console.log(names.lastIndexOf("Alice"));
console.log(names.find((name) => name === "Bob"));

const arr = [4, 5, 6, 7, 8, 4, 3];

console.log(arr.some((num) => num < 4));
