// const myArray = new Array(3);

// console.log(myArray, "This is a created array!");
// myArray[0] = 78;
// myArray[1] = 8;
// myArray[2] = 909;
// myArray[3] = 7894734;
// console.log(myArray, "This is a created array!");

function matrix(rows, columns) {
  const jaggedArray = new Array(rows);
  for (i = 0; i < columns; i += 1) {
    jaggedArray[i] = new Array(rows);
  }
  return jaggedArray;
}

console.log(matrix(3, 2));
