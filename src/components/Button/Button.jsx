import styles from "./Button.module.css";
const Button = ({isOutline, icon, text, ...rest}) => {
  // another way to use props 
  // const {isOutline, icon, text} = props;

  return (
    <button 
    {...rest}
    className={isOutline ? styles.outline_btn : styles.primary_btn}>
      {/* use props like icon and text  */}
        {icon} 
        {text}
    </button>
  )
}

export default Button