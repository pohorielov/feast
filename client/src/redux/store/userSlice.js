import {createSlice} from "@reduxjs/toolkit";


const userSlice = createSlice({
    name: "user",
    initialState: {
        name: 'pohorielov',
        email: 'i.pogorelow3@gmail.com',
        isClient: false,
        isSpecialist: true
    },
    reducers: {
        addClient(state, action) {
            state.isClient = action.payload
        },
        addSpecialist(state, action) {
            state.isSpecialist = action.payload
        },
    }
})

export default userSlice.reducer
export const {addClient, addSpecialist} = userSlice.actions