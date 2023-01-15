import { configureStore } from "@reduxjs/toolkit";
import count from "./count";
import task from "./task";
import post from "./post";

export const store = configureStore({
    reducer: {
        count,
        task,
        post,
    },
});