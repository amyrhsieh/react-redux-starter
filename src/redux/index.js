import { createStore, combineReducers } from 'redux';
import eventReducer from './event';
import entryReducer from './entry';
import entries from 'Mocks/entriesMock';
import events from 'Mocks/eventsMock';

const initialState = {
  events,
  entries
};

export const reducer = combineReducers({
  events: eventReducer,
  entries: entryReducer
});

export const store = createStore(reducer, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
