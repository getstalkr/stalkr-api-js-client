class Users {
  constructor(axios) {
    this.axios = axios;
  }

  index() {
    return this.axios.get(`/users`);
  }

  show(userId) {
    return this.axios.get(`/users/${userId}`);
  }
}

export default Users;
