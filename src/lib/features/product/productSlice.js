import {createSlice} from '@reduxjs/toolkit'
import {converted_currency} from "@/Utils/common";
// import type { PayloadAction } from '@reduxjs/toolkit'
// import type { RootState } from '../../app/store'
// import { makeStore } from '../../../store'
// import makeStore from "../../../store";

// Define a type for the slice state
/*
interface productState {
    value: number
}
*/

// Define the initial state using that type
const initialState/*: productState*/ = {
    value: 0,
    previous_favs_ids:[],
    previsou_favs_list_img_name_price:[],
    /*export interface object_inteface{
        _id: string,
        is_fav: number
    }*/
}

export const productSlice = createSlice({
    name: 'product',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        },
        // Use the PayloadAction type to declare the contents of `action.payload`
        incrementByAmount: (state, action /*PayloadAction<number>*/) => {
            state.value += action.payload;
        },

        initializeCount: (state, action) => {
            state.value = action.payload;
            state.previous_favs_ids = [];
            state.previsou_favs_list_img_name_price = [];
        },

        add_item_to_fav_rdx: (state, action) => {


                // item_ID:item_detail._id,
                // name: item_detail.name[0],
                // img: item_detail.image_url[0],
                // price: item_detail.price,

                // converted_currency


            // const item_ID = action.payload;

            const item_Detail = action.payload;
            const item_ID = action.payload.item_ID;


                const previous_favs_ids_2 = state.previous_favs_ids;
                const prvious_favs_list_with_detail_data = state.previsou_favs_list_img_name_price;



                // console.log("previous_favs_ids_2: ", previous_favs_ids_2);
                if (previous_favs_ids_2.length > 0) {
                    const itemIndex = previous_favs_ids_2.findIndex((item) => item === item_ID);




                    if (itemIndex !== -1) {

                        console.log("found again");


                        state.previous_favs_ids = previous_favs_ids_2.filter(
                            (item, index) => item !== item_ID);


                        state.previsou_favs_list_img_name_price = prvious_favs_list_with_detail_data.filter(
                            (item, index) => item.item_ID !== item_ID);

                        return;
                    } else {


                        const new_array = [...previous_favs_ids_2, item_ID];
                        const detail_array =[...prvious_favs_list_with_detail_data,item_Detail]

                        state.previous_favs_ids = new_array;

                        state.previsou_favs_list_img_name_price = detail_array;

                    }
                } else {


                    const new_array = [item_ID];

                    console.log("new_array  <<at final else>> : ", new_array);

                    state.previous_favs_ids = new_array;
                    const detail_array =[item_Detail];

                    state.previsou_favs_list_img_name_price = detail_array;

                    // localStorage.setItem('favs', JSON.stringify(new_array));

                }

        },
    /*    check_if_id_in_Fav: (state, action) => {

            const oneID = action.payload;
            const previous_favs_ids = state.previous_favs_ids;

            if (previous_favs_ids.length > 0) {

                const ids = previous_favs_ids.filter((item, index) => item.is_fav === 1);
                const already_includes = ids.includes(oneID);
                if (!already_includes) {
                    return false;
                } else {
                    return true;
                }
            } else {
                return false;
            }


        },*/

    }

})




export const {
    increment,
    decrement,
    incrementByAmount ,
    initializeCount,
    add_item_to_fav_rdx,
    // check_if_id_in_Fav,
} = productSlice.actions

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.product.value
// export const selectCount = (state: typeof makeStore['getState']) => state.product.value
export default productSlice.reducer


export const selectCount =(state) => state.product.value;
export const select_Fav_IDs =(state) => state.product.previous_favs_ids;

export const export_fav_item_with_detail =(state) => state.product.previsou_favs_list_img_name_price;

