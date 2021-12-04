import { BookType } from '../types/app-types';

type FilterType = 'id'
export const filterById = function(array:BookType[], propertyName:FilterType) {
    let occurrences:{[key:string]:boolean} = {}

    return array.filter((x) => {
        let property = x[propertyName]
        if (occurrences[property]) {
            return false;
        }
        occurrences[property] = true;
        return true;
    })
}
