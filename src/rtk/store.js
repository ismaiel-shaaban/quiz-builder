import {configureStore} from "@reduxjs/toolkit"
import questionsSlice from "./slices/questions-slice"

export const store = configureStore({
    reducer:{
        questions:questionsSlice
    }
})