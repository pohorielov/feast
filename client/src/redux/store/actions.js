import {ADD_CLIENT, ADD_SPECIALIST} from "./types";

export const addClient = (payload) => ({type: ADD_CLIENT, payload})
export const addSpecialist = (payload) => ({type: ADD_SPECIALIST, payload})