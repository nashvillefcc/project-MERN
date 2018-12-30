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
`;
