import axios from 'axios';
import moment from 'moment';
import { getArgFromUrl } from '../utils/getArgFromUrl';

const spotifyApi = axios.create({
  baseURL: 'https://api.spotify.com/v1/',
});

function getAuthToken() {
  const accessToken = getArgFromUrl('access_token');
  return `Bearer ${accessToken}`;
}

export async function getFeaturedPlaylists(filters) {
  const { data } = await spotifyApi.get('/browse/featured-playlists', {
    headers: { Authorization: getAuthToken() },
    params: {
      ...filters,
      timestamp: moment(filters.timestamp).toISOString(),
    },
  });

  return data;
}
