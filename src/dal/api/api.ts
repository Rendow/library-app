import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://www.googleapis.com/books/v1/',
});

export const API = {
    getBooks(query:string, categories:string,sortBy:string,index:number) {
        return instance.get(`volumes?q=${query}+${categories}&orderBy=${sortBy}&maxResults=30&startIndex=${index}&key=AIzaSyB-JHixor0WrTyBQX64mEutuCjbJoTaopY`);
    },
};
