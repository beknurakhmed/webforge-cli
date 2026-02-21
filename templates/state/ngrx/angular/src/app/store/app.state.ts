import { createAction, createReducer, createFeatureSelector, createSelector, on } from '@ngrx/store';

// Actions
export const increment = createAction('[Counter] Increment');
export const decrement = createAction('[Counter] Decrement');
export const reset = createAction('[Counter] Reset');

// State
export interface CounterState { count: number; }
const initialState: CounterState = { count: 0 };

// Reducer
export const counterReducer = createReducer(
  initialState,
  on(increment, (state) => ({ ...state, count: state.count + 1 })),
  on(decrement, (state) => ({ ...state, count: state.count - 1 })),
  on(reset, () => initialState)
);

// Selectors
export const selectCounter = createFeatureSelector<CounterState>('counter');
export const selectCount = createSelector(selectCounter, (state) => state.count);
