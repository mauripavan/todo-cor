import * as React from 'react';
import FilterButton from '../FilterButton';
import {ClearButtonWrapper, FilterBarWrapper, MainWrapper} from './styles';
import {IFilterProps} from './types';

const Filters = (props: IFilterProps) => {
  const {
    showAllTodos,
    handleClearCompleted,
    showCompletedTodos,
    showInProgressTodos,
    showNewTodos,
    activeFilter,
  } = props;
  return (
    <>
      <MainWrapper>
        <div style={{marginRight: 10, color: 'white'}}>
          <p>State:</p>
        </div>
        <FilterBarWrapper>
          <FilterButton
            filter="All"
            active={activeFilter}
            onClick={showAllTodos}
          />
          <FilterButton
            filter="In progress"
            active={activeFilter}
            onClick={showInProgressTodos}
          />
          <FilterButton
            filter="New"
            active={activeFilter}
            onClick={showNewTodos}
          />
          <FilterButton
            filter="Completed"
            active={activeFilter}
            onClick={showCompletedTodos}
          />
        </FilterBarWrapper>
      </MainWrapper>
      <ClearButtonWrapper onClick={handleClearCompleted}>
        <p style={{textAlign: 'center'}}>Clear Completed</p>
      </ClearButtonWrapper>
    </>
  );
};

export default Filters;
