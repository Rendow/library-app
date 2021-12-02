import React, { useState } from 'react';
import s from'./App.module.scss';
import { SearchForm } from './ui/search-form/SearchForm';
import { routes } from './ui/router/routes';
import { Route, Routes } from 'react-router-dom';
import { Books } from './ui/books/Books';
import { Book } from './ui/book/Book';

function App() {

    return (
        <div className={s.container}>
            <SearchForm/>
            <Routes>
                <Route  path={'/*'} element={<Books/>}/>
                <Route  path={routes.books} element={<Books/>}/>
                <Route  path={routes.book}  element={ <Book/>}/>
            </Routes>

        </div>
    );
}

export default App;
