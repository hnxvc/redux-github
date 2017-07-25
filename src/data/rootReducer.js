import { combineReducers } from 'redux-immutable';
import { posts } from './posts/posts';
import { about } from './about/about';

const rootReducer = combineReducers({
  posts,
  about
});

export default rootReducer;
