import styled from 'styled-components';

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  height: 100%;
  background-color: #31315c;
  font-family: monospace;
`;

export const TodoWrapper = styled.div`
  background-color: #31315c;
  width: 50vw;
  border-radius: 10px;
  @media (max-width: 788px) {
    width: 90vw;
  }
`;
