import { AppRootStateType } from '../../bll/store';
import { ItemsType } from '../../bll/types/app-types';

export const selectBook = (state: AppRootStateType): ItemsType[] => state.app.currentBook;
