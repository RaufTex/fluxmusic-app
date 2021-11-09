import axios from 'axios';

axios.defaults.headers.get['Content-Type'] =
  'application/x-www-form-urlencoded';
const api = axios.create({
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
  },

  baseURL: 'http://api.music-story.com/en/genre',
});

export default api;
