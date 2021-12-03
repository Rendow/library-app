import React from 'react';
import s from './App.module.scss';
import { SearchForm } from './search-form/SearchForm';
import { routes } from './router/routes';
import { Route, Routes } from 'react-router-dom';
import { BookList } from './book-list/BookList';
import { BookCard } from './book-card/BookCard';

function App() {
    return (
        <div className={s.container}>
            <SearchForm />
            <Routes>
                <Route path={'/*'} element={<BookList />} />
                <Route path={routes.bookList} element={<BookList />} />
                <Route path={routes.bookCard} element={<BookCard />} />
            </Routes>
        </div>
    );
}

export default App;
