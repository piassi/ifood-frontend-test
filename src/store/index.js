import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { playlists } from './modules/playlists/reducer';
import { filters } from './modules/filters/reducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export function store() {
  return createStore(
    combineReducers({
      playlists,
      filters,
    }),
    composeEnhancers(applyMiddleware(thunk))
  );
}
