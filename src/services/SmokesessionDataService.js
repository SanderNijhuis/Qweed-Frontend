import axios from 'axios'

class SmokesessionDataService {

    // eslint-disable-next-line
    retrieveSmokesession(token,id) {
        //console.log('executed service')
        const config = {
            headers: { Authorization: `Bearer ${token}` }
        };
        return axios.get(`${process.env.VUE_APP_USER_API_URL}api/v1/smokesessions/smokesession/${id}`,config);
    }

    // eslint-disable-next-line
    deleteSmokesession(token,id) {
        //console.log('executed service')
        const config = {
            headers: { Authorization: `Bearer ${token}` }
        };
        return axios.delete(`${process.env.VUE_APP_USER_API_URL}api/v1/smokesessions/smokesession/${id}`,config);
    }

    // eslint-disable-next-line
    createSmokesession(token, smokesession) {
        //console.log('executed service')
        const config = {
            headers: { Authorization: `Bearer ${token}` }
        };
        return axios.post(`${process.env.VUE_APP_USER_API_URL}api/v1/smokesessions/smokesession`,smokesession,config);
    }
}

export default new SmokesessionDataService()
