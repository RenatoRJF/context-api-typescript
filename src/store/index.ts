import tasksReducer from './tasks/tasks.reducer';
import tasksState from './tasks/tasks.state';

const initialState = {
  tasks: { ...tasksState }
}

export default {
  initialState,
  reducer: (state: any, action: any) => ({
    tasks: tasksReducer(state.tasks, action)
  }),
}
