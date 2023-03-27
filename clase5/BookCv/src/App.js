import Tapa from "./components/Tapa/Tapa";
import styles from "./app.module.css";

function App() {
  return (
    <div className={styles.container}>
      {" "}
      <Libro titulo="Mi Historia Laboral" />
      <Tapa name="Fran" />
    </div>
  );
}

export default App;
