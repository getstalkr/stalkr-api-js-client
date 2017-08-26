class Users {
  constructor(axios) {
    this.axios = axios
  }

  index() {
    return this.axios.get('/users')
  }
}

export default Users