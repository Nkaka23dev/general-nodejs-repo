let twoDimensionalArray = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20],
];

function spriralPrinting(M) {
  let topRow = 0;
  let bottomRow = M.length - 1;
  let letColumn = 0;
  let rightColum = M[0].length - 1;

  while (letColumn <= rightColum && topRow <= bottomRow) {
    for (let col = topRow; col <= rightColum; col++) {
      console.log(M[topRow][col]);
    }
    topRow++;
    for (let row = topRow; row <= bottomRow; row++) {
      console.log(M[row][rightColum]);
    }
    rightColum--;

    if (topRow <= bottomRow) {
      for (col = rightColum; col >= letColumn; col--) {
        console.log(M[bottomRow][col]);
      }
      bottomRow--;
    }

    if (letColumn <= rightColum) {
      for (row = bottomRow; row >= topRow; row--) {
        console.log(M[row][letColumn]);
      }
      letColumn++;
    }
  }
}

spriralPrinting(twoDimensionalArray);
