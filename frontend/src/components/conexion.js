import axios from 'axios';

const BaseURL = "http://localhost:3200/api";

const API = axios.create({
    baseURL: BaseURL,
}
)

export default API