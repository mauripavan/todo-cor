import * as React from 'react';

import {AddButton, CustomInput, MainWrapper} from './styles';

const AddItem = () => {
  const handleAddItem = () => {
    console.log('Hola!');
  };

  return (
    <MainWrapper>
      <CustomInput placeholder="What's next?" />
      <AddButton onClick={handleAddItem}>+</AddButton>
    </MainWrapper>
  );
};

export default AddItem;
