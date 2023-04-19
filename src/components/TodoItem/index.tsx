import * as React from 'react';
import {useRecoilState} from 'recoil';
import {icons} from '../../assets/icons';
import {todoListState} from '../../store/app-state';
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
  const {title, id, completed} = props;

  const [todos, setTodos] = useRecoilState(todoListState);

  const handleSetCompleted = (id: number) => {
    const updatedList = todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed,
        };
      }
      console.log(todo);
      return todo;
    });
    setTodos(updatedList);
  };

  const handleDelete = (id: number) => {
    const updatedList = todos.filter((todo) => todo.id !== id);
    setTodos(updatedList);
  };

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
