import { applyMiddleware, combineReducers, createStore } from 'redux';
import ReduxThunk from 'redux-thunk';
import { AppActionType, appReducer } from './appReducer';
import { PageActionType, pageReducer } from './pageReducer';

const rootReducer = combineReducers({
    app: appReducer,
    page: pageReducer,
});

export const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

export type AppRootStateType = ReturnType<typeof rootReducer>;
export type AppRootActionType = PageActionType | AppActionType;

// @ts-ignore
window.store = store;
