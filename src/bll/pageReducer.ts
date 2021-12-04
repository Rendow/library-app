import { AppRootActionType } from './store';
import { PageStateType } from './types/page-types';


const initialState = {
    totalResult: 0,
    startIndex: 30,
};
export const pageReducer = (state: PageStateType = initialState, action: AppRootActionType): typeof initialState => {
    switch (action.type) {
        case 'PAGE/SET-TOTAL-ITEMS':
            return { ...state, totalResult: action.totalResult };
        case 'PAGE/SET-START-SEARCH-INDEX':
            return { ...state, startIndex: (state.startIndex += action.index) };
        default:
            return state;
    }
};

//actions
export type PageActionType = ReturnType<typeof setTotalResultAC> | ReturnType<typeof setStartSearchIndexAC>;

export const setTotalResultAC = (totalResult: number) => ({ type: 'PAGE/SET-TOTAL-ITEMS', totalResult } as const);
export const setStartSearchIndexAC = (index: number) => ({ type: 'PAGE/SET-START-SEARCH-INDEX', index } as const);
