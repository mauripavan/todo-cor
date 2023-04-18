import styled from 'styled-components';

export const MainWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 70%;
  margin: 0px auto;
  border-radius: 10px;
  margin-top: 10px;
  padding: 5px 10px;
  background-color: #44446b;
  border: 1px solid #41449f61;
`;

export const SubWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const Checkmark = styled.span`
  border: 1px solid gray;
  border-radius: 100px;
  height: 1.2em;
  width: 1.2em;
  margin-right: 10px;
  background-color: white;
`;

export const TrashIcon = styled.img`
  width: 1em;
  height: 1em;
`;
