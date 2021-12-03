import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBooksTC, setAppErrorAC } from '../../bll/appReducer';
import s from './BookList.module.scss';
import { Preloader } from '../common/preloader/Preloader';
import { Book } from './book/Book';
import { setPageIndexAC } from '../../bll/pageReducer';
import Button from '../common/button/Button';
import { selectBooks, selectError, selectPageInfo, selectQueryTerm, selectStatus } from './selectors';

export const BookList = () => {
   const dispatch = useDispatch();
   const books = useSelector(selectBooks);
   const status = useSelector(selectStatus);
   const error = useSelector(selectError);
   const { totalItems, pageIndex } = useSelector(selectPageInfo);
   const { search, categories, sortBy } = useSelector(selectQueryTerm);

   const loadMore = () => {
      dispatch(fetchBooksTC(search, categories, sortBy, pageIndex));
      dispatch(setPageIndexAC(30));
   };

   if (error) {
      alert(error);
      dispatch(setAppErrorAC(''));
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
                           books.map(item => <Book key={item.id} id={item.id} item={item.volumeInfo} />)}
                     </div>
                     {totalItems && (
                        <Button disabled={status === 'loading'} className={s.btn} onClick={loadMore}>
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
