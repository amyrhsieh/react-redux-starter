import React from 'react';
import { connect } from 'react-redux';

const Events = props => (
  <div>
    Events
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
