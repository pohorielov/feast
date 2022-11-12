import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    email: '',
    role: '',
  },
  reducers: {
    addRole(state, action) {
      state.role = action.payload;
    },
    addEmail(state, action) {
      state.email = action.payload;
    },
  },
});

export default userSlice.reducer;
export const { addRole, addEmail } = userSlice.actions;
