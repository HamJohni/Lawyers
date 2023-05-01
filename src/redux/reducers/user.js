import {createSlice} from "@reduxjs/toolkit";


const initialState = {
    user: {},
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        increment(state,action){
            state.user = action.payload
        },
        logout: (state,action) => {
            state.user = action.payload
        }
    }
})

export const {logout, increment} = userSlice.actions
export default userSlice.reducer;