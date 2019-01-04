import styled from 'styled-components';
export default styled.div`
  flex: ${props => (props.fullWidth ? 1 : null)};
  display: flex;
  flex-direction: column;
  // justify-content: space-between;
  width: 60%;
  margin: 0 auto;
  text-align: center;
`;
