import { getFeaturedPlaylists } from '../../../services/spotify';

export const SET_PLAYLISTS_ITEMS = 'SET_PLAYLISTS_ITEMS';
export const SET_PLAYLISTS_TOTAL = 'SET_PLAYLISTS_TOTAL';

export const loadPlaylists = (filters) => async (dispatch) => {
  const { playlists } = await getFeaturedPlaylists(filters);

  console.log(playlists);

  if (typeof playlists !== 'undefined' && playlists.items) {
    dispatch({
      type: SET_PLAYLISTS_ITEMS,
      payload: playlists.items,
    });

    dispatch({
      type: SET_PLAYLISTS_TOTAL,
      payload: playlists.total,
    });
  }
};
