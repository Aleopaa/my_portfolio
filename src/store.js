
import { configureStore } from '@reduxjs/toolkit'
import jokesReducer from './reducers/jokesReducer';

const store = configureStore({
  reducer: {
    jokes: jokesReducer
  },
})

export default store;