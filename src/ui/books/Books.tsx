import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppRootStateType } from '../../bll/store';
import { ItemsType } from '../../bll/appReducer';
import s from './Books.module.scss'

type BooksType = {

}
export const Books = (props:BooksType) => {
  const dispatch = useDispatch();
  const books = useSelector<AppRootStateType, ItemsType[]>(state => state.app.items);
  const status = useSelector<AppRootStateType, string>(state => state.app.status);

if(!books) return <div></div>



  return <div className={s.wrap}>
          {books &&
              books.map(item => {
                return  <div key={item.id}  className={s.book}>
                    <img src={ item.volumeInfo.imageLinks.thumbnail} alt="" />
                    <div className={s.description}>

                        <div> {item.volumeInfo.categories}</div>
                        <div> {item.volumeInfo.title}</div>
                        <div> {item.volumeInfo.authors}</div>
                    </div>

                  </div>
              })}
      </div>

}
