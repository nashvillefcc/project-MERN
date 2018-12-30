import styled from 'styled-components';
import { colors } from '../../styles/variables';

export const Wrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: ${colors.graySecondary};
  padding: 1rem;
  &:before {
    content: '';
    width: 100%;
    height: 1rem;
    background-color: ${colors.primaryColor};
  }
`;

export const EventPanelSummary = styled.div`
  background-color: ${colors.whiteSecondary};
  display: flex;
  flex-direction: column;
  min-height: 40%;
  & p:first-child {
    //margin for Connections Component
    margin: 1rem;
  }
  header {
    margin: 0 1rem;
    h1 {
      color: ${colors.blackPrimary};
      margin: 0;
    }
    p {
      color: ${colors.grayPrimary};
    }
  }
  div {
    margin: 0 auto;

    p {
      background-color: ${colors.graySecondary};
      color: ${colors.blackPrimary}
      padding: 0.5rem;
    }
  }
`;
