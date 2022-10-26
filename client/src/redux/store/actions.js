import {ADD_CLIENT, ADD_SPECIALIST} from "./types";

export const clientAction = (payload) => ({type: ADD_CLIENT, payload})
export const specialistAction = (payload) => ({type: ADD_SPECIALIST, payload})