import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getPost = createAsyncThunk("getPost", async () => {
    return fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) => response.json()
        );
});


export const postSlice = createSlice({
    name: "post",
    initialState: {
        post: [],
        status: "",
    },
    extraReducers: {
        [getPost.pending]: (state, action) => {
            state.status = "pending";
        },
        [getPost.fulfilled]: (state, action) => {
            state.status = "success";
            state.post = action.payload;
        },
        [getPost.rejected]: (state, action) => {
            state.status = "rejected";
        },
    }
});

export default postSlice.reducer;