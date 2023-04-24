import { IConfirmProps } from "models"
import { authInstance } from "./instance"


export const api = {
    register(data: any) {
        authInstance.post('register', data).then(res => res)
    },
    confirmRegistrationCode(verificationProps: IConfirmProps) {
        authInstance.post('confirm-code', verificationProps).then(res => res)
    }
}