import Cookies from 'universal-cookie';
import _ from 'lodash';

export const AUTHENTICAT_TOKEN = 'AUTHENTICAT_TOKEN';

const EXPIRY_DURATION = 24 * 60 * 60 * 7 * 1000; // One Week

let cookie = new Cookies();

export function set(key, value) {
  let date = new Date();
  date.setTime(date.getTime() + EXPIRY_DURATION);

  cookie.set(key, value, { path: '/', expires: date });
}

export function get(key) {
  return cookie.get(key);
}

export function remove(key) {
  cookie.remove(key, { path: '/' });
}

export function removeAll() {
  let cookies = cookie.getAll();
  let cookiesKeys = _.keys(cookies);

  cookiesKeys.forEach(cookieKey => remove(cookieKey));
}