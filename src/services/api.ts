import axios from 'axios'

export const api = axios.create({
    baseURL: "http://localhost:3000",
    // baseURL: "https://g-drive-api-zafv.onrender.com",
    withCredentials: true,
})