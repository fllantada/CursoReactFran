import Tapa from "./components/tapa/Tapa";
import styles from "./app.module.css";

function App() {
  return (
    <>
      <div className={styles.navContainer}>
        <button>Anterior</button>
        <button>Siguiente</button>
      </div>
      <div className={styles.bookContainer}>
        {" "}
        <Tapa />
      </div>
    </>
  );
}

export default App;
