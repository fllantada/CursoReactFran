import styles from './Button.module.css'

const Button = ({ color, children, callback}) => {
    return (
        <button style={{ backgroundColor: color }} onClick={callback} className={styles.button}>
            {children}
        </button>
    )
}

export default Button