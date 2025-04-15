import { configureStore } from '@reduxjs/toolkit';
import tasksReducer from './slice';


const loadState = () => {
  try {
    const state = localStorage.getItem('tasks');
    return state ? JSON.parse(state) : undefined;
  } catch {
    return undefined;
  }
};

const saveState = (state: any) => {
  try {
    localStorage.setItem('tasks', JSON.stringify(state));
  } catch {}
};

export const store = configureStore({
  reducer: {
    tasks: tasksReducer
  },
  preloadedState: {
    tasks: loadState()
  }
});

store.subscribe(() => {
  saveState(store.getState().tasks);
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
