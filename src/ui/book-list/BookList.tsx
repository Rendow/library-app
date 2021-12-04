import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBooksTC, setAppErrorAC } from '../../bll/appReducer';
import s from './BookList.module.scss';
import { Preloader } from '../reusable-components/preloader/Preloader';
import { Book } from './book/Book';
import { setStartSearchIndexAC } from '../../bll/pageReducer';
import Button from '../reusable-components/button/Button';
import { selectBooks, selectError, selectPageInfo, selectQueryTerm, selectStatus } from './selectors';
import { EMPTY_STRING, PAGINATION_STEP } from '../constants/constants';

export const BookList = () => {
   const dispatch = useDispatch();
   const books = useSelector(selectBooks);
   const status = useSelector(selectStatus);
   const error = useSelector(selectError);
   const { totalResult, startIndex } = useSelector(selectPageInfo);
   const { search, categories, sortBy } = useSelector(selectQueryTerm);

   const onLoadMoreClick = () => {
      dispatch(fetchBooksTC(search, categories, sortBy, startIndex));
      dispatch(setStartSearchIndexAC(PAGINATION_STEP));
   };

   if (error) {
      alert(error);
      dispatch(setAppErrorAC(EMPTY_STRING));
   }
   return (
      <div className={s.wrap}>
         {status === 'loading' && !books.length ? (
            <div style={{ marginTop: '10vh' }}>
               <Preloader />
            </div>
         ) : (
            <>
               {totalResult > 0 && (
                  <>
                     <div className={s.count}>Found {totalResult && totalResult} results</div>

                     <div className={s.bookList}>
                        {books &&
                           books.map(book => <Book key={book.id} id={book.id} item={book.volumeInfo} />)}
                     </div>
                     {totalResult && (
                        <Button disabled={status === 'loading'} className={s.btn} onClick={onLoadMoreClick}>
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
