const URL_BACKEND_TOP = window.location.hostname.includes('localhost')
  ? 'http://localhost:8081'
  : 'https://shimiflix.herokuapp.com';

export default {
  URL_BACKEND_TOP,
};
