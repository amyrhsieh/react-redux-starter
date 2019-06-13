import { createStore } from 'redux';
import eventReducer from './event';

export const store = createStore(eventReducer);
