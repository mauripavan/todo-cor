import * as React from 'react';
import {useRecoilState} from 'recoil';
import {TrashIcon} from '@heroicons/react/24/solid';
import {icons} from '../../assets/icons';
import {
  modalState,
  selectedTodoItem,
  todoListState,
} from '../../store/app-state';
import {Todo} from '../TodoList/types';
import {
  Checkmark,
  CheckmarkWrapper,
  ItemPriority,
  ItemState,
  ItemTitle,
  MainWrapper,
  NoCheckmark,
  Separator,
  SubWrapper,
} from './styles';

const TodoItem = (item: Todo) => {
  const {check} = icons;
  const {title, id, completed, state, priority} = item;
  const [, setSelectedTodoItem] = useRecoilState<Todo | undefined>(
    selectedTodoItem,
  );
  const [, setModalState] = useRecoilState<boolean>(modalState);

  const handleTodoItemClick = () => {
    setSelectedTodoItem(item);
    setModalState(true);
  };

  const [todos, setTodos] = useRecoilState(todoListState);

  const handleSetCompleted = (id: number) => {
    const updatedList = todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed,
          state: !todo.completed ? '' : 'new',
        };
      }
      return todo;
    });
    setTodos(updatedList);
  };

  const handleDelete = (id: number) => {
    const updatedList = todos.filter((todo) => todo.id !== id);
    setTodos(updatedList);
  };

  return (
    <MainWrapper completed={completed} onClick={handleTodoItemClick}>
      <SubWrapper>
        {completed ? (
          <CheckmarkWrapper onClick={() => handleSetCompleted(id)}>
            <Checkmark src={check} />
          </CheckmarkWrapper>
        ) : (
          <NoCheckmark onClick={() => handleSetCompleted(id)} />
        )}
        <ItemTitle completed={completed}>{title}</ItemTitle>
        <ItemState state={state}>{state.toUpperCase()}</ItemState>
        {state && priority && <Separator>-</Separator>}
        <ItemPriority priority={priority}>{priority}</ItemPriority>
      </SubWrapper>
      <TrashIcon
        onClick={() => handleDelete(id)}
        style={{height: '1.2em', width: '1.2em', color: 'white'}}
      />
    </MainWrapper>
  );
};

export default TodoItem;
