
import axios from 'axios';

const axiosApi = axios.create({
    baseURL: 'https://hw-65-54939-default-rtdb.europe-west1.firebasedatabase.app/'
});

export default axiosApi;