import React, { Component } from 'react';
import GlobalStyles from '../../styles/globalStyles';
import NavBar from '../NavBar';

import Wrapper from './AppStyle';

class App extends Component {
  render() {
    return (
      <Wrapper>
        <GlobalStyles />
        <NavBar />
      </Wrapper>
    );
  }
}

export default App;
