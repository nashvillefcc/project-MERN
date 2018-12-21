import React from 'react';
import PropTypes from 'prop-types';

import Wrapper from './LeftSectionStyle';
function LeftSection(props) {
  return <Wrapper>{props.children}</Wrapper>;
}

LeftSection.propTypes = {};

export default LeftSection;
