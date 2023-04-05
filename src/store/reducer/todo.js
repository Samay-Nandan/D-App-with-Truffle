import { createSlice } from "@reduxjs/toolkit";
import { SET_TODO_LIST } from "../types/todo";

const initialState = {
    todoList: []
}

const todo = createSlice({
    name: "Todo",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(SET_TODO_LIST, (state, { payload }) => {
            state.todoList = payload;
        })
    }
});

export const Todo = todo.reducer;