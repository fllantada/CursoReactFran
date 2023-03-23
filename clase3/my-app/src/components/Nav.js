import { useState } from "react";

function Nav(props) {
  console.log(props);
  props.saluda();
  //const imprimi = props.imprimi
  return (
    <>
      <div>{props.imprimi}</div> <h1>Todo bien</h1>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
    </>
  );
}
export default Nav;
// props = {imprimi: "Hola"}
