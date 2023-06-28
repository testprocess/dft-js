import { configureStore } from '@reduxjs/toolkit'
import graphSlice from './features/graphSlice'

const store = configureStore({
  reducer: {
    graph: graphSlice
  }
})

export default store