import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    name: 'pohorielov',
    email: 'i.pogorelow3@gmail.com',
    role: {
      client: false,
      specialist: false,
    },
  },
  reducers: {
    addClient(state, action) {
      state.role.client = action.payload;
    },
    addSpecialist(state, action) {
      state.role.specialist = action.payload;
    },
  },
});

export default userSlice.reducer;
export const { addClient, addSpecialist } = userSlice.actions;
