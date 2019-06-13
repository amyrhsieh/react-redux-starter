import React from 'react';
import { connect } from 'react-redux';

const Blog = props => (
  <div>
    <h2>Blog</h2>
    <ul>
      {props.entries.map(entry =>
        (<li key={entry.timestamp}>{entry.content}</li>)
      )}
    </ul>
  </div>
);
const mapStateToProps = state => ({
  entries: state.entries
});

const VisibleBlog = connect(
  mapStateToProps
)(Blog);

export default VisibleBlog;
