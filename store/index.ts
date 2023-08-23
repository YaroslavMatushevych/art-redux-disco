import { configureStore } from '@reduxjs/toolkit'
import artworksReducer from './artworksSlice'

// Creating a Redux store with the artworks reducer.
// Redux is great for managing global state across large applications.
// For smaller apps, React's context API or local state might be more suitable.
export const store = configureStore({
  reducer: {
    artworks: artworksReducer
  }
})
