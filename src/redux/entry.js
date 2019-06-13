/*** Example of action and reducer Redux code for an Entry item ***/
/*** e.g. for display of blog entries           ***/

/* Action types */
export const ENTRY_CREATE = "ENTRY_CREATE";
export const ENTRY_UPDATE = "ENTRY_UPDATE";
export const ENTRY_DELETE = "ENTRY_DELETE";
export const ENTRY_GET = "ENTRY_GET";
export const ENTRY_GET_ALL = "ENTRY_GET_ALL";

/* Reducers */
export default function reducer(state = [], action = {}) {
  switch (action.type) {
    //Get all events
    case ENTRY_GET_ALL:
      return state;
    default:
      return state;
  }
}

/* Action creators */
export const getAllEvents = event => { type: ENTRY_GET_ALL, event }
