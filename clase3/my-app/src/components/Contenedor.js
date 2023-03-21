import Nav from "./Nav";
import Section from "./Section";
import Footer from "./Footer";

function Contenedor(props) {
  return (
    <div
      style={{
        backgroundColor: "red",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Nav />
      <Section />
      <Footer />
    </div>
  );
}
export default Contenedor;
