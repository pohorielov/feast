import {ADD_CLIENT, ADD_SPECIALIST, FETCH_EMAIL, FETCH_NAME} from "./types";

const defaultState = {
    name: 'pohorielov',
    email: 'i.pogorelow3@gmail.com',
    isClient: false,
    isSpecialist: true
}

export const userReducer = (state = defaultState, action) => {
    switch(action.type) {
        case ADD_CLIENT:
            return {...state, isClient: state.isClient = action.payload}
        case ADD_SPECIALIST:
            return {...state, isSpecialist: state.isSpecialist = action.payload}
        case FETCH_NAME:
            return {...state, name: state.name}
        case FETCH_EMAIL:
            return {...state, email: state.email}
        default:
            return state
    }
}