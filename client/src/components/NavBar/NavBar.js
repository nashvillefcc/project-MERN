import React from 'react';
import Logo from '../Helpers/Logo';

import Wrapper from './NavBarStyle';
function NavBar() {
  return (
    <Wrapper>
      <div>
        <Logo />
        <span>Login</span>
      </div>
    </Wrapper>
  );
}

export default NavBar;
