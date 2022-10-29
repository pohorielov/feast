import { createReducer } from '@reduxjs/toolkit';

import { addClient, addSpecialist } from './actions';

const defaultState = {
  name: 'pohorielov',
  email: 'i.pogorelow3@gmail.com',
  isClient: false,
  isSpecialist: true,
};

createReducer(defaultState, {
  [addClient]: (state, action) => {
    state.isClient = action.payload;
  },
  [addSpecialist]: (state, action) => {
    state.isSpecialist = action.payload;
  },
});
