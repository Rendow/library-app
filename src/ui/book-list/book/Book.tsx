import { setCurrentBookAC } from '../../../bll/appReducer';
import { routes } from '../../router/routes';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import s from './Book.module.scss';
import bookImg from '../../../common/assets/img/book.png';
import React from 'react';
import { VolumeInfoType } from '../../../bll/types/app-types';

type BookPropsType = {
    item: VolumeInfoType;
    id: string;
};
export const Book = React.memo(({ item, id }: BookPropsType) => {
    const dispatch = useDispatch();
    const { imageLinks, title, categories, authors } = item;

    const onClickHandler = () => {
        dispatch(setCurrentBookAC(id));
    };
    return (
        <div className={s.book}>
            <NavLink onClick={onClickHandler} style={{ alignSelf: 'center' }} to={routes.bookCard}>
                <img src={imageLinks ? imageLinks.thumbnail : bookImg} alt='image has been losted'/>
            </NavLink>
            <div className={s.description}>
                <div>{categories ? categories[0] : ''}</div>
                {title && <div>{title.length > 100 ? title.slice(0, 100) + '...' : title}</div>}
                {authors && <div> {authors}</div>}
            </div>
        </div>
    );
})
