import React from 'react';
import PropTypes from 'prop-types';

import Wrapper from './CenterSectionStyle';
function CenterSection(props) {
  return <Wrapper>{props.children}</Wrapper>;
}

CenterSection.propTypes = {};

export default CenterSection;
