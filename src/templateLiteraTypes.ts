// let str: string;
// str = "Nkaka";

// let strLiterals: `Example: ${number}`;
// const num = 663;

// strLiterals = `Example: ${num}`;
// strLiterals = "dhdjjdjd";

type Size = "small" | "medium" | "large";
type Color = "primary" | "secondary";

type Styles = `${Size} - ${Color}`;

function applyStyle(style: Styles) {
  console.log(style);
}

applyStyle("large - primary");
