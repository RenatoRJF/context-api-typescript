import { Task } from '../../types';

export interface TasksState {
  all: Task[];
};

const state: TasksState = {
  all: []
}

export default state;
