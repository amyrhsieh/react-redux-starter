/*** Example of action and reducer Redux code for an Entry item ***/
/*** e.g. for display of blog entries                           ***/

/* Action types */
export const ENTRY_GET_ALL = "ENTRY_GET_ALL";
export const ENTRY_CREATE = "ENTRY_CREATE";

/* Reducers */
export default function entryReducer(state = [], action = {}) {
  switch (action.type) {
    //Get all events
    case ENTRY_GET_ALL:
      return state;
    case ENTRY_CREATE:
      return [...state, action.entry];
    default:
      return state;
  }
}

/* Action creators */
export const getAllEntries = () => ({ type: ENTRY_GET_ALL });

export const createEntry = () => {
  const timestamp = new Date();
  const entry = {
    timestamp: timestamp/1000,
    content: `New entry at ${timestamp.toISOString()}`
  }
  return {
    type: ENTRY_CREATE,
    entry
  }
}
