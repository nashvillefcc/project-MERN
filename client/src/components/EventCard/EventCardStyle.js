import styled from 'styled-components';
import { colors } from '../../styles/variables';

export default styled.div`
  width: 100%;
  background-color: ${props =>
    !props.selected ? '#fff' : colors.graySecondary};
  display: flex;
  min-height: 6rem;
  border-bottom: ${props =>
    !props.selected ? '1px solid #bebdbd' : '3px solid #bebdbd'};

  margin-top: 5px;
  box-shadow: 0px 1px rgba(54, 54, 54, 0.08);
`;
