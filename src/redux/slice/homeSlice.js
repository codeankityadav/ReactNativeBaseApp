import { createSlice, current } from '@reduxjs/toolkit'

const homeSlice = createSlice({
    name: 'home',
    initialState: {
        loading: false,
        food: [],
    },
    reducers: {
        setLoading: (state, action) => {
            // console.log('action', action) // action : {type: 'login/setIsLoggedIn', payload: true}
            // console.log('current(state)', current(state)) // current state tree
            state.loading = action.payload
        },
        resetAddress: (state, action) => {
            state.address = []
        },

    }
})

const loginReducer = homeSlice.reducer;

export const {
    setLoading,
    removeAddress,

} = homeSlice.actions

export default loginReducer;