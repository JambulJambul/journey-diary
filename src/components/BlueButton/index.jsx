import classes from './style.module.scss'

const BlueButton = ({ text, onclick }) => {
    return (
        <>
            <button className={classes["button"]}>{text}</button>
        </>
    )
}

export default BlueButton       