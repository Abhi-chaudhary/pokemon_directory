import { createSlice } from '@reduxjs/toolkit'

const initialState = {
   search_name:""
}

export const searchSlice= createSlice({
    name: 'search',
    initialState,
    reducers: {
        changeName: (state, action) => {
            state.search_name = action.payload
        }
    }
})

export const {changeName} = searchSlice.actions

export default searchSlice.reducer