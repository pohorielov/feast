import {ADD_CLIENT, ADD_SPECIALIST} from "./types";

const defaultState = {
    isClient: false,
    isSpecialist: false
}

export const userReducer = (state = defaultState, action) => {
    switch(action.payload) {
        case ADD_CLIENT:
            return {...state, isClient: state.isClient = action.payload}
        case ADD_SPECIALIST:
            return {...state, isSpecialist: state.isSpecialist = action.payload}
        default:
            return state
    }
}