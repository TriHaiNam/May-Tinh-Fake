import { createReducer, on } from '@ngrx/store';
import { congSo, truSo, nhanSo, chiaSo, reset } from '../counter.action';

export const initialState = 0;

export const counterReducer = createReducer(
  initialState,
  on(congSo, (state, { soA, soB }) => soA + soB),
  on(truSo, (state, { soA, soB }) => soA - soB),
  on(nhanSo, (state, { soA, soB }) => soA * soB),
  on(chiaSo, (state, { soA, soB }) => soA / soB),
  on(reset, () => initialState),
);
