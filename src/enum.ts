// enum LoginMode {
//   app,
//   email,
//   social,
// }

/*
If I want to add something like app i do like 

enum LoginMode {
  app,
  email,
  social,
}
but the problem is that email now will be 1 an socila become 2, to solve it I do ,
enum LoginMode {
  app = 2,
  email = 0,
  social =1,
} 
*/

// function initiateLogin(mode: LoginMode): void {
//   console.log(mode === 0 ? "Email" : "HHHH");
// }

// function initiateLogin(mode: LoginMode): void {
//   console.log(mode);
// }

// console.log(LoginMode["app"]);
// console.log(LoginMode[0]);

// const keys = Object.keys(LoginMode);

// console.log(keys);

export enum LoginMode {
  app = "app",
  email = "email",
  social = "social",
}
//the above seems to be good be does not apply dry, we repeat our selves by app = "app"

//hover Object.keys works as expected and we don't have issue with assigned numbers

export function initiateLogin(mode: LoginMode): void {
  console.log(mode);
}

/**inseaded of using Enum type union bring{string literal union} a better solution,  because we don't import and we do not repeat ourselves **/

export type LoginMode2 = "app" | "email" | "login";

export function initiateLogin2(mode: LoginMode2): void {
  console.log(mode);
}

export const LoginMode3 = {
  device: "device",
  email: "email",
  social: "social",
} as const;

export type LoginMode3 = keyof typeof LoginMode3;

export function initiateLogin3(mode: LoginMode3): void {
  console.log(mode);
}
