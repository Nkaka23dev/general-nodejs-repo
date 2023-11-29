export type objProps1 = { name: string };
export type objProps2 = { age: number };

type objUnion = objProps1 | objProps2 | (objProps1 & objProps2); //We are saying that the object may contains properties of obj1 or obj2
type objeIntersection = objProps1 & objProps2; //We are saying that the object may contains properties of obj1 and obje2

const name = { name: "Nkaka" };
const age = { age: 20 };
const nameAndAge = { name: "Nkaka", age: 20 };

let myUnion: objUnion;

myUnion = name;
myUnion = age;
myUnion = nameAndAge;

let myIntersection: objeIntersection;

// myIntersection = name;
// myIntersection = age;
myIntersection = nameAndAge;

function filter(myUnion: objUnion) {
  if ("name" in myUnion) {
    // console.log(union.name);
  }
  if ("age" in myUnion) {
    // console.log(union.age);
  }
  if ("name" in myUnion && "age" in myUnion) {
    myUnion.age;
    myUnion.name;
  }
  /** On the above if, I was supposed to get error which says never or age and name, anyway, this is because objProps1 | objProps1
  so I added (objProps1 & objProps2)  to make sure this ` if ("name" in myUnion && "age" in myUnion) {
    myUnion.age;
    myUnion.name; 
  }`  works otherwise if I want to make sure `"name" in myUnion && "age" in myUnion` I use interceptor and if I want name or age I use union **/
}

filter(nameAndAge);
