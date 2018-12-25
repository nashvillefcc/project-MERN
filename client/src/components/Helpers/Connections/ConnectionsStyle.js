import styled from 'styled-components';
import { colors } from '../../../styles/variables';

export default styled.p`
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
`;
