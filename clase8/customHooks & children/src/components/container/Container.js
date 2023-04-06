import styles from "./container.module.css";
import ConsoleLogProps from "../title/ConsoleLogProps";

const Container = ({ children, loadingProp }) => {
  // COntainer

  if (loadingProp) {
    return <div className={styles.cargando}>Cargando...</div>;
  }
  return <div className={styles.imageContainer}>{children}</div>;
};

export default ConsoleLogProps(Container);
