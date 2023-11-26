// function medianOfArray(arr) {
//   const length = arr.length;
//   if (length % 2 === 1) {
//     const median = arr[Math.floor(length / 2)];
//     return median;
//   } else {
//     const median = (arr[length / 2] + arr[length / 2 - 1]) / 2;
//     return median;
//   }
// }
// const arr = [1, 2, 3, 4, 6];

// console.log(medianOfArray(arr));

let hashMap = {
  1: 1,
  5: 6,
  10: 3,
  3: 1,
};

for (var prop in hashMap) {
  console.log(hashMap[prop]);
}
