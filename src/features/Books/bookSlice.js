import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    book : [],
    isLoading: true,
    isError: false,
    error: "",
}

export const getAllBooks = createAsyncThunk('product/books', async()=> {
    const data = await fetch('http://localhost:5000/book').then(res => res.json())
    return data;
})

export const bookSlice = createSlice({
    name: 'book',
    initialState,
    reducers: {},
    extraReducers: (builder)=> {
        builder.addCase(getAllBooks.fulfilled, (state, action)=> {
            state.isLoading = true
            state.isError = false
            state.book = state.book.concat(action.payload)
        })
    }
})

export default bookSlice.reducer;