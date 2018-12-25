import styled from 'styled-components';
import { colors } from '../../../styles/variables';
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-left: ${props =>
    !props.selected ? '5px solid #e7e7e7' : '5px solid #fff'};
  flex: 3;
  padding-left: 0.8rem;
  justify-content: space-around;
  > * {
    align-self: flex-start;
    text-align: left;
    margin: 2px 0;
  }
  h4 {
    text-shadow: 1px 1px rgba(54, 54, 54, 0.08);
  }
`;

export const GroupName = styled.p`
  font-size: 1rem;
  color: ${props =>
    !props.selected ? colors.blackSecondary : colors.blackPrimary};
`;

export const Attending = styled.p`
  font-size: 0.8rem;
  color: ${props =>
    !props.selected ? colors.blackSecondary : colors.blackPrimary};
`;
