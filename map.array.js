// const arr = [4, 6, 45, 7, 8];

// const myArr = arr.map((value, index, arr) => {
//   console.log("value of this: ");
//   return value * 3;
// }, thisArg);

// console.log(myArr);

// const contextObject = {
//   multiplier: 2,
//   multiply: (num) => this.multiplier * num,
// };

const arr = [4, 6, 45, 7, 8];

// arr.map((num) => this.multiply(num), contextObject);

// console.log(Array.from(arr, (v) => v * 3));

const newArray = [[4, 6, 45, 7, 8], [4, 6, 45, 7, 8], [[4, 6, 45, 7, 8]]];

console.log(newArray.flat(Infinity).Map((v) => v * 3));
