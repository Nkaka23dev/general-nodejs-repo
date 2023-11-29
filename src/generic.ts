// function addUID<T extends object>(obj: T) {
//   let uid = Math.floor(Math.random() * 100);
//   return { ...obj, uid };
// }

// let myOj = {
//   name: "Nkaka",
//   age: 38,
// };

// console.log(addUID(myOj));

const addUID = <T extends object>(obj: T) => {
  let uid = Math.floor(Math.random() * 100);
  return { ...obj, uid };
};

let myOj = {
  house: "dkdkkd",
  name: "Nkaka",
  age: 38,
};

// console.log(addUID(myOj));

//example when it is an interface
interface Resources<T> {
  uuid: number;
  resourceName: string;
  data: T;
}

const apiRequest: Resources<string> = {
  uuid: 7,
  resourceName: "hdhhd",
  data: "NAKAK",
};

//example on returning  a tuple
function createArrayPair<T, K extends object>(input1: T, input2: K): [T, K] {
  return [input1, input2];
}

createArrayPair("Nkaka", { name: "James" });
