import styles from './Navbar.module.css'

import { NavLink } from "react-router-dom"
import { useAuth } from '../../context/AuthContext'

import Avatar from '../Avatar/Avatar'

const Navbar = () => {
    const { user, signout } = useAuth()

    return (
        <header>
            <nav className={styles.nav}>
                <NavLink to='/' className={({ isActive }) => isActive ? styles.navItemActive : styles.navItem}>Home</NavLink>
                {
                    user && (
                        <>
                            <NavLink to='/tasks' className={({ isActive }) => isActive ? styles.navItemActive : styles.navItem}>Tareas</NavLink>
                            <NavLink to='/createtask' className={({ isActive }) => isActive ? styles.navItemActive : styles.navItem}>Crear Tarea</NavLink>
                        </>
                    )
                }
                {
                    !user ? (
                        <NavLink to='/login' className={({ isActive }) => isActive ? styles.navItemActive : styles.navItem}>Login</NavLink>
                    ) : (
                        <Avatar {...{user, onSignOut: signout}}/>
                    )
                }
            </nav>
        </header>
    )
}

export default Navbar