import { createStore } from 'redux';
import eventReducer from './event';

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
  ]
};

export const store = createStore(eventReducer, initialState);
