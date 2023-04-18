import React from 'react';

import AddItem from './components/AddItem';
import Logo from './components/Logo';
import TodoItem from './components/TodoItem';
import {MainContainer, TodoWrapper} from './styles';

const App = () => {
  return (
    <MainContainer>
      <Logo />
      <TodoWrapper>
        <AddItem />
        <TodoItem />
        <TodoItem />
        <TodoItem />
        <TodoItem />
        <TodoItem />
        <TodoItem />
        <TodoItem />
        <TodoItem />
      </TodoWrapper>
    </MainContainer>
  );
};

export default App;
