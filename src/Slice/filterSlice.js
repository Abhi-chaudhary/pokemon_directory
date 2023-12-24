import { createSlice } from '@reduxjs/toolkit'

const initialState = {
   filter_value:"filter"
}

export const filterSlice= createSlice({
    name: 'filter',
    initialState,
    reducers: {
        changeFilter: (state, action) => {
            state.filter_value = action.payload
        }
    }
})

export const {changeFilter} = filterSlice.actions

export default filterSlice.reducer