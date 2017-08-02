import { combineReducers } from 'redux-immutable';
import { repos } from './repos/reposReducer';
import { repo } from './repo/repoReducer';
import { about } from './about/aboutReducer';

const rootReducer = combineReducers({
  repos,
  repo,
  about
});

export default rootReducer;
