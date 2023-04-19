import React from 'react';

import {FilterItem} from './styles';
import {IFilterButtonProps} from './types';

const FilterButton = ({active, filter, onClick}: IFilterButtonProps) => {
  return (
    <FilterItem filter={filter} active={active} onClick={onClick}>
      <p style={{color: 'white'}}>{filter}</p>
    </FilterItem>
  );
};

export default FilterButton;
