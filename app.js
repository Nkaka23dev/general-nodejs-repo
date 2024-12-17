function commonElements(kArray) {
  let hashMap = {},
    last,
    answer = [];
  for (let i = 0, kArrarLength = kArray.length; i < kArrarLength; i++) {
    let currentArray = kArray[i];
    last = null;
    for (let j = 0, innerArray = currentArray.length; j < innerArray; j++) {
      currentElement = currentArray[j];
      if (last !== currentElement) {
        if (!hashMap[currentElement]) {
          hashMap[currentElement] = 1;
        } else {
          hashMap[currentElement]++;
        }
      }
      last = currentElement;
    }
  }
  for (let element in hashMap) {
    if (hashMap[element] === kArray.length) {
      answer.push(element);
    }
  }
  return answer;
}

console.log(
  commonElements([
    [5, 5, 10, 20],
    [3, 4, 5, 5, 10],
    [5, 5, 10, 20],
  ])
);
