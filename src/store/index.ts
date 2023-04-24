import { configureStore } from "@reduxjs/toolkit";
import reducerSlice from './reducers'
export const store = configureStore({
    reducer: {
        reducerSlice
    }

})


export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
