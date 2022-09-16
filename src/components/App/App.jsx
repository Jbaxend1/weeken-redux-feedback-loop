import React from 'react';
import axios from 'axios';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import Feeling from '../Feeling/Feeling.jsx';
import Understanding from '../Understanding/Understanding.jsx';
import Support from '../Support/Support';
import Comments from '../Comments/Comments';
import Review from '../Review/Review';

function App() {

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>

      <Router>
      <button><Link to='/feeling'>Add New Feedback</Link></button>
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
