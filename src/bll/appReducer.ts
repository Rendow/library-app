import { Dispatch } from 'redux';
import { handleNetworkAppError } from './utils/error-utils';
import { API } from '../dal/api/api';
import { setTotalItemsAC } from './pageReducer';
import { AppRootActionType, AppRootStateType } from './store';

export type VolumeInfoType = {
    allowAnonLogging: boolean;
    authors: string[];
    canonicalVolumeLink: string;
    categories: string[];
    contentVersion: string;
    imageLinks: {
        smallThumbnail: string;
        thumbnail: string;
    };
    industryIdentifiers: [];
    infoLink: string;
    language: string;
    maturityRating: string;
    pageCount: number;
    panelizationSummary: {
        containsEpubBubbles: false;
        containsImageBubbles: false;
    };
    previewLink: string;
    printType: string;
    publishedDate: string;
    readingModes: string;
    title: string;
    description: string;
};
export type ItemsType = {
    volumeInfo: VolumeInfoType;
    id: string;
};
export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed';
export type QueryTermType = {
    search: string;
    categories: string;
    sortBy: string;
};
type AppStateType = {
    items: ItemsType[];
    status: RequestStatusType;
    error: string | null;
    currentBook: ItemsType[];
    queryTerm: QueryTermType;
};

const initialState = {
    status: 'idle' as RequestStatusType,
    items: [] as ItemsType[],
    error: null as null | string,
    currentBook: [] as ItemsType[],
    queryTerm: {} as QueryTermType,
};

export const appReducer = (state: AppStateType = initialState, action: AppActionType,): typeof initialState => {
    switch (action.type) {
        case 'APP/SET-BOOKS':
            const oldState = [...state.items]
            const newState = [...action.books]

            const idList = oldState.map(i => i.id)

            const uniqueNewState = newState.filter(i => !idList.includes(i.id));
            return { ...state, items: [...oldState,...uniqueNewState] };
        case 'APP/SET-NEW-BOOKS':
            return { ...state, items: action.books};
        case 'APP/SET-STATUS':
            return { ...state, status: action.status };
        case 'APP/SET-QUERY-TERM':
            return { ...state, queryTerm: action.term };
        case 'APP/SET-ERROR':
            return { ...state, error: action.error };
        case 'APP/SET-CURRENT-BOOK':
            return { ...state, currentBook: state.items.filter(i => i.id === action.id) };
        default:
            return state;
    }
};

//actions
export type AppActionType =
    | ReturnType<typeof setBooksAC>
    | ReturnType<typeof setAppStatusAC>
    | ReturnType<typeof setAppErrorAC>
    | ReturnType<typeof setAppStatusAC>
    | ReturnType<typeof setCurrentBookAC>
    | ReturnType<typeof setNewBooksAC>
    | ReturnType<typeof setQueryTermAC>;

export const setBooksAC = (books: ItemsType[]) => ({ type: 'APP/SET-BOOKS', books } as const);
export const setNewBooksAC = (books: ItemsType[]) => ({ type: 'APP/SET-NEW-BOOKS', books } as const);
export const setCurrentBookAC = (id: string) => ({ type: 'APP/SET-CURRENT-BOOK', id } as const);
export const setAppStatusAC = (status: RequestStatusType) => ({ type: 'APP/SET-STATUS', status } as const);
export const setAppErrorAC = (error: string | null) => ({ type: 'APP/SET-ERROR', error } as const);
export const setQueryTermAC = (term: QueryTermType) => ({ type: 'APP/SET-QUERY-TERM', term } as const);

//thunk
export const fetchBooksTC =
    (search: string, categories: string, sortBy: string, index: number = 0) =>
    async (dispatch: Dispatch<AppRootActionType>, getState: () => AppRootStateType) => {

        let prevSearch = getState().app.queryTerm.search;
        let prevCategories = getState().app.queryTerm.categories;
        let prevSortBy = getState().app.queryTerm.sortBy;

        dispatch(setAppStatusAC('loading'));
        dispatch(setQueryTermAC({ search, categories, sortBy }));

        try {
            const res = await API.getBooks(search, categories, sortBy, index);
            if (res.status === 200) {
                dispatch(setTotalItemsAC(res.data.totalItems));
                // if (prevSearch === search && (prevCategories !== categories || prevSortBy !== sortBy)) {
                //     dispatch(setNewBooksAC(res.data.items));
                // } else {
                //     dispatch(setBooksAC(res.data.items));
                // }
                if (prevSearch === search && prevCategories === categories && prevSortBy === sortBy) {
                    debugger
                    dispatch(setBooksAC(res.data.items));
                } else {
                    debugger
                    dispatch(setNewBooksAC(res.data.items));
                }
                dispatch(setAppStatusAC('succeeded'));
            } else {
                handleNetworkAppError({ message: res.statusText }, dispatch);
                dispatch(setAppStatusAC('failed'));
            }
        } catch (error) {
            handleNetworkAppError(error as Error, dispatch);
            dispatch(setAppStatusAC('failed'));
        }
    };
