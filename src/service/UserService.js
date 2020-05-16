import axios from 'axios';

class UserService {
    constructor() {
      this.service = axios.create({
        baseURL: 'http://localhost:4000',
        withCredentials: true
      })
    }
  
    edit = (job) => {
      return this.service.post('/auth/editprofile', {job: job})
      .then(response => response.data)
    }
  
  }
  
  export default UserService