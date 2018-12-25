import styled from 'styled-components';
import { colors } from '../../../styles/variables';

export default styled.div`
  display: flex;
  flex: 1;
  span {
    content: '';
    width: 0.5rem;
    background-color: ${colors.thirdColor};
    height: 100%;
  }
  p {
    align-self: center;
    margin: 0 auto;
    color: ${colors.secondaryColor};
    font-weight: bold;
    font-weight: bold;
    font-size: 1.5rem;
    &:after {
      content: '🦄';
      position: relative;
      left: 5px;
      align-self: center;
    }
  }
`;
