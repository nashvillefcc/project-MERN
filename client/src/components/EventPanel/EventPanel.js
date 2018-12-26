import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper, EventPanelSummary } from './EventPanelStyle';
import Connections from '../Helpers/Connections/Connections';
import EventPanelAttending from './EventPanelAttending';

function EventPanel({ event }) {
  return (
    <Wrapper>
      <EventPanelSummary>
        <Connections fontSize="2.2rem" align="left">
          10
        </Connections>
        <header>
          <h1>Title of Event</h1>
          <p>by Group Name Here</p>
        </header>
        <div>
          <p>
            Event Summary. this is the stroy fo us and whe we da'ys type. lorem
            ssoi asdf dfd dj djd hsj d dfsj d jd ksj df d Event Summary. this is
            the stroy fo us and whe we da'ys type. lorem ssoi asdf dfd dj djd
            hsj d dfsj d jd ksj df d Event Summary. this is the stroy fo us and
            whe we da'ys type. lorem ssoi asdf dfd dj djd hsj d dfsj d jd ksj df
            d{' '}
          </p>
        </div>
      </EventPanelSummary>
      <EventPanelAttending />
    </Wrapper>
  );
}

Event.propTypes = {};

export default EventPanel;
