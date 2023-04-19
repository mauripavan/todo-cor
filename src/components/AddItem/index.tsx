import React, {useState} from 'react';
import {useRecoilState} from 'recoil';
import {todoListState} from '../../store/app-state';

import {AddButton, CustomInput, MainWrapper} from './styles';

const AddItem = () => {
  const [title, setTitle] = useState('');
  const [todos, setTodos] = useRecoilState(todoListState);

  const handleAddItem = () => {
    title && addTodo(title);
    setTitle('');
  };

  const handleKeyDown = (e: any) => {
    if (e.keyCode === 13 && title) {
      addTodo(title);
      setTitle('');
    }
  };

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

  return (
    <MainWrapper>
      <CustomInput
        type="text"
        placeholder="What's next?"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        onKeyDown={handleKeyDown}
      />
      <AddButton onClick={handleAddItem}>+</AddButton>
    </MainWrapper>
  );
};

export default AddItem;
