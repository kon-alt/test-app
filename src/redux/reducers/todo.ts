import {ITodoAction} from "../types";
import {todoAction} from "../actionTypes";

interface IStateTodo {
    items: any[]
}

const initState: IStateTodo = {
    items: []
}

export const todo = (state = initState, action: ITodoAction) => {
    switch (action.type) {
        case todoAction.TODO_ADD:
            return {
                ...state,
                items: [...state.items, action.todo]
            }
        case todoAction.TODO_REMOVE:
            return {
                ...state,
                items: state.items.slice(0, -1)
            }
        default:
            return state
    }
}
