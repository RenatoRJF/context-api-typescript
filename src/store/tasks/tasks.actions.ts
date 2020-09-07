import { Task } from '../../types';

export enum TASKS_TYPES {
  ADD = "ADD",
  REMOVE = "REMOVE",
}

interface addTask {
  type: typeof TASKS_TYPES.ADD,
  payload: Task;
}

interface removeTask {
  type: typeof TASKS_TYPES.REMOVE,
  id: string;
}

export type TasksActionTypes = addTask | removeTask;
