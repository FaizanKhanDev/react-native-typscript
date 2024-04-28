import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../app/store";
interface Todo {
    id: number;
    name: string;
    quantity: number;
}
interface TodoListState {
    todoList: Todo[]
}

const initialState: TodoListState = {
    todoList: [
        { id: 1, name: "John", quantity: 20 },
        { id: 2, name: "Jane", quantity: 21 },
        { id: 3, name: "Jack", quantity: 22 },
        { id: 4, name: "Jill", quantity: 23 },
        { id: 5, name: "Joe", quantity: 24 }
    ]
};

export const todoListSlice = createSlice({
    name:"TodoList",
    initialState,
    reducers: {
            createItem :(state, action:PayloadAction<Todo>) => {
                state.todoList.push(action.payload)
                console.log("List", state.todoList);
            }
    }

})

export  const {
    createItem
} = todoListSlice.actions;


export const selectTodoList = (state: RootState) => state.todoList.todoList
export default todoListSlice.reducer