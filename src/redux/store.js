import {configureStore} from "@reduxjs/toolkit";
import reviews from "./reducers/reviews";
import user from "./reducers/user";



const store = configureStore({
    reducer: {
        reviews: reviews,
        user: user
    }
})

export default store