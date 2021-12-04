import { PageStateType } from '../types/page-types';
import { pageReducer, setStartSearchIndexAC, setTotalResultAC } from '../pageReducer';
import { AppStateType, BookType, QueryTermType, RequestStatusType } from '../types/app-types';
import { Nullable } from '../types/Nullable';
import {
    appReducer,
    setAppErrorAC,
    setAppStatusAC,
    setBooksAC,
    setCurrentBookAC,
    setNewBooksAC,
    setQueryTermAC,
} from '../appReducer';

let state: AppStateType;
let receivedData:BookType[];
beforeEach(() => {
  receivedData = [{
        id: '1',
        volumeInfo: {
            allowAnonLogging: false,
            authors: [
                'Harvard University. Graduate School of Business Administration. Bureau of Business Research',
            ],
            canonicalVolumeLink: 'https://books._a?hl=&id=ZSnOAAAAMAAJ',
            categories: ['Department stores'],
            contentVersion: '0.2.1.0.preview.0',
            imageLinks: {
                smallThumbnail: 'http://books.googls_api',
                thumbnail: 'http:ZSr&imurce=gbs_api',
            },
            industryIdentifiers: [],
            infoLink: 'http://books.goce=gbs_api',
            language: 'en',
            pageCount:100,
            maturityRating: 'NOT_MATURE',
            panelizationSummary: { containsEpubBubbles: false, containsImageBubbles: false },
            previewLink: 'http://books.googlerce=gbs_api',
            printType: 'BOOK',
            publishedDate: '1950',
            readingModes: 'string',
            title: 'Operating Results of Department and Specialty Stores',
            description: 'Operating Results of Department and Specialty Stores',
        },
    },]
   state = {
      status: 'idle',
      books: [
         {
            id: 'iYWOzgEACAAJ',
            volumeInfo:
                {
               authors: ['D. S Marriott'],
               categories: ['Poetry'],
               imageLinks: {
                  smallThumbnail:
                     'string',
                  thumbnail:
                     'string',
               },
               title: 'Before Whiteness',
                description:'some description',
            },
         },
          {
              id: '"2xB8AAAAIAAJ"',
              volumeInfo: {
                  authors: ['Aleksandr Aleksandrovich Blok'],
                  categories:['Russian poetry'],
                  imageLinks: {
                      smallThumbnail:
                          'string',
                      thumbnail:
                          'string',
                  },
                  title: "Selected poems",
                  description:'some description',
              },
          },
          {
              id: 'YWb4QwAACAAJ',
              volumeInfo: {
                  authors: ['Adam Michael Starr'],
                  categories: ['Poetry'],
                  imageLinks: {
                      smallThumbnail:
                          'string',
                      thumbnail:
                          'string',
                  },
                  title: 'Immediately Before',
                  description:'some description',
              },
          },
      ] as BookType[],
      error: null as Nullable<string>,
      currentBook: [] as BookType[],
      queryTerm: {search: 'before', categories: 'poetry', sortBy: 'relevance'} as QueryTermType,
   };
});


test('new books should be set, old book should be erased; books length should be equal to 1', () => {
    const action = setNewBooksAC(receivedData);

    const newState = appReducer(state, action);

    expect(newState.books.length).toBe(1);
});

test('received books should be unique; books length should be equal to 1', () => {
     receivedData = [{
        id: '1',
        volumeInfo: {
            allowAnonLogging: false,
            authors: [
                'Harvard University. Graduate School of Business Administration. Bureau of Business Research',
            ],
            canonicalVolumeLink: 'https://books._a?hl=&id=ZSnOAAAAMAAJ',
            categories: ['Department stores'],
            contentVersion: '0.2.1.0.preview.0',
            imageLinks: {
                smallThumbnail: 'http://books.googls_api',
                thumbnail: 'http:ZSr&imurce=gbs_api',
            },
            industryIdentifiers: [],
            infoLink: 'http://books.goce=gbs_api',
            language: 'en',
            pageCount:100,
            maturityRating: 'NOT_MATURE',
            panelizationSummary: { containsEpubBubbles: false, containsImageBubbles: false },
            previewLink: 'http://books.googlerce=gbs_api',
            printType: 'BOOK',
            publishedDate: '1950',
            readingModes: 'string',
            title: 'Operating Results of Department and Specialty Stores',
            description: 'Operating Results of Department and Specialty Stores',
        },
    },{
        id: '1',
        volumeInfo: {
            allowAnonLogging: false,
            authors: [
                'Harvard University. Graduate School of Business Administration. Bureau of Business Research',
            ],
            canonicalVolumeLink: 'https://books._a?hl=&id=ZSnOAAAAMAAJ',
            categories: ['Department stores'],
            contentVersion: '0.2.1.0.preview.0',
            imageLinks: {
                smallThumbnail: 'http://books.googls_api',
                thumbnail: 'http:ZSr&imurce=gbs_api',
            },
            industryIdentifiers: [],
            infoLink: 'http://books.goce=gbs_api',
            language: 'en',
            pageCount:100,
            maturityRating: 'NOT_MATURE',
            panelizationSummary: { containsEpubBubbles: false, containsImageBubbles: false },
            previewLink: 'http://books.googlerce=gbs_api',
            printType: 'BOOK',
            publishedDate: '1950',
            readingModes: 'string',
            title: 'Operating Results of Department and Specialty Stores',
            description: 'Operating Results of Department and Specialty Stores',
        },
    },]
    const action = setNewBooksAC(receivedData);

    const newState = appReducer(state, action);

    expect(newState.books.length).toBe(1);
});

