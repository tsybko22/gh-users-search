import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.github.com/users/',
});

const getUser = (username) => {
  return api.get(username);
};

const getUserRepos = (username) => {
  return api.get(username + '/repos');
};

export { getUser, getUserRepos };
