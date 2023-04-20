import React from 'react';
import {useRecoilState} from 'recoil';
import {modalState} from '../../store/app-state';

import {AddButton, CustomInput, MainWrapper} from './styles';
import {IAddItemProps} from './type';

const AddItem = (props: IAddItemProps) => {
  const [, setModalVisible] = useRecoilState(modalState);
  const {searchTitle, setSearchTitle} = props;

  const handleAddItem = () => {
    searchTitle && setModalVisible(true);
  };

  const handleKeyDown = (e: any) => {
    if (e.keyCode === 13 && searchTitle) {
      setModalVisible(true);
    }
  };

  return (
    <MainWrapper>
      <CustomInput
        type="text"
        placeholder="What's next?"
        onChange={(e) => setSearchTitle(e.target.value)}
        value={searchTitle}
        onKeyDown={handleKeyDown}
      />
      <AddButton onClick={handleAddItem}>+</AddButton>
    </MainWrapper>
  );
};

export default AddItem;
