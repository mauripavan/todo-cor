import React, {useState} from 'react';

import {AddButton, CustomInput, MainWrapper} from './styles';
import {IAddItemProps} from './types';

const AddItem = (props: IAddItemProps) => {
  const [title, setTitle] = useState('');
  const {addTodo} = props;

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
