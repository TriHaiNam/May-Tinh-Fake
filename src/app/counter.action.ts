import { createAction, props } from '@ngrx/store';

export const congSo = createAction(
  '[Counter Component] congSo',
  props<{ soA: number; soB: number }>(),
);
export const truSo = createAction(
  '[Counter Component] truSo',
  props<{ soA: number; soB: number }>(),
);
export const nhanSo = createAction(
  '[Counter Component] nhanSo',
  props<{ soA: number; soB: number }>(),
);
export const chiaSo = createAction(
  '[Counter Component] chiaSo',
  props<{ soA: number; soB: number }>(),
);
export const reset = createAction('[Counter Component] Reset');
