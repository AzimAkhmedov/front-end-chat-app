import axios from "axios";

export const authInstance = axios.create({
    baseURL: "http://localhost:9000/api/auth/"
})