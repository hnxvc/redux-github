import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import { createStore, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';
import createHistory from 'history/createBrowserHistory'
import rootReducer from '../data/rootReducer';
import thunkMiddleware from 'redux-thunk';
import { Provider } from 'react-redux';

import Home from './Home';
import About from './About';
import Single from './Single';

const enhancers = [];
if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = window.devToolsExtension

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension())
  }
}

const loggerMiddleware = createLogger({
  // turn Immutable state into ordinary JS before logging it
  stateTransformer: obj => obj.toJS()
});


const middleware = [
  thunkMiddleware,
  loggerMiddleware,
]

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers
)

const store = createStore(
  rootReducer,
  composedEnhancers
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
