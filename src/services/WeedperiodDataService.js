import axios from 'axios'

class WeedperiodDataService {

    // eslint-disable-next-line
    retrieveWeedperiod(token,id) {
        //console.log('executed service')
        const config = {
            headers: { Authorization: `Bearer ${token}` }
        };
        return axios.get(`${process.env.VUE_APP_WEEDPERIOD_API_URL}/weedperiod/${id}`,config);
    }

    // eslint-disable-next-line
    deleteWeedperiod(token,id) {
        //console.log('executed service')
        const config = {
            headers: { Authorization: `Bearer ${token}` }
        };
        return axios.delete(`${process.env.VUE_APP_WEEDPERIOD_API_URL}/weedperiod/${id}`,config);
    }

    // eslint-disable-next-line
    updateUser(name, id, user) {
        //console.log('executed service')
        return axios.put(`${process.env.VUE_APP_USER_API_URL}/user/${id}`, user);
    }

    // eslint-disable-next-line
    createWeedperiod(token, weedperiod) {
        //console.log('executed service')
        const config = {
            headers: { Authorization: `Bearer ${token}` }
        };
        return axios.post(`${process.env.VUE_APP_WEEDPERIOD_API_URL}/weedperiod`,weedperiod,config);
    }
}

export default new WeedperiodDataService()
