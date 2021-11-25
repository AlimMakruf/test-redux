import { applyMiddleware, createStore, combineReducers } from "redux";
import thunk from "redux-thunk"
import { reducerCategory } from "./reducer/reducerCategory";
import { reducerBook } from "./reducer/reducerBook";

const store = createStore(
    combineReducers({
        books: reducerBook,
        categorys: reducerCategory
    }), applyMiddleware(thunk))

export default store