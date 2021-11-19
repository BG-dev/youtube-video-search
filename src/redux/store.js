import { createStore, applyMiddleware } from "redux";
import { combineReducers } from "redux-immutablejs";
import thunk from "redux-thunk";
import { reducer } from "redux-form/immutable";
import videos from "./reducers/videos"
import token from "./reducers/token"

const reducers = {
    form: reducer,
    videos,
    token
}

const store = createStore(combineReducers(reducers), applyMiddleware(thunk));

export default store