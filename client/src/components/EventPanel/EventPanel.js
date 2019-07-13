import React from 'react';
import Connections from '../Helpers/Connections/Connections';
import EventPanelAttending from './EventPanelAttending';
import { EventPanelSummary, Wrapper } from './EventPanelStyle';

function EventPanel({ event }) {
  const {
    attending,
    date,
    time,
    name: groupName,
    eventName,
    description
  } = event;
  const linkedMembers = attending.filter(member => member.connections > 0);
  return (
    <Wrapper>
      <EventPanelSummary>
        <Connections fontSize="2.2rem" align="left">
          {linkedMembers.length}
        </Connections>
        <header>
          <h1>{eventName}</h1>
          <p>{groupName}</p>
        </header>
        <div>
          <p>{description}</p>
        </div>
      </EventPanelSummary>
      <EventPanelAttending attending={attending} />
    </Wrapper>
  );
}

Event.propTypes = {};

export default EventPanel;
