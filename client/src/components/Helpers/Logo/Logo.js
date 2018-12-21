import React from 'react';

import Wrapper from './LogoStyle';
import fullLogo from '../../../resources/logo.png';

function Logo() {
  return (
    <Wrapper>
      <img src={fullLogo} alt="logo" />
    </Wrapper>
  );
}

export default Logo;
