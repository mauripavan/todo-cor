import * as React from 'react';
import TodoItem from '../TodoItem';
import {EmptyStateWrapper, MainContainer} from './styles';
import {Todo} from './types';

export interface ITodoListProps {
  todos: Todo[];
  handleSetCompleted: (k: number) => void;
  handleDelete: (k: number) => void;
}

const TodoList = (props: ITodoListProps) => {
  const {todos, handleSetCompleted, handleDelete} = props;

  return (
    <MainContainer>
      {!todos[0] ? (
        <EmptyStateWrapper>
          <p>Nothing here yet! </p>
        </EmptyStateWrapper>
      ) : (
        todos.map((todo) => {
          return (
            <TodoItem
              id={todo.id}
              title={todo.title}
              description={todo.description}
              priority={todo.priority}
              state={todo.state}
              completed={todo.completed}
              key={todo.id}
              handleSetCompleted={handleSetCompleted}
              handleDelete={handleDelete}
            />
          );
        })
      )}
    </MainContainer>
  );
};

export default TodoList;
