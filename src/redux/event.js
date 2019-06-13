/*** Example of action and reducer Redux code for an Event item ***/
/*** e.g. for display a list of events, or a calendar           ***/

/* Action types */
export const EVENT_CREATE = "EVENT_CREATE";
export const EVENT_UPDATE = "EVENT_UPDATE";
export const EVENT_DELETE = "EVENT_DELETE";
export const EVENT_GET = "EVENT_GET";
export const EVENT_GET_ALL = "EVENT_GET_ALL";

/* States */
const initialState = {};
const allEventsState = {
  events: [
    {
      name: "Grand Opening",
      start: 1561982400,
      end: 1561986000,
      location: "Here"
    },
    {
      name: "Special sale",
      start: 1562068800,
      end: 1562072400,
      location: "There"
    }
  ]
};

/* Reducers */
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    //Get all events
    case EVENT_GET_ALL:
      return allEventsState;
    default:
      return state;
  }
}

/* Action creators */
export const getAllEvents = event => { type: EVENT_GET_ALL, event }
