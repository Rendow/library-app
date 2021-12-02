import Input from '../common/input/Input';
import s from './SearchForm.module.scss';
import Button from '../common/button/Button';
import Select from '../common/select/Select';
import React from 'react';
import { fetchBooksTC, ItemsType } from '../../bll/appReducer';
import { useDispatch, useSelector } from 'react-redux';
import { AppRootStateType } from '../../bll/store';
import { Books } from '../books/Books';

interface FormElements extends HTMLFormControlsCollection {
    search: HTMLInputElement;
    categories: HTMLInputElement;
    sortBy: HTMLInputElement;
}

interface FormPropsElement extends HTMLFormElement {
    readonly elements: FormElements;
}

export const SearchForm = () => {
    const dispatch = useDispatch();
    const books = useSelector<AppRootStateType, ItemsType[]>(state => state.app.items);
    const status = useSelector<AppRootStateType, string>(state => state.app.status);

    const handleSubmit = (e: React.FormEvent<FormPropsElement>) => {
        e.preventDefault();

        let search = e.currentTarget.elements.search.value;
        let categories = e.currentTarget.elements.categories.value;
        let sortBy = e.currentTarget.elements.sortBy.value;

        dispatch(fetchBooksTC(search, categories, sortBy));
    };
    const categories = ['all', 'art', 'biography', 'computers', 'history', 'medical', 'poetry'];
    const sortBy = ['relevance', 'newest'];


    return (
        <div className={s.wrap}>
            <div className={s.bcgImage} />
            <form className={s.form} onSubmit={handleSubmit}>
                <span className={s.title}> Online library</span>
                <div className={s.inputGroup}>
                    <Input placeholder="Search" name="search" className={s.input} />
                    <Button type={'submit'} className={s.btn}>
                        search
                    </Button>
                </div>

                <div className={s.selectGroup}>
                    <div>
                        <span>Categories</span>
                        <Select options={categories} name="categories" />
                    </div>
                    <div>
                        <span>Sorting by</span>
                        <Select options={sortBy} name="sortBy" />
                    </div>
                </div>
            </form>
            {/*<div style={{ display: 'flex', width: '500px' }}>*/}
            {/*    {books &&*/}
            {/*        books.map(item => {*/}
            {/*            // return <Books books={item}/>*/}
            {/*        })}*/}
            {/*</div>*/}
        </div>
    );
};
