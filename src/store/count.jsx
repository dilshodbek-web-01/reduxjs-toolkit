import { createSlice } from "@reduxjs/toolkit";

export const countSlice = createSlice({
    name: "count",
    initialState: {
        num: 0,
    },
    reducers: {
        increment: (state, action) => {
            state.num += 1;
        },
        dicrement: (state, action) => {
            state.num -= 1;
        },
        reset: (state, action) => {
            state.num = 0;
        }
    },
});

export const { increment, dicrement, reset } = countSlice.actions;
export default countSlice.reducer;