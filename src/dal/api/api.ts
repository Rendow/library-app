import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://www.googleapis.com/books/v1/',
});

export const API = {
    getBooks(query:string, categories:string,sortBy:string) {
        return instance.get(`volumes?q=${query}+${categories}&orderBy=${sortBy}&key=AIzaSyB-JHixor0WrTyBQX64mEutuCjbJoTaopY`);
    },
};
