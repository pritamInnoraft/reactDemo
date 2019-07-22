import { DEFAULT } from "./types";

export const initialState = {
  msg : ''
};

export function defaultReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT:
      return {...state, msg: 'Reducer called'}
    default:
      return state;
  }
}