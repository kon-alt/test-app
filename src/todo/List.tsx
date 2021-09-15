import React, {FC} from 'react';
import {useSelector} from "react-redux";
import {RootState} from "../redux/reducer";
import TodoButtonGroup from "./components/TodoButtonGroup";
import {useAction} from "../hooks/useAction";
import RenderListItem from "./components/RenderListItem";
import './style.scss';
import {actionRemoveTodo} from "../redux/actions/actionTodo";

const buttonData = ['Добавить', 'Удалить'];


const List: FC<any> = () => {
    const {items} = useSelector((state: RootState) => state.todo);
    const {actionAddTodo, actionRemoveTodo} = useAction()

    const handleClickTodo = (index: number) => {
        if (index === 0) {
            const todo = Math.random().toString(36).substr(2, 10);
            actionAddTodo({todo})
        } else {
            actionRemoveTodo({todo: ''})
        }

    }

    return (
        <div className="todo">
            <ul className="todo-list">
                {items.map((i: string, index: number) => <RenderListItem key={index}>{i}</RenderListItem>)}
            </ul>
            <TodoButtonGroup buttonData={buttonData} handle={handleClickTodo}/>
        </div>

    );
};

export default List;
