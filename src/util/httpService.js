import axios from 'axios'
import { apiURL } from '../config'

const http = axios.create({
  baseURL: apiURL
})

http.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    if (error.response && error.response.status === 401) {
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      window.location.href='/';
    }
    return Promise.reject(error);
  }
)

export const rebuildHttp = () => {
  let headers = {}
  let token = JSON.parse(window.localStorage.getItem('token'))
  if (token) {
    headers = {...headers, Authorization: `Bearer ${token}`}
  }

  http.defaults.headers.common = headers
}

rebuildHttp()

export default http