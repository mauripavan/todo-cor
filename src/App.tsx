import React, {useEffect, useState} from 'react';
import {useRecoilState, useRecoilValue} from 'recoil';

import AddItem from './components/AddItem';
import Filters from './components/Filters';
import Logo from './components/Logo';
import Modal from './components/Modal';
import TodoList from './components/TodoList';
import {Todo} from './components/TodoList/types';
import {
  activeFilterState,
  filteredTodoListState,
  modalState,
  todoListState,
} from './store/app-state';
import {MainContainer, TodoWrapper} from './styles';

const App = () => {
  const todos = useRecoilValue(todoListState);
  const activeFilter = useRecoilValue(activeFilterState);
  const [, setFilteredTodos] = useRecoilState<Todo[]>(filteredTodoListState);
  const modalVisible = useRecoilValue(modalState);
  const [searchTitle, setSearchTitle] = useState('');

  const checkFilters = () => {
    if (activeFilter === 'all') {
      setFilteredTodos(todos);
    } else if (activeFilter === 'completed') {
      const completedTodos = todos.filter((todo) => todo.completed === true);
      setFilteredTodos(completedTodos);
    } else if (activeFilter === 'in progress') {
      const inprogressTodos = todos.filter(
        (todo) => todo.state === 'in progress',
      );
      setFilteredTodos(inprogressTodos);
    } else if (activeFilter === 'new') {
      const newTodos = todos.filter((todo) => todo.state === 'new');
      setFilteredTodos(newTodos);
    }
  };

  useEffect(() => {
    checkFilters();
  }, [activeFilter, todos]);

  return (
    <MainContainer>
      <Logo />
      <TodoWrapper>
        <AddItem searchTitle={searchTitle} setSearchTitle={setSearchTitle} />
        <Filters />
        <TodoList />
      </TodoWrapper>
      {modalVisible && (
        <Modal searchTitle={searchTitle} setSearchTitle={setSearchTitle} />
      )}
    </MainContainer>
  );
};

export default App;
