import styled from 'styled-components';
import { colors } from '../../../styles/variables';

export default styled.p`
  align-self: ${props => (!props.align ? 'center' : props.align)}
  margin: 0 auto;
  color: ${colors.secondaryColor};
  font-weight: bold;
  font-size: ${props => (!props.fontSize ? '1.5rem' : props.fontSize)}
  &:after {
    content: '🦄';
    position: relative;
    left: 5px;
    align-self: center;
  }
`;
