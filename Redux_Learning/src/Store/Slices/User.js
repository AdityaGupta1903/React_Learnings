import { createSlice } from '@reduxjs/toolkit';

export const UserSlice = createSlice({
    name : "User",
    initialState : {
        Users : []
    },
    reducers : {
        Adduser : (state,actions) =>{
           
            state.Users.push(actions.payload);
           
        }
    }
})

export const {Adduser} = UserSlice.actions

export default UserSlice.reducer;