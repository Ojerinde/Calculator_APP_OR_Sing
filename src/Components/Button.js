import classes from './Button.module.css'

const Button = props => {
    return <button value={props.value} onClick={props.onClick} className={`${classes.button} ${props.className}`}>{props.value}</button>
}
export default Button