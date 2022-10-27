import {ADD_CLIENT, ADD_SPECIALIST} from "./types";
import {createAction} from "@reduxjs/toolkit";

export const addClient = createAction(ADD_CLIENT)
export const addSpecialist = createAction(ADD_SPECIALIST)