import Input from '../common/input/Input';
import s from './SearchForm.module.scss';
import Button from '../common/button/Button';
import Select from '../common/select/Select';
import React, { useRef } from 'react';
import { fetchBooksTC } from '../../bll/appReducer';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { routes } from '../router/routes';
import { selectStatus } from '../book-list/selectors';

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
    const navigate = useNavigate();
    const status = useSelector(selectStatus);
    const formRef = useRef<HTMLFormElement>(null);

    const handleSubmit = (e: React.FormEvent<FormPropsElement>) => {
        e.preventDefault();

        let search = e.currentTarget.elements.search.value;
        let categories = e.currentTarget.elements.categories.value;
        let sortBy = e.currentTarget.elements.sortBy.value;

        if (search.trim() === '' || search.length > 20) {
            alert('Input should be more than 1 character and less then 20');
            formRef.current && formRef.current.reset();
        }

        dispatch(fetchBooksTC(search, categories, sortBy));

        navigate(routes.bookList);
    };
    const categories = ['all', 'art', 'biography', 'computers', 'history', 'medical', 'poetry'];
    const sortBy = ['relevance', 'newest'];

    return (
        <div className={s.wrap}>
            <div className={s.bcgImage} />
            <form ref={formRef} className={s.form} onSubmit={handleSubmit}>
                <span className={s.title}> Online library</span>
                <div className={s.inputGroup}>
                    <Input placeholder="Search" name="search" className={s.input} />
                    <Button type={'submit'} disabled={status === 'loading'} className={s.btn}>
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
        </div>
    );
};
