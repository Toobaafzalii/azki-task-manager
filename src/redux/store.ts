import { configureStore } from '@reduxjs/toolkit';
import tasksReducer from './slice';
import {FLUSH, PAUSE, PERSIST, persistStore,persistReducer,PURGE, REGISTER, REHYDRATE} from 'redux-persist';
import storage from "redux-persist/lib/storage"

const persistConfig = {
  key: "root",
  storage,
}
const persistedReducer = persistReducer(persistConfig, tasksReducer);

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
    tasks: persistedReducer
  },
  preloadedState: {
    tasks: loadState()
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["persist/PERSIST", "persist/REHYDRATE" , FLUSH , PURGE , PAUSE, REHYDRATE, PERSIST, REGISTER],
      },
    })
});

store.subscribe(() => {
  saveState(store.getState().tasks);
});

export const persistor =  persistStore(store)
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
