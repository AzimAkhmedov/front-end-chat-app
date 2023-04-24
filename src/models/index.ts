export interface IUser {
    username?: string
    password?: string
    email?: string
    isAuth: boolean
}
export interface IState {
    user: IUser
    verificationModal: boolean
}