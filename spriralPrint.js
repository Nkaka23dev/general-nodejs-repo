const spriralArrar = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20],
  [21, 22, 23, 24, 25],
  [26, 27, 28, 29, 30],
  [31, 32, 33, 34, 35],
  [36, 37, 38, 39, 40],
];

function PrintSpriralArrarFunc(spArray) {
  topRow = 0;
  bottomRow = spArray.length - 1;
  leftColumn = 0;
  rightColumn = spArray[0].length - 1;

  while (topRow <= bottomRow && leftColumn <= rightColumn) {
    //Print the top row
    for (let i = topRow; i <= rightColumn; i++) {
      console.log(spArray[topRow][i]);
    }
    topRow++;

    for (let i = topRow; i <= bottomRow; i++) {
      console.log(spArray[i][rightColumn]);
    }
    rightColumn--;

    if (leftColumn <= rightColumn) {
      for (let i = rightColumn; i >= leftColumn; i--) {
        console.log(spArray[bottomRow][i]);
      }
      bottomRow--;
    }
    if (topRow <= bottomRow) {
      for (let i = bottomRow; i >= topRow; i--) {
        console.log(spArray[i][leftColumn]);
      }
      leftColumn++;
    }
  }
}

PrintSpriralArrarFunc(spriralArrar);
