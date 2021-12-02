import { applyMiddleware, combineReducers, createStore } from 'redux';
import ReduxThunk from 'redux-thunk'
import { appReducer } from './appReducer';

const rootReducer = combineReducers({
  app: appReducer,
})

export const store = createStore(rootReducer, applyMiddleware(ReduxThunk))

export type AppRootStateType = ReturnType<typeof rootReducer>

// @ts-ignore
window.store = store
