import styles from './Button.module.css'

const Button = ({ color, label, callback}) => {
    return (
        <button style={{ backgroundColor: color }} onClick={callback} className={styles.button}>
            {label}
        </button>
    )
}

export default Button