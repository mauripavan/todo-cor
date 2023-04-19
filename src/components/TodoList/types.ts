export type Todo = {
  id: number;
  title: string;
  description: string;
  state: string;
  priority: string;
  completed: boolean;
  handleSetCompleted?: any;
  handleDelete?: any;
};
