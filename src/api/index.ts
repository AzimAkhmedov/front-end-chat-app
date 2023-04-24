import { authInstance } from "./instance"


export const api = {
    register(data: any) {
        authInstance.post('register', data).then(res => res)
    }
}