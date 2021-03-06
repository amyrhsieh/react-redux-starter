import React from 'react';
import { connect } from 'react-redux';

export const Events = props => (
  <div>
    <h2>Events</h2>
    <p>A very basic list of events, sourced from the Redux store.</p>
    <ul>
      {props.events.map(event =>
        (<li key={event.id}>{event.name}</li>)
      )}
    </ul>
  </div>
);

const mapStateToProps = state => ({
  events: state.events
});

const VisibleEvents = connect(
  mapStateToProps
)(Events);

export default VisibleEvents;
