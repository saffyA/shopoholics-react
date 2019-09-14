import axios from 'axios';

/*const axiosApi = axios.create();

export const setAuthHeader = (token) => {
    console.log("token in set auth header",token)
    axiosApi.defaults.headers.common['Authorization'] = 'Bearer ' + token;
}

export default axiosApi;*/

const getAxios = () => {
    console.log("in create function")
    if(sessionStorage.getItem("userToken") == null)
        return axios.create()
    return axios.create({
        headers: {
            Authorization: `Bearer ${sessionStorage.getItem("userToken")}`
        }
    })
}

export default getAxios;