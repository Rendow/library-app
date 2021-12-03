import { AppRootStateType } from '../../bll/store';
import { BookType, QueryTermType, RequestStatusType } from '../../bll/types/app-types';
import { PageStateType } from '../../bll/types/page-types';

export const selectBooks = (state: AppRootStateType): BookType[] => state.app.books;
export const selectStatus = (state: AppRootStateType):RequestStatusType => state.app.status;
export const selectError = (state: AppRootStateType):string | null => state.app.error;
export const selectQueryTerm = (state: AppRootStateType):QueryTermType => state.app.queryTerm;
export const selectPageInfo = (state: AppRootStateType):PageStateType => state.page;

