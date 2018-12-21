import React from 'react';
import PropTypes from 'prop-types';

import Wrapper from './HeadingStyle';

function Heading({ children, color }) {
  return (
    <Wrapper color={color}>
      <h1>{children}</h1>
    </Wrapper>
  );
}

Heading.propTypes = {
  children: PropTypes.string.isRequired
};

export default Heading;
