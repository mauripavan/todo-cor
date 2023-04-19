import React, {useEffect, useState} from 'react';

import AddItem from './components/AddItem';
import Filters from './components/Filters';
import Logo from './components/Logo';
import TodoList from './components/TodoList';
import {Todo} from './components/TodoList/types';
import {MainContainer, TodoWrapper} from './styles';

const App = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const [activeFilter, setActiveFilter] = useState('all');
  const [filteredTodos, setFilteredTodos] = useState<Todo[]>(todos);

  const addTodo = (title: string) => {
    const lastId = todos.length > 0 ? todos[todos.length - 1].id : 1;

    const newTodo = {
      id: lastId + 1,
      title,
      description: '',
      priority: '',
      state: 'new',
      completed: false,
    };

    const todoList = [...todos];
    todoList.push(newTodo);
    setTodos(todoList);
  };

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

  const showAllTodos = () => {
    setActiveFilter('all');
  };

  const showInProgressTodos = () => {
    setActiveFilter('in progress');
  };

  const showCompletedTodos = () => {
    setActiveFilter('completed');
  };

  const showNewTodos = () => {
    setActiveFilter('new');
  };

  const handleClearCompleted = () => {
    const updatedList = todos.filter((todos) => !todos.completed);
    setTodos(updatedList);
  };

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
        <AddItem addTodo={addTodo} />
        <Filters
          showAllTodos={showAllTodos}
          showInProgressTodos={showInProgressTodos}
          showCompletedTodos={showCompletedTodos}
          showNewTodos={showNewTodos}
          handleClearCompleted={handleClearCompleted}
          activeFilter={activeFilter}
        />
        <TodoList
          todos={filteredTodos}
          handleSetCompleted={handleSetCompleted}
          handleDelete={handleDelete}
        />
      </TodoWrapper>
    </MainContainer>
  );
};

export default App;
