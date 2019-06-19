/*** Example of action and reducer Redux code for an Event item ***/
/*** e.g. for display a list of events, or a calendar           ***/

/* Action types */
export const EVENT_GET_ALL = "EVENT_GET_ALL";

/* Reducers */
export default function eventReducer(state = [], action = {}) {
  switch (action.type) {
    //Get all events
    case EVENT_GET_ALL:
      return state;
    default:
      return state;
  }
}

/* Action creators */
export const getAllEvents = () => ({ type: EVENT_GET_ALL });
