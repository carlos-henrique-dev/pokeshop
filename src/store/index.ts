import { useMemo } from "react";
import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { combineReducers, compose } from "redux";

import theme, { ThemeState } from "./duck/theme";

export type ReduxState = {
  theme: ThemeState;
};

const reducers = combineReducers({ theme });

let store: any;

const composeEnhancers =
  (typeof window !== "undefined" && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

function initiStore(initialState: ReduxState) {
  return createStore(reducers, initialState, composeEnhancers(applyMiddleware(thunkMiddleware)));
}

export const initializeStore = (preloadedState: ReduxState) => {
  let _store = store ?? initiStore(preloadedState);

  // after navigating to a page with an initial redux state, merge that state
  // with the current state in the store, and create a new store
  if (preloadedState && store) {
    _store = initiStore({ ...store.getState(), ...preloadedState });

    // reset the current state
    store = undefined;
  }

  // for server ssg(server side generation) and ssr(server side rendering)
  // always create a new store
  if (typeof window === "undefined") return _store;
  // create the store once in the client
  if (!store) store = _store;

  return _store;
};

export function useStore(initialState: ReduxState) {
  const store = useMemo(() => initializeStore(initialState), [initialState]);
  return store;
}
