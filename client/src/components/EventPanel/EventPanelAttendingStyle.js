import styled from 'styled-components';
import { colors } from '../../styles/variables';

export default styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${colors.whiteSecondary};
  min-height: 40%;
  > div {
    padding: 1rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  &:before {
    content: '';
    width: 100%;
    height: 1rem;
    background-color: ${colors.thirdColor};
  }
`;
