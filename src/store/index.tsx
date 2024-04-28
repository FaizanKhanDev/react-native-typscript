import { configureStore, combineReducers } from "@reduxjs/toolkit";
import studentReducer from "./reducers/student/index.ts";

const rootReducer = combineReducers({
    student: studentReducer
});

export const store = configureStore({
    reducer: rootReducer
});
