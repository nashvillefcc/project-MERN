import styled from 'styled-components';
import { colors } from '../../../styles/variables';

export default styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  p {
    font-size: 0.9rem;
    color: ${props =>
      !props.selected ? colors.blackSecondary : colors.blackPrimary};
    margin: 0.6rem 0 0;
  }
`;
