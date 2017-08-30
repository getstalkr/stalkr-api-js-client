import axios from 'axios/dist/axios';
import Users from './Resources/Users';

class Stalkr {
  constructor(apiBase) {
    this.axios = axios.create({baseURL: apiBase});
    this.users = new Users(this.axios);
  }

  register(username, password) {
    return this.axios.post(`/user/register`, {}, {
      auth: {
        username: username,
        password: password
      }
    });
  }

  login(username, password) {
    return this.axios.post(`/user/login`, {}, {
      auth: {
        username: username,
        password: password
      }
    });
  }
}

export default Stalkr;
