import { createSelector } from 'reselect';

const userReducer = (state) => state.user;

const selectEmail = createSelector(userReducer, (user) => user.email);

const selectStatusClient = createSelector(userReducer, (user) => user.isClient);

const selectStatusSpecialist = createSelector(userReducer, (user) => user.isSpecialist);

export { selectEmail, selectStatusClient, selectStatusSpecialist };
