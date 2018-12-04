import api from './RestService'

const BASE_URL = "http://localhost:3000/api/users/";

export function login(payload){
  const resourceUrl = BASE_URL + 'login';
  return api.post(resourceUrl, payload);
}

export function register(payload) {
  const resourceUrl = BASE_URL + 'register';
  return api.post(resourceUrl, payload);
}

export default {
  login,
  register
}