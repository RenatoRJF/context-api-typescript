import React, { FC } from 'react';
import { FiX } from 'react-icons/fi';
import {Task} from '../../types';

interface TasksListProps {
  tasks: Task[];
  onRemoveTask: (id: string) => void;
}

const TasksList: FC<TasksListProps> = ({ tasks, onRemoveTask }) => (
  <ul>
    {tasks.map(task => (
      <li key={task.id}>
        <span>{task.text}</span>
        <FiX size={22} onClick={() => onRemoveTask(task.id)}/>
      </li>
    ))}
  </ul>
);

export default TasksList;
