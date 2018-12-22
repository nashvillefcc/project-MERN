import styled from 'styled-components';
export default styled.div`
  display: flex;
  flex-direction: column;
  border-left: 5px solid #e7e7e7;
  flex: 3;
  padding-left: 0.8rem;
  justify-content: space-around;
  > * {
    align-self: flex-start;
    text-align: left;
    margin: 2px 0;
  }
  p {
    font-size: 0.8rem;
  }
`;
