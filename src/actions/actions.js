import * as actionTypes from '../constants/actionTypes';
import * as services  from '../services/services';

export const getRepos = () => {
  return dispatch => {
    dispatch({
      type: actionTypes.GET_POSTS_LOADING
    });

    services.getRepos(
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

export const getRepo = (id) => {
  return dispatch => {
    dispatch({
      type: actionTypes.GET_POST_LOADING,
    });

    services.getRepo(
      id,
      data => {
        dispatch({
          type: actionTypes.GET_POST_LOADED,
          data: data
        })
      },

      error => {
        dispatch({
          type: actionTypes.GET_POST_ERROR,
          error: error
        });
      }
    );
  }
}

export const getAbout = () => {
  return dispatch => {
    dispatch({
      type: actionTypes.GET_ABOUT_LOADING
    });

    services.getAbout(
      data => {
        dispatch({
          type: actionTypes.GET_ABOUT_LOADED,
          data: data
        })
      },

      error => {
        dispatch({
          type: actionTypes.GET_ABOUT_ERROR,
          error: error
        })
      }
    );
  }
}
