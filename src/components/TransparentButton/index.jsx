import classes from './style.module.scss'

const TransparentButton = ({ text }) => {
    return (
        <>
            <button className={classes["button"]}>{text}</button>
        </>
    )
}

export default TransparentButton       