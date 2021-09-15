import {applyMiddleware, createStore} from "redux";
import {reducer} from "./reducer";
import Thunk from 'redux-thunk'


export const store = createStore(reducer, applyMiddleware(Thunk));
