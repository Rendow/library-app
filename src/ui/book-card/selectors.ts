import { AppRootStateType } from '../../bll/store';
import { BookType } from '../../bll/types/app-types';

export const selectBook = (state: AppRootStateType): BookType[] => state.app.currentBook;
