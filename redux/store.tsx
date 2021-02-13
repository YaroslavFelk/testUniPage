import { useMemo } from "react";
import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import indexReducer from "./reducers/indexReducer";

let store

export const rootReducer = combineReducers({
    index: indexReducer
});

export type RootState = ReturnType<typeof rootReducer>

function initStore(preloadedState = {}){
    return createStore(
        rootReducer,
        preloadedState,
        composeWithDevTools(applyMiddleware())
    )
}

export const initializeStore = (preloadedState) => {
    let _store = store ?? initStore(preloadedState)

    if( preloadedState && store ){
        _store = initStore({
            ...store.getState(),
            ...preloadedState
        })

        store = undefined
    }

    if (typeof window === 'undefined') return _store
    if( !store ) store = _store

    return _store
}

export function useStore( initialState ){
    return useMemo(() => initializeStore(initialState), [initialState])
}