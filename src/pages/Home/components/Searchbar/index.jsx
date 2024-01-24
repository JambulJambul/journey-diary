import classes from './style.module.scss'
import BlueButton from '@components/BlueButton'

const Searchbar = () => {
    return (
        <>
            <div className={classes['searchbar-wrapper']}>
                <input className={classes['input-box']} type="text" name="" id="" placeholder='Find Journey'/>
                <button className={classes["searchbar-button"]}>Search</button>
            </div>
        </>
    )
}

export default Searchbar