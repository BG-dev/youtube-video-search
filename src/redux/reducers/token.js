import { SET_NEXT_TOKEN_ACTION } from "../actions/actions";

const initialState = {
    token: null
}

const token = (state = initialState, action) => {
    if(action.type === SET_NEXT_TOKEN_ACTION){
        return {
            ...state,
            token: action.payload
        };
    }
    return state;
}

export default token