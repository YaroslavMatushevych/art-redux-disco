import { configureStore } from '@reduxjs/toolkit'
import { artworkApi } from './services/artworkApi'
import { setupListeners } from '@reduxjs/toolkit/dist/query'
import { persistStore } from 'redux-persist'

export const store = configureStore({
  reducer: {
    [artworkApi.reducerPath]: artworkApi.reducer
  },
  devTools: process.env.NODE_ENV !== 'production',
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({}).concat([artworkApi.middleware])
})

// persist the store if needed but we need to be careful how much data is stored
// persistStore(store)

// we must call setupListeners(store.dispatch) to enable the refetchOnFocus feature
setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
