/*import {createSlice} from '@reduxjs/toolkit'

const initState = {
    saved: []
}

const jokeSlice = createSlice({
    name: 'jokes',
    initialState: initState,
    reducers: {
        add: (state, action) => {
            state.saved.push(action.payload)
    },
    remove: (state, action) => {
        state.saved = state.saved.filter(e => e.id != action.payload.id)
    }
}
})

export const { add, remove } = jokeSlice.actions;
export default jokeSlice.reducer;

//by using the slice we can combine the reducer with the actions as we are here

//createSlice definition*/