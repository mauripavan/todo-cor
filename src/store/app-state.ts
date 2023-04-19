import {atom} from 'recoil';
import {Todo} from '../components/TodoList/types';

export const todoListState = atom<Todo[]>({
  key: 'TodoListState',
  default: [],
});

export const activeFilterState = atom<string>({
  key: 'ActiveFilterState',
  default: 'all',
});

export const filteredTodoListState = atom<Todo[]>({
  key: 'FilteredTodoListState',
  default: [],
});
