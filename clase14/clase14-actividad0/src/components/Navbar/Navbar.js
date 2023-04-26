import styles from "./Navbar.module.css";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import Button from "../Button/Button";
import DataContainer from "../Data/DataContainer";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <header>
      <nav className={styles.nav}>
        <NavLink
          to="/data"
          className={({ isActive }) =>
            isActive ? styles.navItemActive : styles.navItem
          }
        >
          Data
        </NavLink>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? styles.navItemActive : styles.navItem
          }
        >
          Home
        </NavLink>
        {user && (
          <NavLink
            to="/tasks"
            className={({ isActive }) =>
              isActive ? styles.navItemActive : styles.navItem
            }
          >
            Tareas
          </NavLink>
        )}
        {!user ? (
          <NavLink
            to="/login"
            className={({ isActive }) =>
              isActive ? styles.navItemActive : styles.navItem
            }
          >
            Login
          </NavLink>
        ) : (
          <Button color="red" callback={logout}>
            Logout
          </Button>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
