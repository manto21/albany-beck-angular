import { createReducer, on } from '@ngrx/store';
import { addRegion } from './region.actions';

export const initialState = [{name: "Europe", value:"europe"}, {name: "Asia", value: "asia"}];

export const regionReducer = createReducer(
  initialState,
  on(addRegion, (state) => state)
);