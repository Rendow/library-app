import { AppRootActionType } from './store';
import { PageStateType } from './types/page-types';


const initialState = {
    totalItems: 0,
    pageIndex: 30,
};
export const pageReducer = (state: PageStateType = initialState, action: AppRootActionType,): typeof initialState => {
    switch (action.type) {
        case 'PAGE/SET-TOTAL-ITEMS':
            return { ...state, totalItems: action.totalItems };
        case 'PAGE/SET-PAGE-INDEX':
            return { ...state, pageIndex: (state.pageIndex += action.index) };
        default:
            return state;
    }
};

//actions
export type PageActionType = ReturnType<typeof setTotalItemsAC> | ReturnType<typeof setPageIndexAC>;

export const setTotalItemsAC = (totalItems: number) => ({ type: 'PAGE/SET-TOTAL-ITEMS', totalItems } as const);
export const setPageIndexAC = (index: number) => ({ type: 'PAGE/SET-PAGE-INDEX', index } as const);
