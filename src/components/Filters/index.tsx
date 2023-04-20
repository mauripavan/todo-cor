import * as React from 'react';
import {useRecoilState} from 'recoil';
import {activeFilterState, todoListState} from '../../store/app-state';
import FilterButton from '../FilterButton';
import {ClearButtonWrapper, FilterBarWrapper, MainWrapper} from './styles';

const Filters = () => {
  const [todos, setTodos] = useRecoilState(todoListState);
  const [activeFilter, setActiveFilter] = useRecoilState(activeFilterState);

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
