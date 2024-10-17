import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import type {Task} from "@/types/task"

export type InitialState = {
  status: 'idle' | 'loading' | 'complete';
  tasks: Task[];
};

// initial state contains two task
const initialState: InitialState = {
  status: 'idle',
  tasks: [
    {
      id:"1",
      description: 'Test task in expo'
    },
    {
      id:"2",
      description: 'Fake task'
    },
  ],
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask(state, action:PayloadAction<Task>) {
      const task = action.payload;
      state.tasks.push(task);
    },
    deleteTask(state, action:PayloadAction<string>) {
      const taskId = action.payload;
      const todoIndex = state.tasks.findIndex(e => e.id === taskId);
      if (todoIndex !== -1) {
        const currentTask = state.tasks
        currentTask.splice(todoIndex, 1)
        state.tasks = [...currentTask]
      }
    },
  },
});

//actions
export const {addTask,deleteTask} = tasksSlice.actions;

export default tasksSlice.reducer;