test('load more should save old books and load new; books length should be equal to 5', () => {
    const receivedData:BookType[] = [{
        id: '1',
        volumeInfo: {
            allowAnonLogging: false,
            authors: [
                'Harvard University. Graduate School of Business Administration. Bureau of Business Research',
            ],
            canonicalVolumeLink: 'https://books._a?hl=&id=ZSnOAAAAMAAJ',
            categories: ['Department stores'],
            contentVersion: '0.2.1.0.preview.0',
            imageLinks: {
                smallThumbnail: 'http://books.googls_api',
                thumbnail: 'http:ZSr&imurce=gbs_api',
            },
            industryIdentifiers: [],
            infoLink: 'http://books.goce=gbs_api',
            language: 'en',
            pageCount:100,
            maturityRating: 'NOT_MATURE',
            panelizationSummary: { containsEpubBubbles: false, containsImageBubbles: false },
            previewLink: 'http://books.googlerce=gbs_api',
            printType: 'BOOK',
            publishedDate: '1950',
            readingModes: 'string',
            title: 'Operating Results of Department and Specialty Stores',
            description: 'Operating Results of Department and Specialty Stores',
        },
    },{
        id: '2',
        volumeInfo: {
            allowAnonLogging: false,
            authors: [
                'Harvard University. Graduate School of Business Administration. Bureau of Business Research',
            ],
            canonicalVolumeLink: 'https://books._a?hl=&id=ZSnOAAAAMAAJ',
            categories: ['Department stores'],
            contentVersion: '0.2.1.0.preview.0',
            imageLinks: {
                smallThumbnail: 'http://books.googls_api',
                thumbnail: 'http:ZSr&imurce=gbs_api',
            },
            industryIdentifiers: [],
            infoLink: 'http://books.goce=gbs_api',
            language: 'en',
            pageCount:100,
            maturityRating: 'NOT_MATURE',
            panelizationSummary: { containsEpubBubbles: false, containsImageBubbles: false },
            previewLink: 'http://books.googlerce=gbs_api',
            printType: 'BOOK',
            publishedDate: '1950',
            readingModes: 'string',
            title: 'Operating Results of Department and Specialty Stores',
            description: 'Operating Results of Department and Specialty Stores',
        },
    },]
    const action = setBooksAC(receivedData);

    const newState = appReducer(state, action);

    expect(newState.books.length).toBe(5);
    expect(newState.books[4].id).toEqual('2');
});
test('status should be changed', () => {
    const action = setAppStatusAC('succeeded');

    const newState = appReducer(state, action);

    expect(newState.status).toEqual('succeeded')
});

test('error should be set', () => {
    const action = setAppErrorAC('Some error occurred');

    const newState = appReducer(state, action);

    expect(newState.error).toEqual('Some error occurred')
});

test('current book should be set', () => {
    let currentBookId = 'iYWOzgEACAAJ'
    const action = setCurrentBookAC(currentBookId);

    const newState = appReducer(state, action);

    expect(newState.currentBook.length).toBe(1);
    expect(newState.currentBook[0].id).toEqual('iYWOzgEACAAJ');
});

test('search term should be set', () => {
    let searchQueryTerm = {search: 'before', categories: 'poetry', sortBy: 'relevance'}
    const action = setQueryTermAC(searchQueryTerm);

    const newState = appReducer(state, action);

    expect(newState.queryTerm.search).toEqual('before');
    expect(newState.queryTerm.categories).toEqual('poetry');
    expect(newState.queryTerm.sortBy).toEqual('relevance');
});
