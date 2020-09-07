import { TASKS_TYPES, TasksActionTypes } from './tasks.actions';
import { TasksState } from './tasks.state';

const tasksReducer = (state: TasksState, action: TasksActionTypes) => {
  switch(action.type) {
    case TASKS_TYPES.ADD:
      return {
        ...state,
        all: [...state.all, action.payload],
      };

    case TASKS_TYPES.REMOVE:
      return {
        ...state,
        all: state.all.filter(task => task.id !== action.id),
      };

    default:
      return state;
  }
}

export default tasksReducer;
