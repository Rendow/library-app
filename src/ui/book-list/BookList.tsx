import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppRootStateType } from '../../bll/store';
import { fetchBooksTC, ItemsType, QueryTermType, RequestStatusType, setAppErrorAC } from '../../bll/appReducer';
import s from './BookList.module.scss';
import { Preloader } from '../common/preloader/Preloader';
import { Book } from './book/Book';
import { PageStateType, setPageIndexAC } from '../../bll/pageReducer';
import Button from '../common/button/Button';

export const BookList = () => {
    const dispatch = useDispatch();
    const books = useSelector<AppRootStateType, ItemsType[]>(state => state.app.items);
    const status = useSelector<AppRootStateType, RequestStatusType>(state => state.app.status);
    const error = useSelector<AppRootStateType, string | null>(state => state.app.error);

    const { totalItems, pageIndex } = useSelector<AppRootStateType, PageStateType>(state => state.page);
    const { search, categories, sortBy } = useSelector<AppRootStateType, QueryTermType>(state => state.app.queryTerm,);

    const loadMore = () => {
        dispatch(fetchBooksTC(search, categories, sortBy, pageIndex));
        dispatch(setPageIndexAC(30));
    };

    if(error){
        alert(error)
        dispatch(setAppErrorAC(''))
    }
    return (
        <div className={s.wrap}>
            {status === 'loading' && !books.length ? (
                <div style={{ marginTop: '10vh' }}>
                    <Preloader />
                </div>
            ) : (
                <>
                    {totalItems > 0 && (
                        <>
                            <div className={s.count}>Found {totalItems && totalItems} results</div>

                            <div className={s.bookList}>
                                {books &&
                                    books.map(item => (
                                        <Book key={item.id} id={item.id} item={item.volumeInfo} />
                                    ))}
                            </div>
                            {totalItems && (
                                <Button
                                    disabled={status === 'loading'}
                                    className={s.btn}
                                    onClick={loadMore}
                                >
                                    Load more
                                </Button>
                            )}
                            {status === 'loading' && (
                                <div className={s.loadWrap}>
                                    <Preloader />
                                </div>
                            )}
                        </>
                    )}
                </>
            )}
        </div>
    );
};
