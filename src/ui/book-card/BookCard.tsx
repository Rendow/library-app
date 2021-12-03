import { useSelector } from 'react-redux';
import s from './BookCard.module.scss';
import React from 'react';
import bookImg from '../../common/assets/img/book.png';
import { selectBook } from './selectors';

export const BookCard = () => {
   const book = useSelector(selectBook);
   return (
      <div>
         {book &&
            book.map(item => {
               let value = item.volumeInfo;
               return (
                  <div key={item.id} className={s.wrap}>
                     <div className={s.book}>
                        <div className={s.img}>
                           <img
                              src={value.imageLinks ? value.imageLinks.thumbnail : bookImg}
                              alt="image has been losted"
                           />
                        </div>

                        <div className={s.description}>
                           {value.categories && <div>{value.categories}</div>}
                           <div>{value.title}</div>
                           <div> {value.authors}</div>
                           {value.description && <div> {value.description}</div>}
                        </div>
                     </div>
                  </div>
               );
            })}
      </div>
   );
};
