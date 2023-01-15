import { createSlice } from "@reduxjs/toolkit";

export const taskSlice = createSlice({
    name: "taskSlice",
    initialState: {
        task: [],
        title: "",
    },
    reducers: {
        addTask: (state, action) => {
            state.task.push(action.payload);
        },
        setTitle: (state, action) => {
            state.title = action.payload;
        },
        clearTitle: (state, action) => {
            state.title = "";
        },
    }
})

export const { addTask, setTitle, clearTitle } = taskSlice.actions;
export default taskSlice.reducer;
