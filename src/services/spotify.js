import axios from 'axios';
import moment from 'moment';
import { getAccessToken } from '../utils/token';

const spotifyApi = axios.create({
  baseURL: 'https://api.spotify.com/v1/',
});

function getAuthToken() {
  const accessToken = getAccessToken();
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
