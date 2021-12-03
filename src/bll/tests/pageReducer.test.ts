import { PageStateType } from '../types/page-types';
import { pageReducer, setPageIndexAC, setTotalItemsAC } from '../pageReducer';

let state: PageStateType;
beforeEach(() => {
   state = {
      totalItems: 0,
      pageIndex: 30,
   };
});

test('totalItems should be increase', () => {
   const action = setTotalItemsAC(100);

   const newState = pageReducer(state, action);

   expect(newState.totalItems).toBe(100);
});

test('pageIndex should increase by 30', () => {
   const action = setPageIndexAC(30);

   const newState = pageReducer(state, action);

   expect(newState.pageIndex).toBe(60);
});
