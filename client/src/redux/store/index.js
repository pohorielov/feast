import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import {userReducer} from "./userReducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    user: userReducer,
})

export const store = createStore(rootReducer, compose(applyMiddleware(thunk)))