import React from 'react';
import Wrapper from './ConnectionsStyle';

function Connections({ children, fontSize, align }) {
  return (
    <Wrapper fontSize={fontSize} align={align}>
      {children}
    </Wrapper>
  );
}

export default Connections;
