import { Button } from "@mui/material";
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import Typography from "@mui/material/Typography";
import Feeling from "../Feeling/Feeling";

const Home = () => {
    return (
        <>
            <h1>Welcome!</h1>
            <h3> Lets Get Some Feedback!</h3>
            <Router>
                <Route exact path={'/feeling'}>
                    <Feeling />
                </Route>
                <Typography variant="body1">
                    <Link to='/feeling'>Click Here to get Started</Link>
                </Typography>
            </Router>
            
        </>
    )
}

export default Home;