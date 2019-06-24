import React from 'react';
import { connect } from 'react-redux';
import { createEntry } from 'Redux/entry';
import EntryForm from './EntryForm';

export const Blog = ({entries, dispatchCreateEntry}) => (
  <div>
    <h2>Blog</h2>
    <ul>
      {entries.map(entry =>
        (<li key={entry.timestamp}>{entry.content}</li>)
      )}
    </ul>
    <EntryForm onSubmit={dispatchCreateEntry} />
  </div>
);

const mapStateToProps = state => ({
  entries: state.entries
});

const mapDispatchToProps = dispatch => {
  return {
    dispatchCreateEntry: (values) => {
      const entry = {
        content: values.content,
        timestamp: Date.now()
      }
      dispatch(createEntry(entry));
    }
  }
}

const VisibleBlog = connect(
  mapStateToProps,
  mapDispatchToProps
)(Blog);

export default VisibleBlog;
