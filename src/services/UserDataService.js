import axios from 'axios'
const USER_API_URL = 'http://localhost:8080/user'

class UserDataService {

    // eslint-disable-next-line
    retrieveAllUsers(name) {
        //console.log('executed service')
        return axios.get(`${USER_API_URL}/list`);
    }

    // eslint-disable-next-line
    retrieveUser(id) {
        //console.log('executed service')
        return axios.get(`${USER_API_URL}/${id}`);
    }

    // eslint-disable-next-line
    deleteUser(name, id) {
        //console.log('executed service')
        return axios.delete(`${USER_API_URL}/${id}`);
    }

    // eslint-disable-next-line
    updateUser(name, id, user) {
        //console.log('executed service')
        return axios.put(`${USER_API_URL}/${id}`, user);
    }

    // eslint-disable-next-line
    login(name, user) {
        //console.log('executed service')
        return axios.post(`${USER_API_URL}/login`, user);
    }

    // eslint-disable-next-line
    createUser(name, user) {
        //console.log('executed service')
        return axios.post(`${USER_API_URL}/create`, user);
    }
}

export default new UserDataService()