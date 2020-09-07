import React, { useState, KeyboardEvent, ChangeEvent } from 'react';
import { v4 as uuidv4 } from 'uuid';

import TasksList from '../TasksList/TasksList';
import { useAppState } from '../../utils/AppProvider';

import './Todo.css';

export const Todo = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const [{ tasks: tasksState }, dispatch] = useAppState();

  const handleSetTasks = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      dispatch({
        type: "ADD",
        payload: {
          id: uuidv4(),
          text: inputValue
        }
      });

      setInputValue("");
    }
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  }

  const handleRemoveTask = (id: string) => {
    dispatch({ type: "REMOVE", id });
  }

  return (
    <div className="Todo">
      <h1>TODO</h1>

      <input
        placeholder="Add new task"
        onKeyUp={handleSetTasks}
        value={inputValue}
        onChange={handleChange}
      />

      <TasksList tasks={tasksState.all} onRemoveTask={handleRemoveTask}/>
    </div>
  )
}

export default Todo;
