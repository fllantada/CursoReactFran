import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";
import Styles from "./Navbar.module.css";

const Navbar = (props) => {
  return (
    <header>
      <nav className={styles.nav}>
        <Link to={"/"}>Home</Link>
        <Link to={"/tasklist"}>TaskList</Link>
        <Link to={"/products"}>Products</Link>
      </nav>
    </header>
  );
};

export default Navbar;
