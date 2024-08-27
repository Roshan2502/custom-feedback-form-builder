import axios from "axios";

const Api = axios.create({
    baseURL: "https://feedback-0468.onrender.com"
})

export default Api;