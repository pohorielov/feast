import { createSelector } from 'reselect';

const userReducer = (state) => state.user;

const selectEmail = createSelector(userReducer, (user) => user.email);

const selectStatusClient = createSelector(userReducer, (user) => user.role.client);

const selectStatusSpecialist = createSelector(userReducer, (user) => user.role.specialist);

export { selectEmail, selectStatusClient, selectStatusSpecialist };
