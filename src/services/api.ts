import axios from 'axios'
import UrlBase from '../configs/config'

const api = axios.create({
    baseURL: UrlBase.API_URL, //"https://dragon-ball-api.herokuapp.com/api/"
})
export default api