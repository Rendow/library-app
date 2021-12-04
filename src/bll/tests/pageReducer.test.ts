import { PageStateType } from '../types/page-types';
import { pageReducer, setStartSearchIndexAC, setTotalResultAC } from '../pageReducer';

let state: PageStateType;
beforeEach(() => {
   state = {
      totalResult: 0,
      startIndex: 30,
   };
});

test('totalItems should be increase', () => {
   const action = setTotalResultAC(100);

   const newState = pageReducer(state, action);

   expect(newState.totalResult).toBe(100);
});

test('pageIndex should increase by 30', () => {
   const action = setStartSearchIndexAC(30);

   const newState = pageReducer(state, action);

   expect(newState.startIndex).toBe(60);
});
