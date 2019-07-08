import React from 'react';
import Logo from '../Helpers/Logo';
import Wrapper from './NavBarStyle';

function NavBar() {
  const handleLogin = async () => {
    const response = await window
      .fetch('/login')
      .then(res => res.json())
      .catch(err => console.log(err));
    if (response.status === 301) {
      window.location = response.redirect;
    }
  };
  return (
    <Wrapper>
      <div>
        <Logo />
        <span>
          <button onClick={handleLogin}>Login</button>
        </span>
      </div>
    </Wrapper>
  );
}

export default NavBar;
