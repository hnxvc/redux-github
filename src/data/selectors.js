import Immutable from 'immutable';
import { createSelector } from 'reselect';

export const posts = (state) => state.get('posts');
