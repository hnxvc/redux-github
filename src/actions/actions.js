import * as actionTypes from '../constants/actionTypes';
import * as services  from '../services/services';

export const getPosts = () => {
  return dispatch => {
    dispatch({
      type: actionTypes.GET_POSTS_LOADING
    });

    services.getPosts(
      data => {
        dispatch({
          type: actionTypes.GET_POSTS_LOADED,
          data: data
        })
      },

      error => {
        dispatch({
          type: actionTypes.GET_POSTS_ERROR,
          error: error
        })
      }
    );
  }
}
