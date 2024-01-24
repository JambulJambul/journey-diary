import classes from './style.module.scss'
import { FormattedMessage } from 'react-intl';

const Jumbotron = () => {
    return (
        <>
            <div className={classes["jumbotron-box"]}>
                <div className={classes["content-container"]}>
                    <h1>
                        <FormattedMessage id="jumbotron_header" />
                    </h1>
                    <p>
                        <FormattedMessage id="jumbotron_desc" />
                    </p>
                </div>
            </div>
        </>
    )
}

export default Jumbotron