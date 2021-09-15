import {Dispatch} from "redux";
import {todoAction} from "../actionTypes";
import {ITodoAction} from "../types";


export const actionAddTodo = (action: ITodoAction) => async (dispatch: Dispatch) => {
    dispatch({type: todoAction.TODO_ADD, todo: action.todo})
}

export const actionRemoveTodo = (action: ITodoAction) => (dispatch: Dispatch) => {
    dispatch({type: todoAction.TODO_REMOVE})
}
