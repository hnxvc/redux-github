import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger'
import rootReducer from '../data/rootReducer';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

import Home from './Home';
import About from './About';
import Single from './Single';

const store = createStore(
  rootReducer,
  applyMiddleware(thunk, logger)
);


class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <Provider store={store}>
        <Router>
          <div>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
            </ul>
            <hr/>
            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/single/:id" component={Single}/>
          </div>
        </Router>
      </Provider>
    );
  }
}


export default App;
