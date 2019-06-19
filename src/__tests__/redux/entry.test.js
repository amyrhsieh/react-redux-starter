import entryReducer, * as entryModule from 'Redux/entry';
import entries from 'Mocks/entriesMock';

/*** Action creator tests ***/
describe('getAllEntries action creator', () => {
  it('should create an action of type ENTRY_GET_ALL', () => {
    const action = entryModule.getAllEntries();
    expect(action.type).toEqual(entryModule.ENTRY_GET_ALL);
  });
});

describe('createEntry action creator', () => {
  it('should create an action of type ENTRY_CREATE with entry', () => {
    const action = entryModule.createEntry();
    expect(action.type).toEqual(entryModule.ENTRY_CREATE);
    expect(action.entry.content).toMatch(/New entry at/);
    expect(action.entry.timestamp).toBeGreaterThan(0);
  });
});

/*** Reducer tests ***/

describe('entryReducer', () => {
  it('when action is ENTRY_GET_ALL, returns state', () => {
    const result = entryReducer(entries, entryModule.getAllEntries());
    expect(result).toEqual(entries);
  });

  it('when action is ENTRY_CREATE, adds new entry to state', () => {
    const originalLength = entries.length;
    const result = entryReducer(entries, entryModule.createEntry());
    expect(result.length).toEqual(originalLength + 1);
  });
});
