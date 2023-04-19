import * as React from 'react';
import {icons} from '../../assets/icons';
import {Todo} from '../TodoList/types';
import {
  Checkmark,
  CheckmarkWrapper,
  ItemTitle,
  MainWrapper,
  NoCheckmark,
  SubWrapper,
  TrashIcon,
} from './styles';

const TodoItem = (props: Todo) => {
  const {trash, check} = icons;
  const {title, handleSetCompleted, id, completed, handleDelete} = props;

  return (
    <MainWrapper completed={completed}>
      <SubWrapper>
        {completed ? (
          <CheckmarkWrapper onClick={() => handleSetCompleted(id)}>
            <Checkmark src={check} />
          </CheckmarkWrapper>
        ) : (
          <NoCheckmark onClick={() => handleSetCompleted(id)} />
        )}
        <ItemTitle completed={completed}>{title}</ItemTitle>
      </SubWrapper>
      <TrashIcon src={trash} onClick={() => handleDelete(id)} />
    </MainWrapper>
  );
};

export default TodoItem;
