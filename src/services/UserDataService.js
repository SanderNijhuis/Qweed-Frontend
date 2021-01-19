import axios from 'axios'

class UserDataService {

    // eslint-disable-next-line
    retrieveUser(token, username) {
        //console.log('executed service')
        const config = {
            headers: {Authorization: `Bearer ${token}`}

        };
        return axios.get(`${process.env.VUE_APP_USER_API_URL}api/v1/users/user/${username}`, config);
    }

    // eslint-disable-next-line
    deleteUser(token, username) {
        //console.log('executed service')
        const config = {
            headers: {Authorization: `Bearer ${token}`}

        };
        return axios.delete(`${process.env.VUE_APP_USER_API_URL}api/v1/users/user/${username}`, config);
    }

    // eslint-disable-next-line
    updateUser(name, id, user) {
        //console.log('executed service')
        return axios.put(`${process.env.VUE_APP_USER_API_URL}user/${id}`, user);
    }

    // eslint-disable-next-line
    login(username, password) {
        //console.log('executed service')
        return axios.post(`${process.env.VUE_APP_USER_API_URL}token?username=${username}&password=${password}`);
    }

    // eslint-disable-next-line
    createUser(username, password, motivation) {
        //console.log('executed service')
        return axios.post(`${process.env.VUE_APP_USER_API_URL}user?username=${username}&password=${password}&motivation=${motivation}`);
    }
}

export default new UserDataService()
