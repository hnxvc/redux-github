import * as actionTypes from '../../constants/actionTypes';
import Immutable from 'immutable';

export const repos  = (state = Immutable.List(), action) => {
  switch(action.type) {
    case actionTypes.GET_POSTS_LOADED:
      return state.merge(action.data);
  }
  return state;
}
