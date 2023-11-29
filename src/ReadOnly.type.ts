// export type Points = {
//   x: number;
//   y: number;
// };

// type modifiedType = Points["x"];
// type PointsKeys = keyof Points;

// function PrintHello(input: PointsKeys ) {
//   console.log(input);
// }

export type Points = {
  x: number;
  y: number;
};

export type readOnlyPoints = Readonly<Points>;

export const origin: readOnlyPoints = {
  x: 7,
  y: 4,
};

// origin.x = 67;
