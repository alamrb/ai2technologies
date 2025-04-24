// import { configureStore } from '@reduxjs/toolkit'
import {productSlice} from "@/lib/features/product/productSlice";
// import {combineReducers} from "redux";
import {combineReducers, configureStore} from '@reduxjs/toolkit';

/*export const combinedReducer = combineReducers({

    counter: counterSlice,




});*/

/*
export const reducer = {
    product: productSlice.reducer,
};
*/

export const makeStore = () => {
    return configureStore({
        // reducer: {},
        // reducer: combinedReducer,


        // reducer,
       /* reducer:{
            counter: counterSlice,
        }*/

        reducer:{
            product: productSlice.reducer,
        }


    })
}



// export type AppStore = ReturnType<typeof makeStore>
// // Infer the `RootState` and `AppDispatch` types from the store itself
// export type RootState = ReturnType<AppStore['getState']>
// export type AppDispatch = AppStore['dispatch']
