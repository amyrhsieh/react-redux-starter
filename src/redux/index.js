import { createStore, combineReducers } from 'redux';
import eventReducer from './event';
import entryReducer from './entry';

const initialState = {
  events: [
    {
      id: 1,
      name: "Grand Opening",
      start: 1561982400,
      end: 1561986000,
      location: "Here"
    },
    {
      id: 2,
      name: "Special sale",
      start: 1562068800,
      end: 1562072400,
      location: "There"
    }
  ],
  entries: [
    {
      timestamp: 1560427200,
      content: "Hello world! This is my first blog entry."
    },
    {
      timestamp: 1560513600,
      content: "This is my second blog entry."
    },
  ]
};

export const reducer = combineReducers({
  events: eventReducer,
  entries: entryReducer
});

export const store = createStore(reducer, initialState);
