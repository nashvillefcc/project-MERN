import React from 'react';
import PropTypes from 'prop-types';

import Wrapper from './RightSectionStyle';
function RightSection(props) {
  return <Wrapper>{props.children}</Wrapper>;
}

RightSection.propTypes = {};

export default RightSection;
