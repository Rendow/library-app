import { Dispatch } from 'redux';
import { handleNetworkAppError } from './utils/error-utils';
import { API } from '../dal/api/api';

export type ItemsType = {
    volumeInfo: {
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
    },
    id:string,
};
type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed';

export type StateType = {
    items: ItemsType[];
    status: RequestStatusType;
    error: string;
};

const initialState = {
    status: 'idle' as RequestStatusType,
    items: [] as ItemsType[],
    error: '',
};

export const appReducer = (state: StateType = initialState, action: ActionType) => {
    switch (action.type) {
        case 'APP/SET-BOOKS':
            return { ...state, items: action.books };
        default:
            return state;
    }
};

//actions
export type ActionType =
    | ReturnType<typeof setBooksAC>
    | ReturnType<typeof setAppStatusAC>
    | ReturnType<typeof setAppErrorAC>
    | ReturnType<typeof setAppStatusAC>;

export const setBooksAC = (books: ItemsType[]) => ({ type: 'APP/SET-BOOKS', books } as const);
export const setAppStatusAC = (status: RequestStatusType) => ({ type: 'APP/SET-STATUS', status } as const);
export const setAppErrorAC = (error: string | null) => ({ type: 'APP/SET-ERROR', error } as const);

//thunk
export const fetchBooksTC =
    (query: string, categories: string, sortBy: string) => async (dispatch: Dispatch<ActionType>) => {
        dispatch(setAppStatusAC('loading'));
        const res = await API.getBooks(query, categories, sortBy);
        try {
            if (res.status === 200) {
                console.log(res.data.items);
                dispatch(setBooksAC(res.data.items));
                dispatch(setAppStatusAC('succeeded'));
            }
        } catch (error) {
            handleNetworkAppError(error as Error, dispatch);
            dispatch(setAppStatusAC('failed'));
        }
    };
