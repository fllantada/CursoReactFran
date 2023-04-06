import ConsoleLogProps from "./ConsoleLogProps";

function Title({ text }) {
  return <h1>{text}</h1>;
}
const HoC = ConsoleLogProps(Title);

//export default Title;
export default HoC;

// tiren un

//props = { text: "Mi Web" };
