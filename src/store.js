import { configureStore } from '@reduxjs/toolkit'
import searchSlice from './Slice/searchSlice'
import filterSlice from './Slice/filterSlice'
import cardSlice from './Slice/cardSlice'

export const store = configureStore({
    reducer: {
        search: searchSlice,
        filter: filterSlice,
        card:cardSlice
    }
})