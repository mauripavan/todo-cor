import styled from 'styled-components';

export const MainWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

export const FilterBarWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 50%;
  height: 1.5em;
  border-radius: 50px;
  padding: 3px 0px;
  border: 1px solid white;
  background-color: rgba(223, 117, 11, 0.1);
`;

export const ClearButtonWrapper = styled.div`
  color: yellow;
  display: flex;
  flex-direction: column;
  cursor: pointer;
`;
