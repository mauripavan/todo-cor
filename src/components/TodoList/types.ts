export type TodoFields = {
  title: string;
  description: string;
  state: string;
  priority: string;
};

export type Todo = TodoFields & {
  id: number;
  completed: boolean;
};
