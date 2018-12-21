import styled from 'styled-components';

export default styled.div`
  display: block;
  h1 {
    font-size: 3vmin;
    color: ${props => (props.color ? props.color : '#000')};
  }
`;
