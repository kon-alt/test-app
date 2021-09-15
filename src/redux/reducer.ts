import {combineReducers} from "redux";
import {todo} from "./reducers/todo";

export const reducer = combineReducers({
    todo
});

export type RootState = ReturnType<typeof reducer>
