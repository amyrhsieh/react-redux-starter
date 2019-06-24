import React from 'react';
import { connect } from 'react-redux';
import { createEntry } from 'Redux/entry';
import EntryForm from './EntryForm';

import styles from 'Styles/styles.scss';

export const Blog = ({entries, dispatchCreateEntry}) => (
  <div>
    <h2>Blog</h2>
    <p>
      A very simple blog demo that displays blog entries from the Redux store. Includes form (React Final Form) to add new entries.
    </p>
    <p className="bold">Blog Entries</p>
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
