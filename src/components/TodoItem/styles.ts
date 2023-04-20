import styled from 'styled-components';
import {
  ItemPriorityProps,
  ItemProps,
  ItemStateProps,
  ItemTitleProps,
} from './types';

export const MainWrapper = styled.div<ItemProps>`
  cursor: pointer;
  width: 90%;
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
  justify-content: space-between;
  width: 100%;
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
  height: 1.2em;
  width: 1.2em;
  margin-right: 10px;
  border-radius: 50px;
`;

export const ItemTitle = styled.p<ItemTitleProps>`
  color: ${({completed}) => (completed ? 'gray' : '#fff')};
  text-decoration: ${({completed}) => (completed ? 'line-through' : 'none')};
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

export const ItemState = styled.p<ItemStateProps>`
  color: ${({state}) => (state === 'new' ? 'orange' : 'green')};
  margin: 0px 5px;
  font-size: 10px;
`;
export const ItemPriority = styled.p<ItemPriorityProps>`
  color: ${({priority}) =>
    priority === 'high' ? 'red' : priority === 'medium' ? 'pink' : 'lightblue'};
  margin: 0px 5px;
  font-style: italic;
  font-size: 10px;
`;

export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const StateWrapper = styled.div`
  display: flex;
`;
