import { ITask } from '@/types/type';
import { createSlice, nanoid, PayloadAction } from '@reduxjs/toolkit';


interface TasksState {
  tasks: ITask[];
}

const initialState: TasksState = {
  tasks: [
    {
      id: '1',
      title: 'Learn Redux',
      description: 'BLABLABLA',
      status: 'TODO'
    }
  ]
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<{ title: string; description: string }>) => {
      const { title, description } = action.payload;
      const newTask: ITask = {
        id: nanoid(),
        title,
        description,
        status: 'TODO'
      };
      state.tasks.push(newTask);
    },
    updateTaskStatus: (
      state, 
      action: PayloadAction<{ id: string; status: ITask['status'] }>
    ) => {
      const task = state.tasks.find(t => t.id === action.payload.id);
      if (task) task.status = action.payload.status;
    },
    deleteTask: (state, action: PayloadAction<string>) => {
      state.tasks = state.tasks.filter(t => t.id !== action.payload);
    }
  }
});

export const { addTask, updateTaskStatus, deleteTask } = tasksSlice.actions;
export default tasksSlice.reducer;