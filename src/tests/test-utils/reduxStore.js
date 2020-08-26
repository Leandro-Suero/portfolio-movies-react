import React from "react";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import { render, fireEvent, cleanup } from "@testing-library/react";
// import "@testing-library/jest-dom/extend-expect";

import rootReducer from "../redux/reducers";
// import rootReducer from "../../../redux/reducers";

const middleware = [thunk];
export function renderWithRedux(
  component,
  {
    initialState,
    store = createStore(
      rootReducer,
      initialState,
      applyMiddleware(...middleware)
    ),
  } = {}
) {
  return {
    ...render(<Provider store={store}>{component}</Provider>),
  };
}
