import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    name: '',
    email: '',
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
    addEmail(state, action) {
      state.email = action.payload;
    },
  },
});

export default userSlice.reducer;
export const { addClient, addSpecialist, addEmail } = userSlice.actions;
