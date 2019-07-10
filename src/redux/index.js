import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from "redux-thunk";
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

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(
  reducer,
  initialState,
  composeEnhancers(
    applyMiddleware(thunk)
  )
);
