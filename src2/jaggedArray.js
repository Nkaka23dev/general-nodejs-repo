function createJaggedArray(rows, columns) {
  const jaggedArray = new Array(rows);
  for (let i = 0; i < rows; i++) {
    jaggedArray[i] = new Array(columns);
  }
  return jaggedArray;
}

console.log(createJaggedArray(3, 3));
