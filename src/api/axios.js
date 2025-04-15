import axios from 'axios';

const api = axios.create({
  baseURL: 'https://arunkumarg.onrender.com',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;