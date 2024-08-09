import { isDevMode } from '@angular/core';
import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer,
} from '@ngrx/store';
import { counterReducer } from './mayTinh.reducer'; // <== cần import counterReducer từ file counter.reducer.ts

export interface State {}

export const reducers: ActionReducerMap<State> = {
  counter: counterReducer, // <==== Thêm dòng này
};

export const metaReducers: MetaReducer<State>[] = isDevMode() ? [] : [];
