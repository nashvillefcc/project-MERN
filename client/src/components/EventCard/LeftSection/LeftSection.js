import React from 'react';
import PropTypes from 'prop-types';

import Wrapper from './LeftSectionStyle';
import Connections from '../../Helpers/Connections/Connections';

function LeftSection({ selected, children }) {
  return (
    <Wrapper>
      {!selected ? null : <span />}
      <Connections>{children}</Connections>
    </Wrapper>
  );
}

LeftSection.propTypes = {
  selected: PropTypes.bool
};

export default LeftSection;
