import styled from 'styled-components';
import { colors } from '../../styles/variables';

export default styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid gray;
  border-radius: 3px;
  min-height: 10rem;
  padding: 0 0 0.5rem;
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
      line-height: 1.2rem;
    }
    p:nth-child(-n + 2) {
      font-weight: bold;
      font-size: 0.9rem;
    }
  }

  &:before {
    content: '';
    height: 0.5rem;
    width: 100%;
    background-color: ${props => (props.connections > 0 ? '#EAC163' : null)};
    border-top-left-radius: 1px;
    border-top-right-radius: 1px;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
  }
`;
