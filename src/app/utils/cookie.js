import Cookies from 'universal-cookie';
import _ from 'lodash';

export const AUTHENTICAT_TOKEN = 'AUTHENTICAT_TOKEN';
export const USER_LOGIN_ID = 'USER_LOGIN_ID';
export const THEME_COLOR = 'THEME_COLOR';
export const USER_ROLE_ID = 'USER_ROLE_ID';
export const STARTED_TASK = 'STARTED_TASK';
export const USER_PROFILE_IMAGE = 'USER_PROFILE_IMAGE';
export const AUTHENTICATION_TOKEN = 'AUTHENTICATION_TOKEN';
export const CURRENT_PATH = 'CURRENT_PATH';
export const SELECTED_MENU = 'SELECTED_MENU';
export const SELECTED_DEPARTMENT = 'SELECTED_DEPARTMENT';
export const SELECTED_PROJECT = 'SELECTED_PROJECT';
export const SELECTED_DEPARTMENT_MENU = 'SELECTED_DEPARTMENT_MENU';

// TASK

export const TASK_ID = 'TASK_ID';
export const TASK_HISTORY = 'TASK_HISTORY';
export const TASK_TIME = 'TASK_TIME';
// export const AUTHENTICAT_TOKEN = 'AUTHENTICAT_TOKEN';

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
