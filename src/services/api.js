import axios from 'axios';

const api = axios.create({
  baseURL: 'https://yae1.execute-api.sa-east-1.amazonaws.com/prod',
});

export default api;
