import * as React from 'react';
import {icons} from '../../assets/icons';
import {Checkmark, MainWrapper, SubWrapper, TrashIcon} from './styles';

export interface ITodoItemProps {
  title?: string;
  description?: string;
  state?: string;
  priority?: string;
}

const TodoItem = () => {
  const {trash} = icons;
  return (
    <MainWrapper>
      <SubWrapper>
        <Checkmark />
        <p style={{color: 'white'}}>{'Todo Item'}</p>
      </SubWrapper>
      <TrashIcon src={trash} />
    </MainWrapper>
  );
};

export default TodoItem;
