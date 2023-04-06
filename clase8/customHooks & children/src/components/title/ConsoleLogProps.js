// es mi H o C

function ConsoleLogProps(MiComponente) {
  return function (props) {
    console.log("Props: ", props);

    return (
      <>
        {" "}
        Modifico algo mas quiero saber las props en pantalla
        {<h1>Props:</h1>}
        <MiComponente style={{ backgroundColor: "black" }} {...props} />
      </>
    );
  };
}

export default ConsoleLogProps;
