import styles from './Navbar.module.css'
import { NavLink } from "react-router-dom"

const Navbar = () => {
    return (
        <header>
            <nav className={styles.nav}>
                <NavLink to='/' className={({ isActive }) => isActive ? styles.navItemActive : styles.navItem}>Home</NavLink>
                <NavLink to='/tasks' className={({ isActive }) => isActive ? styles.navItemActive : styles.navItem}>Tareas</NavLink>
                <NavLink to='/login' className={({ isActive }) => isActive ? styles.navItemActive : styles.navItem}>Login</NavLink>
            </nav>
        </header>
    )
}

export default Navbar