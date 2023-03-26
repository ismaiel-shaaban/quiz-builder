import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
export const getQuestions = createAsyncThunk("questionsSlice/getQuestions" ,async()=>{
    const data =await JSON.parse(localStorage.getItem('questions'))

    return data
})
const questionsSlice = createSlice({
    initialState:[],
    name:"questionsSlice",
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(getQuestions.fulfilled,(state,action)=>{
            return action.payload

        })
    }
})

export const {} =questionsSlice.actions
export default questionsSlice.reducer