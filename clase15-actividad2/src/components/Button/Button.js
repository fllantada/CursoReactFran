import styles from './Button.module.css'

const Button = ({ color, children, callback, style = {} }) => {
    return (
        <button style={{ backgroundColor: color, ...style }} onClick={callback} className={styles.button}>
            {children}
        </button>
    )
}

export default Button