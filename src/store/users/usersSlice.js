import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    users : [],
    isLoading : true,
    error : undefined
};

const url = 'https://randomuser.me/api/?results=5'

export const fetchUser = createAsyncThunk('user/fetchUsers' , async() => {
    try {
        return fetch(url)
               .then(responce => responce.json())
    } catch (error) {
        return error;
    }
})

const usersSlice = createSlice({
    name : 'users',
    initialState, 
    extraReducers(builder){
        builder.addCase(fetchUser.pending , (state) => {
            state.isLoading = true
        });
        builder.addCase(fetchUser.fulfilled , (state , action) => {
            state.users = action.payload.results;
            state.isLoading= false;
        });
        builder.addCase(fetchUser.rejected , (state , action) => {
            state.error = action.payload;
            state.isLoading = false
        })
    }
});

export default usersSlice.reducer;