import axios from 'axios';
import Qs from 'qs';
import * as cookies from 'app/utils/cookie';
export const api = axios.create({
  baseURL: process.env.REACT_APP_SERVER,
  responseType: 'json',
  withCredentials: false,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'

  },
  paramsSerializer(params) {
    return Qs.stringify(params, { arrayFormat: 'brackets' });
  }
});
api.interceptors.request.use((config) => {
  let accessToken = cookies.get(cookies.AUTHENTICATION_TOKEN);
  let userLoginId = cookies.get(cookies.USER_LOGIN_ID);
  let userType = cookies.get(cookies.USER_ROLE_ID);
  config.headers = { "token": `${accessToken}`, "user": `${userLoginId}`, "user_type": `${userType}` };
  return config;
});


// Form flow
export const createForm = (credentials) => api.post(`form`, credentials);
export const fetchForms = () => api.get(`forms`);
export const updateForm = (id, credentials) => api.put(`form/${id}`, credentials);
export const deleteForm = (id) => api.delete(`form/${id}`);
