import styled from 'styled-components';
import { colors } from '../../../styles/variables';

export default styled.div`
  display: flex;
  align-self: center;
  justify-content: center;
  flex: 1;
  color: ${colors.secondaryColor};
  font-weight: bold;
  font-weight: bold;
  font-size: 1.5rem;
  &:after {
    content: '🦄';
    position: relative;
    left: 5px;
  }
`;
