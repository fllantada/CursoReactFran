import styles from "./Container.module.css";

function Container({ children }) {
  return <div className={styles.global}>{children}</div>;
}

export default Container;
