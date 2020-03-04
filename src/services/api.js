import axios from 'axios';

const api = axios.create({
  baseURL:
    'https://cors-anywhere.herokuapp.com/https://tf378xyae1.execute-api.sa-east-1.amazonaws.com/prod',
  headers: { 'Access-Control-Allow-Origin': '*' },
});

export default api;
