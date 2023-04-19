export interface IFilterProps {
  showAllTodos: () => void;
  showInProgressTodos: () => void;
  showCompletedTodos: () => void;
  showNewTodos: () => void;
  handleClearCompleted: () => void;
  activeFilter: string;
}
