// function matrix(row, column) {
//   const jaggledArray = new Array(row);
//   for (let i = 0; i < column; i++) {
//     jaggledArray[i] = new Array(row);
//   }
//   return jaggledArray;
// }

// console.log(matrix(3, 7));

let M = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20],
];

function spiralPrint(arr) {
  let topRow = 0;
  let bottomRow = arr.length - 1;
  let leftRow = 0;
  let rightRow = arr[0].length - 1;

  while (topRow < bottomRow && leftRow < rightRow) {
    for (let i = 0; i <= rightRow; i++) {
      console.log(arr[topRow][i]);
    }
    topRow++;
    for (let i = topRow; i <= bottomRow; i++) {
      console.log(arr[i][rightRow]);
    }
    rightRow--;

    for (i = rightRow; i >= 0; i--) {
      console.log(arr[bottomRow][i]);
    }
    bottomRow--;
    if (leftRow <= rightRow) {
      for (let i = bottomRow; i > topRow; i--) {
        console.log(arr[i][leftRow]);
      }
      leftRow++;
    }
  }
}

spiralPrint(M);
