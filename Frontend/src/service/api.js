import axios from 'axios';

const API = axios.create({
  baseURL: 'https://fsd-basic-web-app.onrender.com/api',
});

export default API;
