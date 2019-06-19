import React from 'react';
import { connect } from 'react-redux';
import { createEntry } from '../redux/entry';

export const Blog = ({entries, onAddEntryClick}) => (
  <div>
    <h2>Blog</h2>
    <ul>
      {entries.map(entry =>
        (<li key={entry.timestamp}>{entry.content}</li>)
      )}
    </ul>
    <button type="button" className="btn btn-outline-primary" onClick={() => onAddEntryClick()}>Add entry</button>
  </div>
);

const mapStateToProps = state => ({
  entries: state.entries
});

const mapDispatchToProps = dispatch => {
  return {
    onAddEntryClick: () => {
      dispatch(createEntry())
    }
  }
}

const VisibleBlog = connect(
  mapStateToProps,
  mapDispatchToProps
)(Blog);

export default VisibleBlog;
