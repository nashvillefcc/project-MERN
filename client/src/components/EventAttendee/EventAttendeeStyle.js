import styled from 'styled-components';
import { colors } from '../../styles/variables';

export default styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid gray;
  border-radius: 3px;
  min-height: 10rem;
  padding: 0.5rem 0;
  margin: 0.5rem 0;
  width: 17.5%;
  box-shadow: 1px 1px rgba(54, 54, 54, 0.1);
  > div {
    margin: 0.5rem;
    text-align: center;
    img {
      border-radius: 50%;
    }
    p {
      font-size: 0.7rem;
      margin: 0.3rem 0;
    }
    p:nth-child(-n + 2) {
      font-weight: bold;
      font-size: 0.9rem;
    }
  }
`;
