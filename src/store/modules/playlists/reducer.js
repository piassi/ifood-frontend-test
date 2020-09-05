import { SET_PLAYLISTS_ITEMS, SET_PLAYLISTS_TOTAL } from './actions';

const defaultState = {
  items: [],
  total: 0,
};

export function playlists(state = defaultState, action) {
  switch (action.type) {
    case SET_PLAYLISTS_ITEMS:
      return {
        ...state,
        items: action.payload,
      };

    case SET_PLAYLISTS_TOTAL:
      return {
        ...state,
        total: action.payload,
      };

    default:
      return state;
  }
}
