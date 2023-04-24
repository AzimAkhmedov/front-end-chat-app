import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "api";
import { IState, IUser } from "models";

const initialState: IState = {
    user: {
        isAuth: false,
        email: '',
        password: '',
        username: '',
    },
    verificationModal: false
}

const registration = createAsyncThunk('registration', async (data: IUser) => {
    const res = await api.register(data)
    return { data, res }
})


const reducer = createSlice({
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


export const { } = reducer.actions
