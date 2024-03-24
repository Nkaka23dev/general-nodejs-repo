// const myFunc = (value) => {
//   const r = Math.random();
//   const newValue = `${value} random:  `;
//   const closedFunc = () => {
//     return `${newValue}- ${r}`;
//   };
//   return closedFunc;
// };

// const first = myFunc("First");
// const second = myFunc("Second");

// console.log(first());
// console.log(second());
// console.log(first());

// const cached = {};

// const something = (value) => {
//   if (!cached.current || value !== previousValue) {
//     cached.current = () => {
//       console.log(value);
//     };
//   }
//   previousValue = value;
//   return cached.current;
// };

// const first = something("first");
// const second = something("second");
// const third = something("third");
// first();
// second();
// third();

let mayDate = new Date();

console.log(mayDate);
