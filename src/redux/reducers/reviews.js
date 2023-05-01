import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

export const getAllReviews = createAsyncThunk(
    'reviews/getAllReviews',
    async (_, {rejectWithValue}) => {
        try {
            const res = await axios('http://localhost:4080/reviews')

            if (res.statusText !== 'OK') {
                throw new Error("Произошла ошибка")
            }

            return res.data

        } catch (e) {
            return rejectWithValue(e.message)
        }
    }
)

const initialState = {
    reviews: [],
    status: '',
    error: ''
}

const reviewSlice = createSlice({
    name: "reviews",
    initialState,
    reducers: {
    },
    extraReducers: {
        [getAllReviews.rejected]: (state, action) => {
            state.error = action.payload
            state.status = 'error'
        },
        [getAllReviews.pending]: (state) => {
            state.status = 'loading'
        },
        [getAllReviews.fulfilled]: (state, action) => {
            state.status = true
            state.reviews = action.payload
        }
    }
})

export default reviewSlice.reducer;