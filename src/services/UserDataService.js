import axios from 'axios'

class UserDataService {

    // eslint-disable-next-line
    retrieveUser(id) {
        //console.log('executed service')
        return axios.get(`${process.env.VUE_APP_USER_API_URL}/${id}`);
    }

    // eslint-disable-next-line
    deleteUser(name, id) {
        //console.log('executed service')
        return axios.delete(`${process.env.VUE_APP_USER_API_URL}/user/${id}`);
    }

    // eslint-disable-next-line
    updateUser(name, id, user) {
        //console.log('executed service')
        return axios.put(`${process.env.VUE_APP_USER_API_URL}/user/${id}`, user);
    }

    // eslint-disable-next-line
    login(name, user) {
        //console.log('executed service')
        return axios.post(`${process.env.VUE_APP_USER_API_URL}/login`, user);
    }

    // eslint-disable-next-line
    createUser(name, user) {
        //console.log('executed service')
        return axios.post(`${process.env.VUE_APP_USER_API_URL}/create`, user);
    }
}

export default new UserDataService()
