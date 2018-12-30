import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper, EventPanelSummary } from './EventPanelStyle';
import Connections from '../Helpers/Connections/Connections';
import EventPanelAttending from './EventPanelAttending';

function EventPanel({ event }) {
  const { attending, date, time, name, eventName } = event;
  const linkedMembers = attending.filter(member => member.connections > 0);
  return (
    <Wrapper>
      <EventPanelSummary>
        <Connections fontSize="2.2rem" align="left">
          {linkedMembers.length}
        </Connections>
        <header>
          <h1>{eventName}</h1>
          <p>{name}</p>
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
      <EventPanelAttending attending={attending} />
    </Wrapper>
  );
}

Event.propTypes = {};

export default EventPanel;
