import { createStore, combineReducers } from 'redux';
import eventReducer from './event';
import entryReducer from './entry';
import entries from 'Mocks/entryMock';
import events from 'Mocks/eventMock';

const initialState = {
  events,
  entries
};

export const reducer = combineReducers({
  events: eventReducer,
  entries: entryReducer
});

export const store = createStore(reducer, initialState);
