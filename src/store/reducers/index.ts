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
    loaders: {
        appLoader: false, messageLoader: false, userLoader: false
    },
    verificationModal: false
}

export const registration = createAsyncThunk('registration', async (data: IUser) => {
    const res = await api.register(data)
    return { data, res }
})
export const confirmRegistration = createAsyncThunk('confirm-code', async (confirmProps: IConfirmProps) => {
    const res = await api.confirmRegistrationCode(confirmProps)
    console.log(res);
    return res
})


const reducerSlice = createSlice({
    name: 'reducer', initialState, reducers: {
    }, extraReducers: (builder) => {
        builder.addCase(registration.pending, (state) => {
        }).addCase(registration.rejected, (state) => {
            state.user.isAuth = false
        }).addCase(registration.fulfilled, (state, action) => {
            state.verificationModal = true
            state.user.email = action.payload.data.email
        })
            .addCase(confirmRegistration.fulfilled, (state, action) => {
                state.user.isAuth = true
                state.user.email = action.payload.data.email
                state.user.password = action.payload.data.password
                state.verificationModal = false
                state.loaders = { ...state.loaders, userLoader: false }

            }).addCase(confirmRegistration.pending, (state) => {
                state.loaders = { ...state.loaders, userLoader: true }
            })
    }
})


export const { } = reducerSlice.actions
export default reducerSlice.reducer