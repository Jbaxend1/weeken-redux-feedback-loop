import React from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import Feeling from '../Feeling/Feeling.jsx';
import Understanding from '../Understanding/Understanding.jsx';
import Support from '../Support/Support';
import Comments from '../Comments/Comments';
import Review from '../Review/Review';
import { ListItem, ListItemButton } from '@mui/material';
import Home from '../Home/Home'



function App() {

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
        <Router>
        <ul>
          <ListItemButton style={{color: 'white'}}> 
            <Link style={ { textDecoration: 'none ', color: 'white'}} to='/home'>Home</Link>
          </ListItemButton>
          <ListItemButton style={{color: 'white'}}> 
            <Link style={ { textDecoration: 'none ', color: 'white'}} to='/feeling'>Start New Feedback</Link>
          </ListItemButton>
        </ul>
        </Router>
      </header>

      <Router>
        
        <Route exact path={'/home'}>
          <Home />
        </Route>
        <Route exact path={'/feeling'}>
          <Feeling />
        </Route>
        <Route exact path={'/understand'}>
          <Understanding />
        </Route>
        <Route exact path={'/support'}>
          <Support />
        </Route>
        <Route exact path={'/comments'}>
          <Comments />
        </Route>
        <Route exact path={'/review'}>
          <Review />
        </Route>
      </Router>
    </div>
  );
}

export default App;
