import { configureStore, ConfigureStoreOptions } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import thunkMiddleware from 'redux-thunk';
import playerReducer from '../features/players/reducers/playerSlice'
import teamReducer from '../features/teams/reducers/teamSlice'
import gamesReducer from '../features/games/reducers/gamesSlice'
import statisticsReducer from '../features/statistics/reducers/statisticsSlice'
import { api } from './api'

const createStore = (
  options?: ConfigureStoreOptions['preloadedState'] | undefined
) =>
  configureStore({
    reducer: {
      [api.reducerPath]: api.reducer,
      players: playerReducer,
      teams:teamReducer,
      statistics:statisticsReducer,
      games:gamesReducer
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(api.middleware).concat(thunkMiddleware),
    ...options,
  })

export const store = createStore()

export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch
export type RootState = ReturnType<typeof store.getState>
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector
export { api }