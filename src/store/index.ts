import { useMemo } from "react";
import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { combineReducers, compose } from "redux";

import { loadState, saveState } from "../lib/localStorage";

import theme, { ThemeState } from "./duck/theme";
import pokedex, { PokedexState } from "./duck/pokedex";

export type ReduxState = {
  theme: ThemeState;
  pokedex: PokedexState;
};

const reducers = combineReducers({ theme, pokedex });

let store: any;

const composeEnhancers =
  (typeof window !== "undefined" && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

function initiStore(initialState: ReduxState) {
  let initial = initialState;

  if (process.browser) {
    const persistedState = loadState();
    if (persistedState) {
      initial = persistedState;
    }
  }
  return createStore(reducers, initial, composeEnhancers(applyMiddleware(thunkMiddleware)));
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

  store.subscribe(() => {
    saveState({
      pokedex: store.getState().pokedex,
    });
  });
  return store;
}
