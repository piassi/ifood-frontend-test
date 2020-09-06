import moment from 'moment';
import { getArgFromUrl } from './getArgFromUrl';

export function getAccessToken() {
  return getArgFromUrl('access_token') || localStorage.getItem('access_token');
}

export function getAccessTokenExpireDate() {
  const localExpireTime = localStorage.getItem('access_token_expires_in');
  if (localExpireTime) {
    return localExpireTime;
  }

  const argExpireTime = getArgFromUrl('expires_in');
  if (argExpireTime) {
    return moment().add(argExpireTime, 'seconds').toISOString();
  }

  return false;
}

export function hasTokenExpired(tokenExpiresIn) {
  if (!tokenExpiresIn) {
    return false;
  }

  return moment().isAfter(tokenExpiresIn);
}
