export interface IUser {
    username?: string
    password?: string
    email: string
    isAuth?: boolean
}
interface ILoaders {
    userLoader: boolean
    appLoader: boolean
    messageLoader: boolean
}
export interface IState {
    user: IUser
    verificationModal: boolean
    loaders: ILoaders
}
export interface IConfirmProps {
    email: string
    verificationCode: string

}