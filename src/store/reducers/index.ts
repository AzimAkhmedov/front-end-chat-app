import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../../api";
import { IConfirmProps, IState, IUser } from "models";

const initialState: IState = {
    user: {
        isAuth: false,
        email: '',
        password: '',
        username: '',
    },
    verificationModal: false
}

export const registration = createAsyncThunk('registration', async (data: IUser) => {
    const res = await api.register(data)
    return { data, res }
})
export const confirmRegistration = createAsyncThunk('confirm-code', async (confirmProps: IConfirmProps) => {
    const res = await api.confirmRegistrationCode(confirmProps)
    return res
})


const reducerSlice = createSlice({
    name: 'reducer', initialState, reducers: {
    }, extraReducers: (builder) => {
        builder.addCase(registration.pending, (state) => {

        }).addCase(registration.rejected, (state, action) => {
            state.user.isAuth = false

        }).addCase(registration.fulfilled, (state, action) => {
            state.verificationModal = true
        })
    }
})


export const { } = reducerSlice.actions
export default reducerSlice.reducer