import styled from 'styled-components';

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: center;
  align-items: center;
  min-height: 20vh;
`;

export const EmptyStateWrapper = styled.div`
  display: flex;
  color: white;
  width: 75px;
  height: 75px;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: rgba(223, 117, 11, 0.1);
  border-radius: 100px;
  font-size: 10px;
  border: 3px solid white;
  padding: 3px;
`;
