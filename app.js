// const arr = [1, 2, 3, 4, 8, 8, 73];

// console.log('================== Original Array  ==================')
// console.log('====================================')
// console.log(arr);

// console.log('====================Modified Array================')
// console.log('====================================')
// console.log(arr.splice(3, 2, "Hello"))
// console.log('====================Original Array After Modification================')
// console.log('====================================')
// console.log(arr) 

/****
  BELOW IS THE IMPLEMENTATION OF SLICE METHOD IN JAVASCRIPT
 * ****/

// function arraySlice(list, startIndex, endEndex) {
//     if (list.length === 0) {
//         return "can't perfom arraySlice on empty array"
//     }
//     if (!list || list.length === 0) {
//         return "No array provided"
//     }
//     if (!startIndex && !endEndex) {
//         return list
//     }
//     if (!endEndex) {
//         endEndex = list.length;
//     }
//     let arrayToReturn = []

//     for (let i = startIndex; i < endEndex; i++) {
//         arrayToReturn.push(arr[i])
//     }

//     return arrayToReturn
// }

// console.log(arraySlice(5))



/****
  BELOW IS THE IMPLEMENTATION OF A METHOD THAT CALCULATE A MEDIAN FOR ODD AND EVEN LENGHT OF AN ARRAY
 * ****/

// const myArr = [1, 2, 3, 4, 8, 8, 73];


// function calcMedianOfArray(arr) {
//     const length = arr.length;

//     //For the odd numbers
//     if (length % 2 === 1) {
//         return arr[Math.floor(length / 2)]
//     } else {
//         //even number
//         return (arr[length / 2] + arr[length / 2 - 1]) / 2
//     }
// }

let last, answer = [7, 458];

console.log(answer)