import React from 'react';
import PropTypes from 'prop-types';

import Wrapper from './LeftSectionStyle';
function LeftSection({ selected, children }) {
  return (
    <Wrapper>
      {!selected ? null : <span />}
      <p>{children}</p>
    </Wrapper>
  );
}

LeftSection.propTypes = {
  selected: PropTypes.bool
};

export default LeftSection;
