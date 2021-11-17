import { createStore, combineReducers } from "redux";
import { reducer } from "redux-form";

const reducers = {
    form: reducer
}

const store = createStore(combineReducers(reducers));

export default store