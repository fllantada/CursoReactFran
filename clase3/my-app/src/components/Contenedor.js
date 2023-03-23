import Nav from "./Nav";
import Section from "./Section";
import Footer from "./Footer";

function Contenedor(props) {
  return (
    <div
      style={{
        backgroundColor: "grey",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Nav imprimi="Hola" saluda={() => console.log("Saludando")} />
      <Section />
      <Footer />
    </div>
  );
}
export default Contenedor;
