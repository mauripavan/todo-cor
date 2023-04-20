import * as React from 'react';
import {ChangeEvent, useState} from 'react';
import {useRecoilState} from 'recoil';
import {XMarkIcon} from '@heroicons/react/24/solid';
import {
  modalState,
  selectedTodoItem as selectedTodoItemFromRecoil,
  todoListState,
} from '../../store/app-state';
import {Todo, TodoFields} from '../TodoList/types';
import {
  ButtonWrapper,
  CustomInput,
  CustomSelect,
  CustomTextArea,
  InputWrapper,
  MainWrapper,
  SubmitButton,
} from './styles';

export interface IModalProps {
  searchTitle: string;
  setSearchTitle: (s: string) => void;
}

const Modal = (props: IModalProps) => {
  const [, setModalVisible] = useRecoilState(modalState);
  const [todos, setTodos] = useRecoilState(todoListState);
  const [selectedTodoItem, setSelectedTodoItem] = useRecoilState<
    Todo | undefined
  >(selectedTodoItemFromRecoil);

  const [form, setForm] = useState<TodoFields>(
    selectedTodoItem || {
      title: props.searchTitle,
      description: '',
      priority: '',
      state: '',
    },
  );

  const addTodo = ({description, priority, state, title}: TodoFields) => {
    const lastId = todos.length > 0 ? todos[todos.length - 1].id : 1;

    const newTodo = {
      id: lastId + 1,
      title,
      description,
      priority,
      state,
      completed: false,
    };

    const todoList = [...todos];
    todoList.push(newTodo);
    setTodos(todoList);
    resetModal();
  };

  const saveItem = (modifiedItem: Todo) => {
    const todoList = todos.map((item) =>
      item.id === modifiedItem.id ? modifiedItem : item,
    );
    setTodos(todoList);
    resetModal();
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    selectedTodoItem
      ? saveItem({
          title: form.title,
          description: form.description,
          priority: form.priority,
          state: form.state,
          id: selectedTodoItem.id,
          completed: selectedTodoItem.completed,
        })
      : addTodo({
          title: form.title,
          description: form.description,
          priority: form.priority,
          state: form.state,
        });
  };

  const handleChange = (
    event:
      | ChangeEvent<HTMLInputElement>
      | ChangeEvent<HTMLTextAreaElement>
      | ChangeEvent<HTMLSelectElement>,
  ) => {
    setForm({
      ...form,
      [event.target.id]: event.target.value,
    });
  };

  const resetModal = () => {
    setModalVisible(false);
    setSelectedTodoItem(undefined);
    props.setSearchTitle('');
  };

  return (
    <MainWrapper>
      <XMarkIcon
        onClick={resetModal}
        style={{
          height: 15,
          width: 15,
          color: 'white',
          position: 'absolute',
          top: 15,
          right: 15,
          cursor: 'pointer',
        }}
      />
      <form onSubmit={handleSubmit}>
        <InputWrapper>
          <CustomInput
            type={'text'}
            placeholder="Title"
            value={form?.title}
            id="title"
            onChange={handleChange}
          />
        </InputWrapper>
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
          <InputWrapper>
            <CustomSelect onChange={handleChange} value={form.state} id="state">
              <option value="">State</option>
              <option value="new">New</option>
              <option value="in progress">In Progress</option>
            </CustomSelect>
          </InputWrapper>
          <InputWrapper>
            <CustomSelect
              onChange={handleChange}
              id="priority"
              value={form.priority}
            >
              <option value="">Priority</option>
              <option value="high">High</option>
              <option value="medium">Medium</option>
              <option value="low">Low</option>
            </CustomSelect>
          </InputWrapper>
        </div>
        <InputWrapper>
          <CustomTextArea
            placeholder="Description"
            value={form?.description}
            onChange={handleChange}
            id="description"
          />
        </InputWrapper>
        <ButtonWrapper>
          <SubmitButton type="submit">
            <p>{`${selectedTodoItem ? 'Save' : 'Add Task +'}`}</p>
          </SubmitButton>
        </ButtonWrapper>
      </form>
    </MainWrapper>
  );
};

export default Modal;
