import styled from 'styled-components';

export type ItemProps = {
  completed?: boolean;
};

export const MainWrapper = styled.div<ItemProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 70%;
  margin: 0px auto;
  border-radius: 10px;
  margin-top: 10px;
  padding: 5px 10px;
  background-color: ${({completed}) =>
    completed ? 'rgba(68, 68, 107, 0.5)' : 'rgba(68, 68, 107, 1)'};
  border: 1px solid #41449f61;
`;

export const SubWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const NoCheckmark = styled.span`
  border: 1px solid gray;
  border-radius: 100px;
  height: 1.2em;
  width: 1.2em;
  margin-right: 10px;
  background-color: white;
`;

export const Checkmark = styled.img`
  height: 100%;
  width: 100%;
`;

export const CheckmarkWrapper = styled.div`
  border: 1px solid gray;
  border-radius: 100px;
  height: 1.2em;
  width: 1.2em;
  margin-right: 10px;
  background-color: red;
`;

export const TrashIcon = styled.img`
  width: 1em;
  height: 1em;
`;

export const ItemTitle = styled.p<ItemProps>`
  color: ${({completed}) => (completed ? 'gray' : '#fff')};
  text-decoration: ${({completed}) => (completed ? 'line-through' : 'none')};
`;
