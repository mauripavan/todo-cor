import styled from 'styled-components';
import {IFilterButtonProps} from './types';

export const FilterItem = styled.div<IFilterButtonProps>`
  background-color: ${({active, filter}) =>
    active === filter.toLowerCase() ? '#ff9500' : ''};
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  padding: 3px 0px;
  border-radius: 50px;
  font-size: 10px;
  cursor: pointer;
  transition: all 150ms ease-in-out;
`;
