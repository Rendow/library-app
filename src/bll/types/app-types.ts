import { Nullable } from './Nullable';

type VolumeInfoType = {
    allowAnonLogging: boolean;
    authors: string[];
    canonicalVolumeLink: string;
    categories: string[];
    contentVersion: string;
    imageLinks: {
        smallThumbnail: string;
        thumbnail: string;
    };
    industryIdentifiers: [];
    infoLink: string;
    language: string;
    maturityRating: string;
    pageCount: number;
    panelizationSummary: {
        containsEpubBubbles: false;
        containsImageBubbles: false;
    };
    previewLink: string;
    printType: string;
    publishedDate: string;
    readingModes: string;
    title: string;
    description: string;
};
type BookType = {
    volumeInfo: VolumeInfoType;
    id: string;
};
type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed';
type QueryTermType = {
    search: string;
    categories: string;
    sortBy: string;
};
type AppStateType = {
    books: BookType[];
    status: RequestStatusType;
    error: Nullable<string>;
    currentBook: BookType[];
    queryTerm: QueryTermType;
};
export type { AppStateType, RequestStatusType, QueryTermType, VolumeInfoType, BookType };
