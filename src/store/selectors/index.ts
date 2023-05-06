import { IState } from "models";

export const getModalState = (state: IState) => {
    return state.verificationModal
}
export const getUserState = (state: IState) => {
    return state.user
}
export const getIsAuthState = (state:IState) => {
    return state.user.isAuth
}
export const getUserEmail = (state: IState) => {
    return state.user.email
}