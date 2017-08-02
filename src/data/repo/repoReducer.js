import * as actionTypes from '../../constants/actionTypes';
import Immutable from 'immutable';

export const repo  = (state = Immutable.Map(), action) => {
  switch(action.type) {
    case actionTypes.GET_POST_LOADED:
      return state.merge(action.data);
  }
  return state;
}
