import { createAction } from '@reduxjs/toolkit';

import { ADD_CLIENT, ADD_SPECIALIST } from './types';

export const addClient = createAction(ADD_CLIENT);
export const addSpecialist = createAction(ADD_SPECIALIST);
