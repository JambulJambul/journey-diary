import classes from './style.module.scss'
import { Box } from '@mui/material';
import { FormattedMessage } from 'react-intl';
import Jumbotron from './components/Jumbotron';
import ContentCard from '@components/ContentCard';
import Searchbar from './components/Searchbar';

const Home = () => {
    return (
        <>
            <Jumbotron></Jumbotron>
            <div className={classes["content-container"]}>
                <h1>
                    <FormattedMessage id="journey_title" />
                </h1>
                <Box mt={4} className={classes["searchbar-wrapper"]}>
                    <Searchbar></Searchbar>
                </Box>
                <Box mt={3}>
                    <div className={classes["test"]}>
                        <ContentCard></ContentCard>
                    </div>
                </Box>
            </div>
        </>
    )
}

export default Home