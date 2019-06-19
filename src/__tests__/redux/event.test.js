import eventReducer, * as eventModule from 'Redux/event';
import events from 'Mocks/eventsMock';

/*** Action creator tests ***/
describe('getAllEvents action creator', () => {
  it('should create an action of type EVENT_GET_ALL', () => {
    const action = eventModule.getAllEvents();
    expect(action.type).toEqual(eventModule.EVENT_GET_ALL);
  });
});

/*** Reducer tests ***/

describe('eventReducer', () => {
  it('when action is EVENT_GET_ALL, returns state', () => {
    const result = eventReducer(events, eventModule.getAllEvents());
    expect(result).toEqual(events);
  });
});
