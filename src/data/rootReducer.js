import { combineReducers } from 'redux-immutable';
import { posts } from './posts/posts';
import { post } from './post/post';
import { about } from './about/about';

const rootReducer = combineReducers({
  posts,
  post,
  about
});

export default rootReducer;
