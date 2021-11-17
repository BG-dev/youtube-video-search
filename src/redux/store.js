import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { reducer } from "redux-form";
import videos from "./reducers/videos"

const reducers = {
    form: reducer,
    videos
}

const store = createStore(combineReducers(reducers), applyMiddleware(thunk));

export default store