import React, { Component } from 'react';
import GlobalStyles from '../../styles/globalStyles';
import Events from '../Events';
import NavBar from '../NavBar';
import Wrapper from './AppStyle';

class App extends Component {
  render() {
    return (
      <Wrapper>
        <GlobalStyles />
        <NavBar />
        <Events />
      </Wrapper>
    );
  }
}

export default App;
