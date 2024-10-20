// import axios from 'axios';

// const api = axios.create({
//   baseURL: 'http://localhost:3000',
// });

// export default api;

import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000',
});

export const login = (username) => {
  return api.post('/login', { username });
};

export const getUsers = () => {
  return api.get('/users');
};

export default api;