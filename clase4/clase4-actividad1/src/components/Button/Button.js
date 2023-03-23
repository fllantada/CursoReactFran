import styles from "./Button.module.css";

const Button = ({ color, label, callback }) => {
  const handleClick = () => {
    console.log("Click");
    callback(color);
  };
  console.log("Hijo modificado");
  return (
    <button
      onClick={handleClick}
      style={{ backgroundColor: `${color}` }}
      className={styles.button}
    >
      {label}
    </button>
  );
};

export default Button;
