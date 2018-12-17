import styled from 'styled-components';

export default styled.div`
  display: flex;
  justify-content: center;
  form {
    position: relative;
    height: 2.5rem;
    width: 80%;
    * {
      position: absolute;
      top: 0;
      bottom: 0;
    }
    input {
      left: 0;
      width: 80%;
      border-radius: 4px;
      border: 1px solid #cfc6c6;
      font-size: 1.8rem;
      padding-left: 1rem;
    }
    button {
      right: 0;

      width: 20%;
      border: 1px solid #bdbdbd;
    }
  }
`;
