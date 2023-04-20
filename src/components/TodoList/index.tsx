import * as React from 'react';
import {useRecoilValue} from 'recoil';
import {filteredTodoListState} from '../../store/app-state';
import TodoItem from '../TodoItem';
import {EmptyStateWrapper, MainContainer} from './styles';
import {Todo} from './types';

const TodoList = () => {
  const filteredTodos = useRecoilValue<Todo[]>(filteredTodoListState);
  return (
    <MainContainer>
      {!filteredTodos[0] ? (
        <EmptyStateWrapper>
          <p>Nothing here yet! </p>
        </EmptyStateWrapper>
      ) : (
        filteredTodos.map((todo) => {
          return (
            <TodoItem
              id={todo.id}
              title={todo.title}
              description={todo.description}
              priority={todo.priority}
              state={todo.state}
              completed={todo.completed}
              key={todo.id}
            />
          );
        })
      )}
    </MainContainer>
  );
};

export default TodoList;
