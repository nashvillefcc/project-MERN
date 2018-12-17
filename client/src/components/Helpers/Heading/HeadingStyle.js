import styled from 'styled-components';

export default styled.div`
  display: block;
  h1 {
    color: ${props => (props.color ? props.color : '#000')};
  }
`;
