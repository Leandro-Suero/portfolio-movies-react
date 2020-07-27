import { ACTION1, ACTION2 } from "../actionTypes";

const initialState = {};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case ACTION1:
      return { ...state, ...payload };
    case ACTION2:
      return { ...state, ...payload };

    default:
      return state;
  }
};
