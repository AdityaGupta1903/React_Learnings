import { createSlice } from '@reduxjs/toolkit';

export const ItemSlice = createSlice({
    name : "Item",
    initialState : {
        Items : []
    },
    reducers : {
        AddItem : (state,actions) =>{
            console.log(actions);
        }
    }
})

export const {AddItem} = ItemSlice.actions

export default ItemSlice.reducer;