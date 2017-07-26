import { combineReducers } from 'redux-immutable';
import { posts } from './posts/postsReducer';
import { post } from './post/postReducer';
import { about } from './about/aboutReducer';

const rootReducer = combineReducers({
  posts,
  post,
  about
});

export default rootReducer;
